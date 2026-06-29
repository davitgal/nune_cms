/* ============================================================
   Followers CMS — frontend logic (vanilla, no build step)
   Data lives in localStorage, seeded from seed-data.js.
   ============================================================ */
(function () {
  "use strict";

  // ---- demo auth (frontend-only gate, not real security) ----
  var CREDS = { user: "admin", pass: "followers2026" };
  var AUTH_KEY = "fcms_auth";
  var DATA_KEY = "fcms_data_v1";
  var CATALOG_KEY = "fcms_catalog_v2";

  // ---- tiny helpers ----
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      else if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function uid(prefix) { return (prefix || "id") + "-" + Math.random().toString(36).slice(2, 9); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function esc(s) { return String(s == null ? "" : s); }

  // ---- state ----
  // mode: "onb" (онбординги — для продакта/QA) | "catalog" (прайс-лист — для key-менеджера)
  var state = {
    mode: "onb", data: null, catalog: null,
    productId: null, catProductId: null,
    filter: "all", query: "", editing: null, isNew: false
  };

  function loadData() {
    var saved = localStorage.getItem(DATA_KEY);
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return clone(window.SEED_DATA);
  }
  function loadCatalog() {
    var saved = localStorage.getItem(CATALOG_KEY);
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return clone(window.CATALOG_DATA || { products: [] });
  }
  function persist() { localStorage.setItem(DATA_KEY, JSON.stringify(state.data)); }
  function persistCatalog() { localStorage.setItem(CATALOG_KEY, JSON.stringify(state.catalog)); }
  function currentProduct() { return state.data.products.find(function (p) { return p.id === state.productId; }); }
  function currentCatProduct() { return state.catalog.products.find(function (p) { return p.id === state.catProductId; }); }

  // ============================================================
  //  AUTH
  // ============================================================
  function showApp() { $("#login").hidden = true; $("#app").hidden = false; boot(); }
  function showLogin() { $("#app").hidden = true; $("#login").hidden = false; }

  $("#login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var u = $("#login-user").value.trim(), p = $("#login-pass").value;
    if (u === CREDS.user && p === CREDS.pass) {
      sessionStorage.setItem(AUTH_KEY, "1");
      $("#login-error").hidden = true;
      showApp();
    } else {
      $("#login-error").hidden = false;
    }
  });
  $("#btn-logout").addEventListener("click", function () {
    sessionStorage.removeItem(AUTH_KEY); showLogin();
  });

  // ---- mobile sidebar ----
  function openSidebar() {
    document.body.classList.add("sidebar-open");
    $("#sidebar-backdrop").hidden = false;
  }
  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    $("#sidebar-backdrop").hidden = true;
  }
  $("#btn-menu").addEventListener("click", openSidebar);
  $("#sidebar-backdrop").addEventListener("click", closeSidebar);

  // ============================================================
  //  BOOT / NAV
  // ============================================================
  function boot() {
    state.data = loadData();
    state.catalog = loadCatalog();
    if (!state.productId || !currentProduct()) state.productId = state.data.products[0].id;
    if ((!state.catProductId || !currentCatProduct()) && state.catalog.products.length)
      state.catProductId = state.catalog.products[0].id;
    applyMode();
    renderNav();
    renderProduct();
  }

  // ---- mode (роль) switching ----
  function applyMode() {
    var isCat = state.mode === "catalog";
    $$("#mode-switch button").forEach(function (b) { b.classList.toggle("active", b.dataset.m === state.mode); });
    $("#variant-list").hidden = isCat;
    $("#catalog-view").hidden = !isCat;
    $("#btn-add").textContent = isCat ? "+ Продукт" : "+ Вариант";
    // relabel status filter for the active mode
    var labels = isCat
      ? { all: "Все", active: "Вкл", stopped: "Выкл" }
      : { all: "Все", active: "Активные", stopped: "На стопе" };
    $$("#status-filter button").forEach(function (b) { b.textContent = labels[b.dataset.f]; });
    $("#search").placeholder = isCat
      ? "Поиск по продукту, Product ID, billing…"
      : "Поиск по названию, variant key, ссылке…";
    $("#btn-add").title = isCat ? "Добавить продукт" : "Добавить вариант онбординга";
  }

  function switchMode(m) {
    if (state.mode === m) return;
    state.mode = m;
    state.query = ""; $("#search").value = "";
    state.filter = "all";
    $$("#status-filter button").forEach(function (x) { x.classList.toggle("active", x.dataset.f === "all"); });
    applyMode();
    renderNav();
    renderProduct();
    closeSidebar();
  }
  $$("#mode-switch button").forEach(function (b) {
    b.addEventListener("click", function () { switchMode(b.dataset.m); });
  });

  function renderNav() {
    var nav = $("#product-nav");
    nav.innerHTML = "";
    if (state.mode === "catalog") {
      state.catalog.products.forEach(function (p) {
        var count = p.sections.reduce(function (n, s) { return n + s.rows.length; }, 0);
        nav.appendChild(el("div", {
          class: "nav-item" + (p.id === state.catProductId ? " active" : ""),
          onclick: function () { state.catProductId = p.id; state.query = ""; $("#search").value = ""; renderNav(); renderProduct(); closeSidebar(); }
        }, [
          el("span", { text: p.name }),
          el("span", { class: "badge", text: String(count) })
        ]));
      });
      return;
    }
    state.data.products.forEach(function (p) {
      var item = el("div", {
        class: "nav-item" + (p.id === state.productId ? " active" : ""),
        onclick: function () { state.productId = p.id; state.query = ""; $("#search").value = ""; renderNav(); renderProduct(); closeSidebar(); }
      }, [
        el("span", { text: p.name }),
        el("span", { class: "badge", text: String(p.variants.length) })
      ]);
      nav.appendChild(item);
    });
  }

  function renderProduct() {
    if (state.mode === "catalog") { renderCatalog(); return; }
    var p = currentProduct();
    $("#product-title").textContent = p.name;
    var active = p.variants.filter(function (v) { return v.status === "active"; }).length;
    $("#product-meta").textContent =
      p.variants.length + " вариантов онбординга · " + active + " активных · биллинг: " + (p.billingLabel || "—");
    renderList();
  }

  // ============================================================
  //  PRODUCTS (price-list) — домен key-менеджера
  // ============================================================
  // editable fields shown in the product editor drawer
  var CAT_FIELDS = [
    { k: "name",      label: "Название продукта", ph: "Insta Followers Plan" },
    { k: "productId", label: "Product ID",        ph: "insta_follow_plan_…", mono: true },
    { k: "price",     label: "Цена",              ph: "$39.99 USD/month" },
    { k: "setupFee",  label: "Setup fee",         ph: "$4.99 USD" },
    { k: "trial",     label: "Trial",             ph: "3 days" },
    { k: "billing",   label: "Billing / variant", ph: "truegate id / variant", mono: true },
    { k: "segment",   label: "Сегмент",           ph: "орг / нон-орг / VAT" }
  ];

  function isFiltering() { return !!state.query || state.filter !== "all"; }

  function catMatches(row) {
    if (state.filter === "active" && row.status !== "on") return false;
    if (state.filter === "stopped" && row.status === "on") return false; // "Выкл" = всё, что не on
    if (state.query) {
      var q = state.query.toLowerCase();
      var hay = [row.name, row.productId, row.billing, row.segment, row.comments].join(" ").toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }

  function renderCatalog() {
    var p = currentCatProduct();
    var view = $("#catalog-view");
    view.innerHTML = "";
    if (!p) {
      $("#product-title").textContent = "Продукты";
      $("#product-meta").textContent = "Нет данных.";
      return;
    }
    renderCatalogMeta();

    p.sections.forEach(function (section) {
      var visible = section.rows.filter(catMatches);
      if (!visible.length && isFiltering()) return; // прячем пустую после фильтра секцию

      var accent = sectionAccent(section.title);
      var list = el("div", { class: "cat-list" });
      var sec = el("div", { class: "cat-section" }, [
        el("div", { class: "cat-section-head", style: "border-left:3px solid " + accent.color + ";background:" + accent.bg }, [
          el("h3", { text: section.title }),
          el("span", { class: "count", text: String(section.rows.length) }),
          el("div", { class: "spacer" }),
          el("button", {
            class: "btn btn-ghost btn-sm", text: "+ строка",
            title: "Добавить продукт в секцию «" + section.title + "»",
            onclick: function () { addCatRow(section); }
          })
        ])
      ]);

      if (!visible.length) {
        sec.appendChild(el("div", { class: "cat-empty", text: "Пока пусто — нажмите «+ строка», чтобы добавить продукт." }));
      } else {
        visible.forEach(function (row) { list.appendChild(catRow(row, section, accent)); });
        sec.appendChild(list);
      }
      view.appendChild(sec);
    });

    if (!view.children.length) {
      view.appendChild(el("div", { class: "empty", html: "Ничего не найдено.<br>Измените поиск или фильтр." }));
    }
  }

  // per-section accent colour (немного цвета + быстрее ориентироваться)
  function sectionAccent(title) {
    var t = (title || "").toLowerCase();
    if (t.indexOf("подписк") > -1) return { color: "#6c8cff", bg: "rgba(108,140,255,.10)" };
    if (t.indexOf("апсейл") > -1) return { color: "#8a6cff", bg: "rgba(138,108,255,.10)" };
    if (t.indexOf("инап") > -1 || t.indexOf("сетк") > -1) return { color: "#2fbf71", bg: "rgba(47,191,113,.10)" };
    if (t.indexOf("промо") > -1) return { color: "#f0a035", bg: "rgba(240,160,53,.10)" };
    if (t.indexOf("фолов") > -1 || t.indexOf("лайк") > -1 || t.indexOf("коммент") > -1) return { color: "#37b6c4", bg: "rgba(55,182,196,.10)" };
    return { color: "var(--line)", bg: "transparent" };
  }

  function catRow(row, section, accent) {
    var canReorder = !isFiltering();
    var handle = el("span", {
      class: "cat-grab" + (canReorder ? "" : " disabled"),
      text: "⠿",
      title: canReorder ? "Перетащите, чтобы изменить порядок" : "Сбросьте поиск и фильтр, чтобы сортировать",
      draggable: canReorder ? "true" : null
    });

    var statusOn = row.status === "on";
    var pill = el("button", {
      class: "pill " + (statusOn ? "active" : "stopped") + " pill-btn",
      text: statusOn ? "Вкл" : "Выкл",
      title: "Переключить статус",
      onclick: function (e) {
        e.stopPropagation();
        row.status = statusOn ? "off" : "on";
        persistCatalog();
        renderCatalog();
      }
    });

    var rowEl = el("div", {
      class: "cat-row",
      onclick: function () { openCatEditor(row, section, false); }
    }, [
      handle,
      el("div", { class: "cat-row-main" }, [
        el("div", { class: "cat-row-name", text: row.name || "Без названия" }),
        el("div", { class: "cat-row-id", text: row.productId || "— без product id —" })
      ]),
      el("div", { class: "cat-row-price", text: row.price || "" }),
      el("div", { class: "cat-row-seg", text: row.segment || "" }),
      pill,
      el("button", {
        class: "row-del", text: "🗑", title: "Удалить",
        onclick: function (e) {
          e.stopPropagation();
          if (!confirm("Удалить «" + (row.name || row.productId || "продукт") + "»?")) return;
          var idx = section.rows.indexOf(row);
          if (idx > -1) section.rows.splice(idx, 1);
          persistCatalog(); renderCatalog();
          toast("Удалено", "warn");
        }
      })
    ]);

    // drag-and-drop reorder (внутри одной секции)
    if (canReorder) {
      handle.addEventListener("dragstart", function (e) {
        state.dragRow = row; state.dragSection = section;
        e.dataTransfer.effectAllowed = "move";
        try { e.dataTransfer.setData("text/plain", ""); } catch (_) {}
        try { e.dataTransfer.setDragImage(rowEl, 20, 16); } catch (_) {}
        setTimeout(function () { rowEl.classList.add("dragging"); }, 0);
      });
      handle.addEventListener("dragend", function () {
        rowEl.classList.remove("dragging");
        $$(".cat-row.drop-target").forEach(function (n) { n.classList.remove("drop-target"); });
        state.dragRow = null; state.dragSection = null;
      });
      rowEl.addEventListener("dragover", function (e) {
        if (!state.dragRow || state.dragSection !== section || state.dragRow === row) return;
        e.preventDefault();
        rowEl.classList.add("drop-target");
      });
      rowEl.addEventListener("dragleave", function () { rowEl.classList.remove("drop-target"); });
      rowEl.addEventListener("drop", function (e) {
        if (!state.dragRow || state.dragSection !== section || state.dragRow === row) return;
        e.preventDefault();
        var from = section.rows.indexOf(state.dragRow);
        if (from > -1) section.rows.splice(from, 1);
        var to = section.rows.indexOf(row);
        section.rows.splice(to, 0, state.dragRow);
        persistCatalog(); renderCatalog();
      });
    }
    return rowEl;
  }

  function addCatRow(section) {
    // строка добавляется в секцию только после «Сохранить» (отмена ничего не создаёт)
    var row = { name: "", productId: "", price: "", setupFee: "", trial: "", billing: "", segment: "", status: "off", comments: "" };
    openCatEditor(row, section, true);
  }

  function renderCatalogMeta() {
    var p = currentCatProduct();
    if (!p) return;
    var total = 0, on = 0;
    p.sections.forEach(function (s) {
      total += s.rows.length;
      on += s.rows.filter(function (r) { return r.status === "on"; }).length;
    });
    $("#product-title").textContent = p.name + " · продукты";
    $("#product-meta").textContent =
      total + " продуктов · " + on + " включённых · " + p.sections.length + " секций · ведёт key-менеджер";
  }

  // ---- product editor (drawer) ----
  function openCatEditor(row, section, isNew) {
    state.editKind = "cat";
    state.editing = clone(row);
    state.isNew = isNew;
    state.catSection = section;
    state.catOriginal = row;
    $("#drawer-product").textContent = currentCatProduct().name + " · " + section.title;
    $("#drawer-title").textContent = isNew ? "Новый продукт" : (row.name || row.productId || "Продукт");
    $("#drawer-delete").textContent = "Удалить продукт";
    $("#drawer-delete").style.display = isNew ? "none" : "";
    renderCatForm();
    $("#drawer-overlay").hidden = false;
    $("#drawer").hidden = false;
  }

  function renderCatForm() {
    var d = state.editing, body = $("#drawer-body");
    body.innerHTML = "";
    var core = el("div", { class: "section" });
    CAT_FIELDS.forEach(function (f) {
      core.appendChild(field(f.label, d[f.k], function (v) { d[f.k] = v; }, { ph: f.ph }));
    });
    body.appendChild(core);

    var st = el("div", { class: "section" });
    st.appendChild(selectField("Статус (orders)", d.status || "off", [
      { v: "on", t: "Вкл — продукт live" },
      { v: "off", t: "Выкл — не используется" }
    ], function (v) { d.status = v; }));
    body.appendChild(st);

    var cm = el("div", { class: "section" });
    cm.appendChild(sectionHead("Комментарий"));
    cm.appendChild(field("", d.comments, function (v) { d.comments = v; }, { textarea: true, ph: "Заметка key-менеджера: где используется, A/B и т.д." }));
    body.appendChild(cm);
  }

  function saveCat() {
    var d = state.editing, sec = state.catSection;
    if (!d.name.trim() && !d.productId.trim()) { toast("Укажите название или Product ID", "warn"); return; }
    var idx = sec.rows.indexOf(state.catOriginal);
    if (idx > -1) sec.rows[idx] = d; else sec.rows.push(d);
    persistCatalog();
    closeEditor();
    renderCatalog();
    toast("Сохранено", "ok");
  }

  function deleteCat() {
    var sec = state.catSection;
    var idx = sec.rows.indexOf(state.catOriginal);
    if (idx < 0) { closeEditor(); return; } // ещё не сохранённый продукт
    var name = state.editing.name || state.editing.productId || "продукт";
    if (!confirm("Удалить «" + name + "»? Действие необратимо.")) return;
    sec.rows.splice(idx, 1);
    persistCatalog();
    closeEditor();
    renderCatalog();
    toast("Удалено", "warn");
  }

  function matches(v) {
    if (state.filter !== "all" && v.status !== state.filter) return false;
    if (state.query) {
      var q = state.query.toLowerCase();
      var hay = [v.name, v.variantKey, v.link].join(" ").toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }

  function renderList() {
    var p = currentProduct();
    var list = $("#variant-list");
    list.innerHTML = "";
    var shown = p.variants.filter(matches);
    if (!shown.length) {
      list.appendChild(el("div", { class: "empty", html: "Ничего не найдено.<br>Измените фильтр или создайте новый вариант." }));
      return;
    }
    shown.forEach(function (v) {
      var statusCls = v.status === "active" ? "active" : "stopped";
      var statusTxt = v.status === "active" ? "Активен" : "На стопе";
      var card = el("div", { class: "vcard", onclick: function () { openEditor(v, false); } }, [
        el("div", { class: "vcard-top" }, [
          el("div", {}, [
            el("h3", { text: v.name || "Без названия" }),
            el("div", { class: "vkey", html: v.variantKey && v.variantKey !== "-" ? "key: <code>" + esc(v.variantKey) + "</code>" : "<span class='muted'>без variant key</span>" })
          ]),
          el("span", { class: "pill " + statusCls, text: statusTxt })
        ]),
        el("div", { class: "vlink", text: v.link || "—" }),
        el("div", { class: "vcard-stats" }, [
          stat(v.plans.length, "тарифов"),
          stat(v.packs.length, "паков"),
          stat(v.upsells.length, "апсейлов")
        ])
      ]);
      list.appendChild(card);
    });
  }
  function stat(n, label) { return el("div", { class: "stat" }, [el("b", { text: String(n) }), label]); }

  // search + filters (mode-aware)
  function renderCurrent() { if (state.mode === "catalog") renderCatalog(); else renderList(); }
  $("#search").addEventListener("input", function (e) { state.query = e.target.value; renderCurrent(); });
  $$("#status-filter button").forEach(function (b) {
    b.addEventListener("click", function () {
      $$("#status-filter button").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active"); state.filter = b.dataset.f; renderCurrent();
    });
  });
  $("#btn-add").addEventListener("click", function () {
    if (state.mode === "catalog") { addCatalogProduct(); return; }
    var p = currentProduct();
    openEditor({
      id: uid(p.id + "-new"), status: "active", statusLabel: "Активен", name: "", link: "",
      variantKey: "", vat: false, localizationOn: false, languages: [], accrualLogic: "",
      cancelFlow: "", plans: [], packs: [], upsells: []
    }, true);
  });

  function addCatalogProduct() {
    var p = currentCatProduct();
    if (!p) return;
    if (!p.sections.length) p.sections.push({ title: "Подписки", rows: [] });
    addCatRow(p.sections[0]); // открывает редактор; строка добавится после «Сохранить»
  }

  // ============================================================
  //  EDITOR DRAWER
  // ============================================================
  function openEditor(variant, isNew) {
    state.editKind = "onb";
    state.editing = clone(variant);
    state.isNew = isNew;
    $("#drawer-delete").textContent = "Удалить вариант";
    $("#drawer-product").textContent = currentProduct().name;
    $("#drawer-title").textContent = isNew ? "Новый вариант" : (variant.name || "Вариант");
    $("#drawer-delete").style.display = isNew ? "none" : "";
    renderForm();
    $("#drawer-overlay").hidden = false;
    $("#drawer").hidden = false;
  }
  function closeEditor() {
    $("#drawer-overlay").hidden = true;
    $("#drawer").hidden = true;
    state.editing = null;
  }
  $("#drawer-close").addEventListener("click", closeEditor);
  $("#drawer-cancel").addEventListener("click", closeEditor);
  $("#drawer-overlay").addEventListener("click", closeEditor);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !$("#drawer").hidden) closeEditor(); });

  function field(label, value, onInput, opts) {
    opts = opts || {};
    var input;
    if (opts.textarea) input = el("textarea", { oninput: function (e) { onInput(e.target.value); } });
    else input = el("input", { type: opts.type || "text", placeholder: opts.ph || "", oninput: function (e) { onInput(e.target.value); } });
    if (opts.list) input.setAttribute("list", opts.list);
    if (opts.textarea) input.value = value || ""; else input.value = value || "";
    return el("label", { class: "field" }, [el("span", { text: label }), input]);
  }
  function toggle(label, checked, onChange) {
    var input = el("input", { type: "checkbox", onchange: function (e) { onChange(e.target.checked); } });
    input.checked = !!checked;
    return el("div", { class: "toggle-row" }, [
      el("span", { text: label }),
      el("label", { class: "switch" }, [input, el("span", { class: "slider" })])
    ]);
  }
  function selectField(label, value, options, onChange) {
    var sel = el("select", { onchange: function (e) { onChange(e.target.value); } });
    options.forEach(function (o) {
      var opt = el("option", { value: o.v, text: o.t });
      if (o.v === value) opt.selected = true;
      sel.appendChild(opt);
    });
    return el("label", { class: "field" }, [el("span", { text: label }), sel]);
  }

  function sectionHead(title, addLabel, onAdd) {
    var children = [el("h4", { text: title })];
    if (onAdd) children.push(el("button", { class: "btn btn-ghost btn-sm", text: addLabel, onclick: onAdd }));
    return el("div", { class: "section-head" }, children);
  }

  function catalogForOnb() {
    if (!state.catalog) return null;
    return state.catalog.products.find(function (p) { return p.id === state.productId; });
  }
  // datalists linking the onboarding editor to the key-manager's catalog
  function buildCatalogDatalists() {
    var wrap = el("div", {});
    var cp = catalogForOnb();
    var codes = el("datalist", { id: "dl-cat-codes" });
    var bills = el("datalist", { id: "dl-cat-billing" });
    var seenC = {}, seenB = {};
    if (cp) cp.sections.forEach(function (s) {
      s.rows.forEach(function (r) {
        if (r.productId && !seenC[r.productId]) {
          seenC[r.productId] = 1;
          codes.appendChild(el("option", { value: r.productId, label: [r.name, r.price].filter(Boolean).join(" · ") }));
        }
        if (r.billing && !seenB[r.billing]) {
          seenB[r.billing] = 1;
          bills.appendChild(el("option", { value: r.billing, label: [r.name, r.price].filter(Boolean).join(" · ") }));
        }
      });
    });
    wrap.appendChild(codes); wrap.appendChild(bills);
    return wrap;
  }

  function renderForm() {
    var d = state.editing, body = $("#drawer-body");
    body.innerHTML = "";
    body.appendChild(buildCatalogDatalists());

    // --- core ---
    var core = el("div", { class: "section" });
    core.appendChild(selectField("Статус", d.status, [
      { v: "active", t: "Активен" }, { v: "stopped", t: "На стопе" }
    ], function (val) { d.status = val; }));
    core.appendChild(field("Название онбординга", d.name, function (v) { d.name = v; }, { ph: "Напр. Олд дефолт с инапным апсейлом" }));
    core.appendChild(el("div", { class: "row2" }, [
      field("Variant key", d.variantKey, function (v) { d.variantKey = v; }, { ph: "old_default" }),
      field("Флоу отмены подписки", d.cancelFlow, function (v) { d.cancelFlow = v; }, { ph: "Терминейт линка" })
    ]));
    core.appendChild(field("Ссылка (онбординг)", d.link, function (v) { d.link = v; }, { ph: "https://…/onboarding" }));
    body.appendChild(core);

    // --- flags ---
    var flags = el("div", { class: "section" });
    flags.appendChild(sectionHead("Параметры"));
    flags.appendChild(toggle("VAT", d.vat, function (v) { d.vat = v; }));
    flags.appendChild(toggle("Локализация", d.localizationOn, function (v) { d.localizationOn = v; renderForm(); }));
    if (d.localizationOn) flags.appendChild(langsEditor(d));
    body.appendChild(flags);

    // --- accrual logic ---
    var logic = el("div", { class: "section" });
    logic.appendChild(sectionHead("Логика начисления"));
    logic.appendChild(field("", d.accrualLogic, function (v) { d.accrualLogic = v; }, { textarea: true, ph: "Описание логики начисления фолловеров / лайков / комментов" }));
    body.appendChild(logic);

    // --- plans ---
    body.appendChild(repeaterSection("Тарифы подписки", d.plans, "+ тариф",
      function () { return { name: "", price: "", billingId: "" }; },
      function (item, i) {
        return [
          field("Продукт", item.name, function (v) { item.name = v; }, { ph: "Basic Plan" }),
          field("Цена", item.price, function (v) { item.price = v; }, { ph: "3 дня триал за $1.99, далее $19.99 в месяц" }),
          field(currentProduct().billingLabel || "Billing ID", item.billingId, function (v) { item.billingId = v; }, { ph: "recurly / truegate id", list: "dl-cat-billing" })
        ];
      }));

    // --- packs ---
    body.appendChild(repeaterSection("Инапная сетка (паки)", d.packs, "+ пак",
      function () { return { name: "", code: "" }; },
      function (item) {
        return [el("div", { class: "row2" }, [
          field("Название", item.name, function (v) { item.name = v; }, { ph: "700 Followers - $14.99" }),
          field("Product code", item.code, function (v) { item.code = v; }, { ph: "1_time_insta_pack_…", list: "dl-cat-codes" })
        ])];
      }));

    // --- upsells ---
    body.appendChild(repeaterSection("Апсейлы", d.upsells, "+ апсейл",
      function () { return { title: "Апсейл", main: "", mainCode: "", discount: "", discountCode: "" }; },
      function (item) {
        return [
          field("Заголовок", item.title, function (v) { item.title = v; }, { ph: "Апсейл 1" }),
          el("div", { class: "row2" }, [
            field("Основной", item.main, function (v) { item.main = v; }, { ph: "1.5K лайков за $19.99" }),
            field("Product code", item.mainCode, function (v) { item.mainCode = v; }, { list: "dl-cat-codes" })
          ]),
          el("div", { class: "row2" }, [
            field("Скидочный", item.discount, function (v) { item.discount = v; }, { ph: "1.5K лайков за $14.99" }),
            field("Product code", item.discountCode, function (v) { item.discountCode = v; }, { list: "dl-cat-codes" })
          ])
        ];
      }));
  }

  function langsEditor(d) {
    var wrap = el("div", {});
    var chips = el("div", { class: "chips" });
    function redraw() {
      chips.innerHTML = "";
      d.languages.forEach(function (lng, i) {
        chips.appendChild(el("span", { class: "chip" }, [
          lng,
          el("button", { text: "✕", title: "Удалить", onclick: function () { d.languages.splice(i, 1); redraw(); } })
        ]));
      });
    }
    redraw();
    var input = el("input", {
      type: "text", placeholder: "Добавить язык + Enter",
      onkeydown: function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          var v = e.target.value.trim();
          if (v) { d.languages.push(v); e.target.value = ""; redraw(); }
        }
      }
    });
    wrap.appendChild(el("label", { class: "field", style: "margin-top:10px" }, [
      el("span", { text: "Языки локализации" }), input
    ]));
    wrap.appendChild(chips);
    return wrap;
  }

  function repeaterSection(title, arr, addLabel, factory, fieldsFn) {
    var sec = el("div", { class: "section" });
    var rep = el("div", { class: "repeater" });
    function redraw() {
      rep.innerHTML = "";
      if (!arr.length) rep.appendChild(el("div", { class: "muted", text: "Пока пусто.", style: "font-size:13px;padding:4px 0" }));
      arr.forEach(function (item, i) {
        var box = el("div", { class: "rep-item" }, [
          el("div", { class: "rep-num", text: "#" + (i + 1) }),
          el("button", { class: "rep-del", text: "🗑", title: "Удалить", onclick: function () { arr.splice(i, 1); redraw(); } }),
          el("div", { class: "rep-grid" }, fieldsFn(item, i))
        ]);
        rep.appendChild(box);
      });
    }
    redraw();
    sec.appendChild(sectionHead(title, addLabel, function () { arr.push(factory()); redraw(); }));
    sec.appendChild(rep);
    return sec;
  }

  // ---- save / delete ----
  $("#drawer-save").addEventListener("click", function () {
    if (state.editKind === "cat") { saveCat(); return; }
    var d = state.editing, p = currentProduct();
    if (!d.name.trim()) { toast("Укажите название варианта", "warn"); return; }
    d.statusLabel = d.status === "active" ? "Активен" : "На стопе";
    if (state.isNew) {
      p.variants.push(d);
    } else {
      var idx = p.variants.findIndex(function (v) { return v.id === d.id; });
      if (idx > -1) p.variants[idx] = d; else p.variants.push(d);
    }
    persist();
    closeEditor();
    renderNav(); renderProduct();
    toast("Сохранено", "ok");
  });
  $("#drawer-delete").addEventListener("click", function () {
    if (state.editKind === "cat") { deleteCat(); return; }
    var d = state.editing, p = currentProduct();
    if (!confirm("Удалить вариант «" + (d.name || "без названия") + "»? Действие необратимо.")) return;
    p.variants = p.variants.filter(function (v) { return v.id !== d.id; });
    persist();
    closeEditor();
    renderNav(); renderProduct();
    toast("Вариант удалён", "warn");
  });

  // ============================================================
  //  EXPORT / RESET
  // ============================================================
  $("#btn-export").addEventListener("click", function () {
    var payload = { onboardings: state.data, catalog: state.catalog };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = el("a", { href: url, download: "followers-config.json" });
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    toast("Экспортировано: онбординги + каталог", "ok");
  });
  $("#btn-reset").addEventListener("click", function () {
    var what = state.mode === "catalog" ? "продукты" : "онбординги";
    if (!confirm("Сбросить «" + what + "» к исходным данным из таблицы?")) return;
    if (state.mode === "catalog") { localStorage.removeItem(CATALOG_KEY); state.catalog = loadCatalog(); }
    else { localStorage.removeItem(DATA_KEY); state.data = loadData(); }
    renderNav();
    renderProduct();
    toast("Сброшено к исходным: " + what, "warn");
  });

  // ---- toast ----
  var toastTimer;
  function toast(msg, kind) {
    var t = $("#toast");
    t.textContent = msg;
    t.className = "toast" + (kind ? " " + kind : "");
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 2200);
  }

  // ============================================================
  //  START
  // ============================================================
  if (sessionStorage.getItem(AUTH_KEY) === "1") showApp();
  else showLogin();
})();
