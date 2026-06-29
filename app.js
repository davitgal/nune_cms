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
  var CATALOG_KEY = "fcms_catalog_v1";

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
  //  CATALOG (price-list) — домен key-менеджера
  // ============================================================
  var CAT_COLS = [
    { k: "name",      label: "Продукт",          cls: "cat-col-name" },
    { k: "productId", label: "Product ID",       cls: "cat-col-id", mono: true },
    { k: "price",     label: "Цена",             cls: "cat-col-price" },
    { k: "setupFee",  label: "Setup fee",        cls: "" },
    { k: "trial",     label: "Trial",            cls: "" },
    { k: "billing",   label: "Billing / variant",cls: "cat-col-billing", mono: true },
    { k: "segment",   label: "Сегмент",          cls: "" }
  ];

  function catMatches(row) {
    if (state.filter === "active" && row.status !== "on") return false;
    if (state.filter === "stopped" && row.status !== "off") return false;
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
      $("#product-title").textContent = "Каталог";
      $("#product-meta").textContent = "Нет данных каталога.";
      return;
    }
    var total = 0, on = 0;
    p.sections.forEach(function (s) {
      total += s.rows.length;
      on += s.rows.filter(function (r) { return r.status === "on"; }).length;
    });
    $("#product-title").textContent = p.name + " · каталог";
    $("#product-meta").textContent =
      total + " продуктов · " + on + " активных · " + p.sections.length + " секций · ведёт key-менеджер";

    p.sections.forEach(function (section, si) {
      var visible = section.rows.filter(catMatches);
      // hide a whole section if filtering/searching left it empty
      if (!visible.length && (state.query || state.filter !== "all")) return;

      var body = el("tbody");
      var sec = el("div", { class: "cat-section" }, [
        el("div", { class: "cat-section-head" }, [
          el("h3", { text: section.title }),
          el("span", { class: "count", text: String(section.rows.length) }),
          el("div", { class: "spacer" }),
          el("button", {
            class: "btn btn-ghost btn-sm", text: "+ строка",
            onclick: function () {
              section.rows.push({ name: "", productId: "", price: "", setupFee: "", trial: "", billing: "", segment: "", status: "on", comments: "" });
              persistCatalog(); renderCatalog();
            }
          })
        ])
      ]);

      var table = el("table", { class: "cat-table" });
      var headTr = el("tr");
      CAT_COLS.forEach(function (c) { headTr.appendChild(el("th", { text: c.label })); });
      headTr.appendChild(el("th", { text: "Статус" }));
      headTr.appendChild(el("th", { text: "Комментарий" }));
      headTr.appendChild(el("th", { text: "" }));
      table.appendChild(el("thead", {}, [headTr]));

      if (!visible.length) {
        sec.appendChild(el("div", { class: "cat-empty", text: "Пока пусто — нажмите «+ строка», чтобы добавить продукт." }));
      } else {
        visible.forEach(function (row) { body.appendChild(catRow(row, section)); });
        table.appendChild(body);
        sec.appendChild(el("div", { class: "cat-table-wrap" }, [table]));
      }
      view.appendChild(sec);
    });

    if (!view.children.length) {
      view.appendChild(el("div", { class: "empty", html: "Ничего не найдено.<br>Измените поиск или фильтр." }));
    }
  }

  function catCell(row, col) {
    var input = el("input", {
      type: "text", value: row[col.k] || "",
      class: col.mono ? "mono" : "",
      oninput: function (e) { row[col.k] = e.target.value; persistCatalog(); }
    });
    return el("td", { class: col.cls }, [input]);
  }

  function catRow(row, section) {
    var tr = el("tr");
    CAT_COLS.forEach(function (c) { tr.appendChild(catCell(row, c)); });

    // status select
    var sel = el("select", {
      class: row.status === "on" ? "st-on" : (row.status === "off" ? "st-off" : ""),
      onchange: function (e) {
        row.status = e.target.value;
        persistCatalog();
        if (state.filter !== "all") renderCatalog();
        else { sel.className = row.status === "on" ? "st-on" : (row.status === "off" ? "st-off" : ""); $("#product-meta") && renderCatalogMeta(); }
      }
    });
    [{ v: "on", t: "Вкл" }, { v: "off", t: "Выкл" }, { v: "", t: "—" }].forEach(function (o) {
      var opt = el("option", { value: o.v, text: o.t });
      if (o.v === row.status) opt.selected = true;
      sel.appendChild(opt);
    });
    tr.appendChild(el("td", {}, [sel]));

    // comments
    var cmt = el("input", {
      type: "text", value: row.comments || "", class: "",
      oninput: function (e) { row.comments = e.target.value; persistCatalog(); }
    });
    tr.appendChild(el("td", { class: "cat-col-cmt" }, [cmt]));

    // delete
    tr.appendChild(el("td", {}, [el("button", {
      class: "row-del", text: "🗑", title: "Удалить строку",
      onclick: function () {
        var idx = section.rows.indexOf(row);
        if (idx > -1) section.rows.splice(idx, 1);
        persistCatalog(); renderCatalog();
      }
    })]));
    return tr;
  }

  function renderCatalogMeta() {
    var p = currentCatProduct();
    if (!p) return;
    var total = 0, on = 0;
    p.sections.forEach(function (s) {
      total += s.rows.length;
      on += s.rows.filter(function (r) { return r.status === "on"; }).length;
    });
    $("#product-meta").textContent =
      total + " продуктов · " + on + " активных · " + p.sections.length + " секций · ведёт key-менеджер";
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
    p.sections[0].rows.push({ name: "", productId: "", price: "", setupFee: "", trial: "", billing: "", segment: "", status: "on", comments: "" });
    state.query = ""; $("#search").value = "";
    state.filter = "all";
    $$("#status-filter button").forEach(function (x) { x.classList.toggle("active", x.dataset.f === "all"); });
    persistCatalog();
    renderCatalog();
    toast("Добавлена строка в «" + p.sections[0].title + "»", "ok");
  }

  // ============================================================
  //  EDITOR DRAWER
  // ============================================================
  function openEditor(variant, isNew) {
    state.editing = clone(variant);
    state.isNew = isNew;
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
    var what = state.mode === "catalog" ? "каталог продуктов" : "онбординги";
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
