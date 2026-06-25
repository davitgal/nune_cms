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
  var state = { data: null, productId: null, filter: "all", query: "", editing: null, isNew: false };

  function loadData() {
    var saved = localStorage.getItem(DATA_KEY);
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return clone(window.SEED_DATA);
  }
  function persist() { localStorage.setItem(DATA_KEY, JSON.stringify(state.data)); }
  function currentProduct() { return state.data.products.find(function (p) { return p.id === state.productId; }); }

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

  // ============================================================
  //  BOOT / NAV
  // ============================================================
  function boot() {
    state.data = loadData();
    if (!state.productId || !currentProduct()) state.productId = state.data.products[0].id;
    renderNav();
    renderProduct();
  }

  function renderNav() {
    var nav = $("#product-nav");
    nav.innerHTML = "";
    state.data.products.forEach(function (p) {
      var item = el("div", {
        class: "nav-item" + (p.id === state.productId ? " active" : ""),
        onclick: function () { state.productId = p.id; state.query = ""; $("#search").value = ""; renderNav(); renderProduct(); }
      }, [
        el("span", { text: p.name }),
        el("span", { class: "badge", text: String(p.variants.length) })
      ]);
      nav.appendChild(item);
    });
  }

  function renderProduct() {
    var p = currentProduct();
    $("#product-title").textContent = p.name;
    var active = p.variants.filter(function (v) { return v.status === "active"; }).length;
    $("#product-meta").textContent =
      p.variants.length + " вариантов онбординга · " + active + " активных · биллинг: " + (p.billingLabel || "—");
    renderList();
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

  // search + filters
  $("#search").addEventListener("input", function (e) { state.query = e.target.value; renderList(); });
  $$("#status-filter button").forEach(function (b) {
    b.addEventListener("click", function () {
      $$("#status-filter button").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active"); state.filter = b.dataset.f; renderList();
    });
  });
  $("#btn-add").addEventListener("click", function () {
    var p = currentProduct();
    openEditor({
      id: uid(p.id + "-new"), status: "active", statusLabel: "Активен", name: "", link: "",
      variantKey: "", vat: false, localizationOn: false, languages: [], accrualLogic: "",
      cancelFlow: "", plans: [], packs: [], upsells: []
    }, true);
  });

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

  function renderForm() {
    var d = state.editing, body = $("#drawer-body");
    body.innerHTML = "";

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
          field(currentProduct().billingLabel || "Billing ID", item.billingId, function (v) { item.billingId = v; }, { ph: "recurly / truegate id" })
        ];
      }));

    // --- packs ---
    body.appendChild(repeaterSection("Инапная сетка (паки)", d.packs, "+ пак",
      function () { return { name: "", code: "" }; },
      function (item) {
        return [el("div", { class: "row2" }, [
          field("Название", item.name, function (v) { item.name = v; }, { ph: "700 Followers - $14.99" }),
          field("Product code", item.code, function (v) { item.code = v; }, { ph: "1_time_insta_pack_…" })
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
            field("Product code", item.mainCode, function (v) { item.mainCode = v; })
          ]),
          el("div", { class: "row2" }, [
            field("Скидочный", item.discount, function (v) { item.discount = v; }, { ph: "1.5K лайков за $14.99" }),
            field("Product code", item.discountCode, function (v) { item.discountCode = v; })
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
    var blob = new Blob([JSON.stringify(state.data, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = el("a", { href: url, download: "followers-products-config.json" });
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    toast("Экспортировано в JSON", "ok");
  });
  $("#btn-reset").addEventListener("click", function () {
    if (!confirm("Сбросить все изменения и вернуть исходные данные из таблицы?")) return;
    localStorage.removeItem(DATA_KEY);
    boot();
    toast("Данные сброшены к исходным", "warn");
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
