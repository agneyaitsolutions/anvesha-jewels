/* Anvesha Jewels — site behaviour.
   Header, drawer, mega menus and footer are injected here so every page stays in step. */
(function () {
  "use strict";
  var D = window.AJ;
  var page = document.body.dataset.page || "";
  var cat = document.body.dataset.cat || "";

  /* ── icons ─────────────────────────────────────────── */
  var I = {
    arrow: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4"/></svg>',
    diag: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg>',
    chev: '<svg viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5"/></svg>',
    search: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="9" cy="9" r="6"/><path d="m13.5 13.5 4 4"/></svg>',
    insta: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="2.5" y="2.5" width="15" height="15" rx="4.2"/><circle cx="10" cy="10" r="3.6"/><circle cx="14.6" cy="5.4" r="1" fill="currentColor" stroke="none"/></svg>',
    reel: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="2.5" y="2.5" width="15" height="15" rx="4.2"/><path d="M8 7.3v5.4l4.4-2.7z" fill="currentColor" stroke="none"/></svg>',
    close: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="m4 4 12 12M16 4 4 16"/></svg>',
    chat: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M17 9.4c0 3.4-3.1 6.2-7 6.2-.9 0-1.8-.15-2.6-.43L3 16.5l1.3-3.2A5.9 5.9 0 0 1 3 9.4C3 6 6.1 3.2 10 3.2s7 2.8 7 6.2Z"/></svg>',
    dl: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M8 2v8M4.6 7.2 8 10.6l3.4-3.4M3 13.4h10"/></svg>',
    sliders: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M3 6h9M15 6h2M3 14h2M8 14h9"/><circle cx="13.5" cy="6" r="1.6"/><circle cx="6.5" cy="14" r="1.6"/></svg>',
    zoom: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="9" cy="9" r="6"/><path d="m13.5 13.5 4 4M7 9h4M9 7v4"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M20 12H5M10 6l-5 6 5 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M4 12h15M14 6l5 6-5 6"/></svg>',
    check: '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m2.5 7.3 3 3 6-6.6"/></svg>'
  };

  var CATS = ["rings", "bracelets", "necklaces", "earrings"];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }

  /* ── header ────────────────────────────────────────── */
  function header() {
    var navCats = CATS.map(function (c) {
      return '<a href="' + c + '.html">' + D.categories[c].name + ' ' + I.diag + '</a>';
    }).join("");
    var subCats = CATS.map(function (c) {
      return '<a href="' + c + '.html">' + D.categories[c].name + '</a>';
    }).join("");

    return '' +
'<header class="site-head">' +
  '<div class="wrap-wide">' +
    '<div class="head-top">' +
      '<button class="menu-btn" data-open-drawer aria-label="Open menu"><span class="bars"><i></i><i></i><i></i></span>Menu</button>' +
      '<a class="brand" href="index.html" aria-label="Anvesha Jewels — home"><img src="assets/logo.png" alt="Anvesha Jewels" width="178"></a>' +
      '<div class="head-tools">' +
        '<a href="' + D.instagram + '" target="_blank" rel="noopener" aria-label="Anvesha Jewels on Instagram">' + I.insta + '</a>' +
        '<button data-toggle-search aria-label="Search jewellery">' + I.search + '</button>' +
      '</div>' +
    '</div>' +
  '</div>' +
  '<div class="head-navbar">' +
    '<nav class="head-nav wrap-wide" aria-label="Primary">' +
      '<div><a class="nav-item" href="index.html"' + (page === "home" ? ' aria-current="page"' : '') + '>Home</a></div>' +
      '<div data-mega="jewellery">' +
        '<button class="nav-item" data-mega-btn aria-expanded="false">Jewellery ' + I.chev + '</button>' +
      '</div>' +
      '<div data-mega="collections">' +
        '<button class="nav-item" data-mega-btn aria-expanded="false">Collections ' + I.chev + '</button>' +
      '</div>' +
      '<div><a class="nav-item" href="about.html"' + (page === "about" ? ' aria-current="page"' : '') + '>About Us</a></div>' +
      '<div><a class="nav-item" href="contact.html"' + (page === "contact" ? ' aria-current="page"' : '') + '>Contact Us</a></div>' +
    '</nav>' +
  '</div>' +

    '<div class="mega mega--jewellery" data-mega-panel="jewellery">' +
      '<div class="wrap-wide"><div class="mega-inner">' +
        '<div><p class="eyebrow mega-col-head">Explore jewellery</p><div class="mega-list">' + navCats + '</div></div>' +
        '<div><p class="eyebrow mega-col-head">Make it personal</p>' +
          '<h3 class="display h-md" style="margin-bottom:14px">A piece that feels<br>like you.</h3>' +
          '<p class="p" style="margin-bottom:20px">Explore your preferred metal, diamond and design details with a personal quote.</p>' +
          '<a class="mlink" href="contact.html">Request guidance ' + I.diag + '</a></div>' +
        '<figure class="mega-fig" style="margin:0"><img src="assets/nav-jewellery.webp" alt="A gold ring set with an emerald and diamonds" loading="lazy">' +
          '<figcaption><a href="rings.html">A gesture, held close. Explore rings ' + I.diag + '</a></figcaption></figure>' +
      '</div></div>' +
    '</div>' +

    '<div class="mega mega--collections" data-mega-panel="collections">' +
      '<div class="wrap-wide"><div class="mega-inner">' +
        '<div><p class="eyebrow mega-col-head">Explore our collection</p>' +
          '<h3 class="display h-lg" style="margin-bottom:18px">Considered forms.<br>Personal expressions.</h3>' +
          '<p class="p" style="margin-bottom:26px;max-width:40ch">Discover the collection, from delicate everyday details to pieces for meaningful moments.</p>' +
          '<a class="btn btn--ghost" href="' + D.catalogue + '" data-catalogue>Download catalogue ' + I.dl + '</a></div>' +
        '<figure class="mega-fig" style="margin:0"><img src="assets/nav-collections.webp" alt="Gold cuff, emerald ring and emerald drop earrings on green silk" loading="lazy">' +
          '<div class="mega-links"><a href="collections.html">Explore the collection ' + I.diag + '</a>' +
          '<a href="collections.html#solene">Discover the Solene selection ' + I.diag + '</a></div></figure>' +
      '</div></div>' +
    '</div>' +

    '<div class="search-panel" data-search-panel>' +
      '<div class="wrap-wide"><form data-search-form role="search">' + I.search +
        '<input type="search" name="q" placeholder="Search jewellery" aria-label="Search jewellery">' +
        '<button class="mlink" type="submit">Search</button></form></div>' +
    '</div>' +
'</header>' +

'<div class="scrim" data-scrim></div>' +
'<aside class="drawer" data-drawer aria-label="Menu" aria-hidden="true">' +
  '<svg class="drawer-curve" aria-hidden="true" preserveAspectRatio="none"><path data-curve></path></svg>' +
  '<div class="drawer-top">' +
    '<a class="wordmark" href="index.html"><b>ANVESHA</b><i>JEWELS</i></a>' +
    '<button class="drawer-close" data-close-drawer>Close ' + I.close + '</button>' +
  '</div>' +
  '<form class="drawer-search" data-search-form>' + I.search +
    '<input type="search" name="q" placeholder="Search jewellery" aria-label="Search jewellery"></form>' +
  '<nav class="drawer-nav">' +
    '<div class="drawer-row"><a href="index.html">Home</a></div>' +
    '<div class="drawer-row"><button data-acc aria-expanded="false">Jewellery <span class="pm">+</span></button>' +
      '<div class="drawer-sub">' + subCats + '</div></div>' +
    '<div class="drawer-row"><button data-acc aria-expanded="false">Collections <span class="pm">+</span></button>' +
      '<div class="drawer-sub"><a href="collections.html">The collection</a><a href="collections.html#solene">Solene selection</a>' +
      '<a href="' + D.catalogue + '" data-catalogue>Download catalogue</a><a href="contact.html">Request guidance</a></div></div>' +
    '<div class="drawer-row"><a href="about.html">About Us</a></div>' +
    '<div class="drawer-row"><a href="contact.html">Contact Us</a></div>' +
  '</nav>' +
  '<div class="drawer-foot">' +
    '<a class="mlink mlink--ink" href="contact.html">Personal guidance · Make an inquiry ' + I.diag + '</a>' +
    '<a href="' + D.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + I.insta + '</a>' +
  '</div>' +
  '<p class="drawer-tag">For the moments that become you.</p>' +
'</aside>';
  }

  /* ── footer ────────────────────────────────────────── */
  function footer() {
    var jew = CATS.map(function (c) { return '<li><a href="' + c + '.html">' + D.categories[c].name + '</a></li>'; }).join("");
    return '' +
'<footer class="site-foot">' +
  '<div class="wrap-wide">' +
    '<div class="foot-grid">' +
      '<div><a class="foot-brand" href="index.html" aria-label="Anvesha Jewels — home">' +
        '<img src="assets/logo.png" alt="Anvesha Jewels" width="210" loading="lazy"></a>' +
        '<p class="foot-tag">For the moments that become you.</p></div>' +
      '<div class="foot-col"><h4>Jewellery</h4><ul>' + jew + '</ul></div>' +
      '<div class="foot-col"><h4>Anvesha</h4><ul>' +
        '<li><a href="collections.html">Collections</a></li>' +
        '<li><a href="about.html">About Us</a></li>' +
        '<li><a href="contact.html">Contact Us</a></li>' +
        '<li><a href="' + D.instagram + '" target="_blank" rel="noopener">Instagram</a></li></ul></div>' +
      '<div class="foot-col"><h4>Here to help</h4><ul>' +
        '<li><a href="contact.html#inquiry">Request a quote</a></li>' +
        '<li><a href="contact.html#inquiry">Make an inquiry</a></li>' +
        '<li><a href="about.html#care">Jewellery care</a></li>' +
        '<li><a href="about.html#sizing">Sizing guidance</a></li></ul></div>' +
    '</div>' +
    '<div class="foot-bar"><span>© 2026 Anvesha Jewels</span>' +
      '<nav><a href="about.html#privacy">Privacy policy</a><span>·</span><a href="about.html#terms">Terms of use</a></nav></div>' +
  '</div>' +
'</footer>';
  }

  /* ── shared blocks ─────────────────────────────────── */
  function ctaBand() {
    return '<section class="cta-band"><div class="wrap-wide"><div class="cta-inner">' +
      '<div><h2 class="display h-lg">A little guidance. A piece that feels like you.</h2>' +
      '<p class="p">Tell us what you have in mind. We can help you explore the details.</p></div>' +
      '<a class="btn btn--ghost-em" href="contact.html#inquiry">Make an inquiry ' + I.arrow + '</a>' +
      '</div></div></section>';
  }

  function card(p) {
    var href = "product.html?id=" + encodeURIComponent(p.code);
    return '<article class="pcard rv">' +
      '<a class="figwrap" href="' + href + '" aria-label="' + esc(p.name) + '">' +
        '<img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy">' +
        '<span class="go">' + I.diag + '</span></a>' +
      '<div class="row"><h3><a href="' + href + '">' + esc(p.name) + '</a></h3><span class="code">' + p.code + '</span></div>' +
      '<p class="meta">' + esc(p.meta) + '</p>' +
      '<a class="mlink" href="' + href + '">Request a quote</a>' +
      '</article>';
  }

  /* ── mount chrome ──────────────────────────────────── */
  document.body.insertAdjacentHTML("afterbegin", header());
  var ctaSlot = document.querySelector("[data-cta-band]");
  if (ctaSlot) ctaSlot.outerHTML = ctaBand();
  document.body.insertAdjacentHTML("beforeend", footer());
  document.body.insertAdjacentHTML("beforeend",
    '<div class="modal" data-quote aria-hidden="true" role="dialog" aria-modal="true"><div class="modal-bg" data-close-quote></div>' +
    '<div class="modal-card" data-quote-card></div></div>' +
    '<div class="lightbox" data-lightbox aria-hidden="true"><button data-close-lightbox aria-label="Close">' + I.close + '</button><img alt=""></div>');

  /* mark the active top-nav item */
  if (page === "category" || page === "product") {
    var jBtn = document.querySelector('[data-mega="jewellery"] .nav-item');
    if (jBtn) jBtn.classList.add("is-active");
  }
  if (page === "collections") {
    var cBtn = document.querySelector('[data-mega="collections"] .nav-item');
    if (cBtn) cBtn.classList.add("is-active");
  }
  var cur = document.querySelector('.head-nav [aria-current="page"]');
  if (cur) cur.classList.add("is-active");

  /* ── drawer ────────────────────────────────────────── */
  var drawer = document.querySelector("[data-drawer]");
  var scrim = document.querySelector("[data-scrim]");
  /* curved edge: bulges out while the menu slides, then settles flat (eased like the reference menu) */
  var curvePath = drawer.querySelector("[data-curve]"), curveSvg = drawer.querySelector(".drawer-curve"), curveRaf = 0;
  function bez(t) { /* cubic-bezier(.76,0,.24,1) approximation */ return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function animateCurve(from, to, ms) {
    cancelAnimationFrame(curveRaf);
    var H = window.innerHeight, t0 = performance.now();
    curveSvg.setAttribute("viewBox", "0 0 100 " + H);
    (function f(now) {
      var k = Math.min(1, (now - t0) / ms), c = from + (to - from) * bez(k);
      curvePath.setAttribute("d", "M0 0 Q" + c.toFixed(1) + " " + (H / 2) + " 0 " + H + " Z");
      if (k < 1) curveRaf = requestAnimationFrame(f);
    })(t0);
  }
  /* number each row and split its word into letters for the hover effect */
  [].forEach.call(drawer.querySelectorAll(".drawer-row"), function (row, i) {
    var el = row.querySelector(":scope > a, :scope > button"); if (!el) return;
    var label = el.firstChild && el.firstChild.nodeType === 3 ? el.firstChild : null; if (!label) return;
    var word = label.textContent.trim(), span = document.createElement("span"); span.className = "dw-word";
    span.innerHTML = word.split("").map(function (ch, k) { return '<i style="--k:' + k + '">' + (ch === " " ? "&nbsp;" : ch) + "</i>"; }).join("");
    var num = document.createElement("span"); num.className = "dw-num"; num.textContent = (i + 1) + ".";
    el.replaceChild(span, label); el.insertBefore(num, span);
  });
  function setDrawer(on) {
    if (on !== drawer.classList.contains("is-open")) animateCurve(on ? 100 : 0, on ? 0 : 100, on ? 1000 : 800);
    drawer.classList.toggle("is-open", on);
    scrim.classList.toggle("is-open", on);
    drawer.setAttribute("aria-hidden", on ? "false" : "true");
    document.body.classList.toggle("no-scroll", on);
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-open-drawer]")) { setDrawer(true); }
    else if (e.target.closest("[data-close-drawer]") || e.target.closest("[data-scrim]")) { setDrawer(false); }
    var acc = e.target.closest("[data-acc]");
    if (acc) {
      var row = acc.parentElement, on = !row.classList.contains("is-open");
      row.classList.toggle("is-open", on);
      acc.setAttribute("aria-expanded", String(on));
      acc.querySelector(".pm").textContent = on ? "–" : "+";
    }
  });

  /* ── mega menus + search ───────────────────────────── */
  var openMega = null;
  function closeMega() {
    if (!openMega) return;
    document.querySelector('[data-mega-panel="' + openMega + '"]').classList.remove("is-open");
    var b = document.querySelector('[data-mega="' + openMega + '"] [data-mega-btn]');
    b.classList.remove("is-open"); b.setAttribute("aria-expanded", "false");
    openMega = null;
  }
  function closeSearch() {
    document.querySelector("[data-search-panel]").classList.remove("is-open");
  }
  document.querySelectorAll("[data-mega-btn]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var key = btn.closest("[data-mega]").dataset.mega;
      var same = openMega === key;
      closeMega(); closeSearch();
      if (!same) {
        document.querySelector('[data-mega-panel="' + key + '"]').classList.add("is-open");
        btn.classList.add("is-open"); btn.setAttribute("aria-expanded", "true");
        openMega = key;
      }
    });
  });
  if (window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
    var hoverT;
    document.querySelectorAll("[data-mega-btn]").forEach(function (btn) {
      btn.addEventListener("mouseenter", function () {
        clearTimeout(hoverT);
        var key = btn.closest("[data-mega]").dataset.mega;
        if (openMega === key) return;
        closeMega(); closeSearch();
        document.querySelector('[data-mega-panel="' + key + '"]').classList.add("is-open");
        btn.classList.add("is-open"); btn.setAttribute("aria-expanded", "true"); openMega = key;
      });
    });
    document.querySelectorAll(".head-nav > a, .head-nav > div:not([data-mega]) a").forEach(function (a) { a.addEventListener("mouseenter", function () { closeMega(); }); });
    var head = document.querySelector(".site-head");
    head.addEventListener("mouseleave", function () { hoverT = setTimeout(closeMega, 180); });
    head.addEventListener("mouseenter", function () { clearTimeout(hoverT); });
  }
  document.querySelector("[data-toggle-search]").addEventListener("click", function (e) {
    e.stopPropagation(); closeMega();
    var p = document.querySelector("[data-search-panel]");
    var on = !p.classList.contains("is-open");
    p.classList.toggle("is-open", on);
    if (on) p.querySelector("input").focus();
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".site-head")) { closeMega(); closeSearch(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeMega(); closeSearch(); setDrawer(false); closeQuote(); closeLightbox(); }
  });
  document.querySelectorAll("[data-search-form]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = f.querySelector("input").value.trim();
      if (q) location.href = "rings.html?q=" + encodeURIComponent(q);
    });
  });
  document.addEventListener("click", function (e) {
    var c = e.target.closest("[data-catalogue]");
    if (c && (!c.getAttribute("href") || c.getAttribute("href") === "#")) {
      e.preventDefault();
      alert("The Anvesha Jewels catalogue PDF will be linked here once it is supplied.");
    }
  });

  /* ── hero carousel ─────────────────────────────────── */
  var hero = document.querySelector("[data-hero]");
  if (hero) {
    var slides = hero.querySelectorAll(".hero-slide");
    var idx = 0, timer;
    /* A single slide needs no carousel chrome. */
    if (slides.length < 2) {
      hero.querySelector(".hero-ui").remove();
      slides[0].classList.add("is-active");
      hero = null;
    }
  }
  if (hero) {
    var cur$ = hero.querySelector("[data-hero-cur]");
    var bar = hero.querySelector(".hero-bar i");
    var track = hero.querySelector(".hero-track");
    /* Slides run on automatically; the track scrolls sideways, no controls. */
    function go(n) {
      idx = (n + slides.length) % slides.length;
      track.style.transform = "translateX(-" + (idx * 100) + "%)";
      slides.forEach(function (s, i) {
        s.classList.toggle("is-active", i === idx);
        s.setAttribute("aria-hidden", i === idx ? "false" : "true");
      });
      cur$.textContent = String(idx + 1).padStart(2, "0");
      bar.style.transform = "translateX(" + (idx * 100) + "%)";
      restart();
    }
    function restart() { clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, 6500); }
    hero.querySelector("[data-hero-total]").textContent = String(slides.length).padStart(2, "0");
    bar.style.width = (100 / slides.length) + "%";
    go(0);
  }

  /* ── header height → --head-h, so the hero can fill exactly one screen ── */
  var head = document.querySelector(".site-head");
  function measureHead() {
    var h = head.offsetHeight;
    document.documentElement.style.setProperty("--head-h", h + "px");
    document.documentElement.style.setProperty("--hero-h", Math.max(420, window.innerHeight - h) + "px");
  }
  measureHead();
  window.addEventListener("resize", measureHead);
  window.addEventListener("orientationchange", measureHead);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureHead);

  /* ── listing page ──────────────────────────────────── */
  if (page === "category") {
    var c = D.categories[cat];
    var params = new URLSearchParams(location.search);
    var q = (params.get("q") || "").toLowerCase();

    document.querySelector("[data-cat-hero]").innerHTML =
      '<div><p class="eyebrow">The Anvesha selection</p>' +
      '<h1 class="display h-xl">' + c.name + '</h1>' +
      '<span class="script script--emerald">' + esc(c.script) + '</span>' +
      '<p class="lede">' + esc(c.intro) + '</p></div>' +
      '<img src="' + c.hero + '" alt="' + esc(c.name) + ' by Anvesha Jewels">';

    document.querySelector("[data-tabs]").innerHTML = CATS.map(function (k) {
      return '<a href="' + k + '.html"' + (k === cat ? ' class="is-active" aria-current="page"' : '') + '>' + D.categories[k].name + '</a>';
    }).join("");

    var all = D.products.filter(function (p) { return p.cat === cat; });
    var styleOpts = [];
    all.forEach(function (p) { if (styleOpts.indexOf(p.style) < 0) styleOpts.push(p.style); });
    function label(list, id) { var f = list.filter(function (x) { return x[0] === id; })[0]; return f ? f[1] : id; }

    function sel(key, name, opts) {
      return '<span class="selectish"><select data-filter="' + key + '" aria-label="' + name + '">' +
        '<option value="">' + name + '</option>' +
        opts.map(function (o) { return '<option value="' + o[0] + '">' + o[1] + '</option>'; }).join("") +
        '</select>' + I.chev + '</span>';
    }
    document.querySelector("[data-filters]").innerHTML =
      '<div class="filters-left">' + I.sliders +
        sel("metal", "Metal", D.filters.metal) +
        sel("diamond", "Diamond type", D.filters.diamond.filter(function (d) {
          return all.some(function (p) { return p.diamond === d[0]; }); })) +
        sel("style", "Style", styleOpts.map(function (s) { return [s, label(D.filters.style, s)]; })) +
      '</div>' +
      '<div class="filters-right"><span data-count></span>' +
        '<span class="selectish"><select data-sort aria-label="Sort"><option value="featured">Sort: Featured</option>' +
        '<option value="az">Sort: A – Z</option><option value="za">Sort: Z – A</option></select>' + I.chev + '</span></div>';

    var grid = document.querySelector("[data-grid]");
    var endNote = document.querySelector("[data-grid-end]");

    function render() {
      var f = {};
      document.querySelectorAll("[data-filter]").forEach(function (s) {
        f[s.dataset.filter] = s.value;
        s.closest(".selectish").classList.toggle("is-set", !!s.value);
      });
      var list = all.filter(function (p) {
        if (f.metal && p.metal.indexOf(f.metal) < 0) return false;
        if (f.diamond && p.diamond !== f.diamond) return false;
        if (f.style && p.style !== f.style) return false;
        if (q && (p.name + " " + p.meta + " " + p.code).toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
      var sort = document.querySelector("[data-sort]").value;
      if (sort === "az") list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      if (sort === "za") list.sort(function (a, b) { return b.name.localeCompare(a.name); });

      grid.innerHTML = list.length
        ? list.map(card).join("")
        : '<p class="grid-empty">No designs match these details just yet. Try another combination, or <a class="mlink" href="contact.html#inquiry">make an inquiry</a>.</p>';
      document.querySelector("[data-count]").textContent = list.length + (list.length === 1 ? " design" : " designs");
      endNote.textContent = list.length
        ? "You've explored all " + list.length + " design" + (list.length === 1 ? "" : "s") + " in " + c.name.toLowerCase() + "."
        : "";
      reveal();
    }
    document.querySelector("[data-filters]").addEventListener("change", render);
    if (q) {
      var note = el('<p class="crumbs" style="padding-bottom:8px">Showing results for “' + esc(q) + '” · <a class="mlink" href="' + cat + '.html">Clear</a></p>');
      document.querySelector("[data-filters]").before(note);
    }
    render();
  }

  /* ── product page ──────────────────────────────────── */
  var state = null;
  if (page === "product") {
    var id = new URLSearchParams(location.search).get("id") || "AJ-R001";
    var p = D.products.filter(function (x) { return x.code === id; })[0] || D.products[0];
    var pc = D.categories[p.cat];
    var gallery = p.gallery || [p.img];
    var isRing = p.cat === "rings";
    state = { metal: "gold", karat: "16K", diamond: "lab-grown", size: "14", product: p };

    document.title = "Anvesha Jewels · " + p.name;
    document.querySelector("[data-crumbs]").innerHTML =
      '<a href="index.html">Home</a> / <a href="' + p.cat + '.html">Jewellery</a> / <a href="' + p.cat + '.html">' + pc.name + '</a> / ' + esc(p.name);

    document.querySelector("[data-pdp-media]").innerHTML =
      '<div class="pdp-main"><img src="' + gallery[0] + '" alt="' + esc(p.name) + '" data-main>' +
        '<button class="pdp-zoom" data-zoom aria-label="View larger">' + I.zoom + '</button>' +
        '<span class="pdp-count" data-counter>01 / ' + String(gallery.length).padStart(2, "0") + '</span></div>' +
      (gallery.length > 1
        ? '<div class="pdp-thumbs">' +
            '<figure><img src="' + gallery[1] + '" alt="' + esc(p.name) + ' setting detail" data-thumb="1" loading="lazy"><figcaption>The setting, in detail</figcaption></figure>' +
            '<figure><img src="' + (gallery[2] || gallery[1]) + '" alt="' + esc(p.name) + ' worn" data-thumb="2" loading="lazy"><figcaption>A personal perspective</figcaption></figure>' +
          '</div>'
        : "");

    function chips(key, items) {
      return items.map(function (it) {
        var id2 = it.id || it, lab = it.label || it;
        return '<button class="chip" data-opt="' + key + '" data-val="' + id2 + '">' + lab + ' ' + I.check + '</button>';
      }).join("");
    }
    var metals = D.metals.filter(function (m) { return p.metal.indexOf(m.id) >= 0; });
    if (!metals.some(function (m) { return m.id === state.metal; })) state.metal = metals[0].id;

    document.querySelector("[data-pdp-info]").innerHTML =
      '<p class="eyebrow">' + pc.name + ' / The ' + esc(p.line) + ' selection</p>' +
      '<h1 class="display h-xl">' + esc(p.name).replace(" ", "<br>") + '</h1>' +
      '<p class="pdp-code">Jewellery code · ' + p.code + '</p>' +
      '<p class="p pdp-desc">' + esc(p.desc) + '</p>' +
      '<p class="pdp-personal">Made personal to your preferences. Select your details below to request a quote.</p>' +
      '<div class="opt"><div class="opt-head"><span>Metal</span><span data-out="metal"></span></div>' +
        '<div class="opt-row">' + chips("metal", metals) + '</div></div>' +
      '<div class="opt" data-karat-block><div class="opt-head"><span>Gold purity</span><span data-out="karat"></span></div>' +
        '<div class="opt-row">' + chips("karat", D.karats) + '</div>' +
        '<p class="opt-note">Karat applies to Gold and Rose Gold. Silver is quoted without a karat selection.</p></div>' +
      (p.diamond !== "none"
        ? '<div class="opt"><div class="opt-head"><span>Diamond preference</span><span data-out="diamond"></span></div>' +
          '<div class="opt-row" style="grid-template-columns:1fr 1fr">' + chips("diamond", D.diamonds) + '</div></div>'
        : "") +
      (isRing
        ? '<div class="opt"><div class="opt-size"><span class="opt-label">Ring size (India)</span>' +
          '<select data-opt-size aria-label="Ring size">' + D.ringSizes.map(function (s) {
            return '<option' + (s === state.size ? " selected" : "") + '>' + s + '</option>'; }).join("") + '</select>' +
          '<a href="about.html#sizing">Sizing guidance</a></div></div>'
        : '<div class="opt"><div class="opt-size"><span class="opt-label">Fit and length</span>' +
          '<a href="about.html#sizing">Sizing guidance</a></div></div>') +
      '<div class="pdp-cta"><button class="btn btn--solid" data-request>Request a quote ' + I.chat + '</button>' +
        '<p class="pdp-sel"><span data-selection></span><span>Continue with your selection on WhatsApp.</span></p></div>';

    document.querySelector("[data-pdp-detail]").innerHTML =
      '<div><h2 class="display h-md">The details that make it yours.</h2><p class="p">' + esc(p.detail) + '</p></div>' +
      '<div>' +
        '<div class="acc"><button aria-expanded="false">Jewellery care <span>+</span></button>' +
          '<div class="acc-body"><div><p class="p">Keep your piece away from perfume, lotion and household cleaners. Store it separately in a soft pouch, and bring it to us for a gentle professional clean and a prong check once a year.</p></div></div></div>' +
        '<div class="acc"><button aria-expanded="false">Sizing and personal guidance <span>+</span></button>' +
          '<div class="acc-body"><div><p class="p">Not sure of your size, or choosing for someone else? Tell us what you know and we will guide you — including a complimentary resize within the first six months where the design allows.</p></div></div></div>' +
      '</div>';

    var related = D.products.filter(function (x) { return x.cat === p.cat && x.code !== p.code; }).slice(0, 3);
    document.querySelector("[data-related]").innerHTML = related.map(card).join("");
    document.querySelector("[data-related-link]").innerHTML =
      '<a class="mlink" href="' + p.cat + '.html">Explore all ' + pc.name.toLowerCase() + ' ' + I.diag + '</a>';

    /* option behaviour */
    function syncOptions() {
      document.querySelectorAll("[data-opt]").forEach(function (b) {
        b.classList.toggle("is-on", state[b.dataset.opt] === b.dataset.val);
      });
      var silver = state.metal === "silver";
      var kb = document.querySelector("[data-karat-block]");
      if (kb) { kb.style.opacity = silver ? ".45" : "1"; kb.style.pointerEvents = silver ? "none" : "auto"; }
      var metalLabel = (D.metals.filter(function (m) { return m.id === state.metal; })[0] || {}).label;
      var out = { metal: metalLabel, karat: silver ? "—" : state.karat, diamond: state.diamond === "lab-grown" ? "Lab-grown" : "Natural" };
      Object.keys(out).forEach(function (k) {
        var n = document.querySelector('[data-out="' + k + '"]'); if (n) n.textContent = out[k];
      });
      document.querySelector("[data-selection]").textContent = "Your selection: " + selectionLine();
    }
    function selectionLine() {
      var bits = [(D.metals.filter(function (m) { return m.id === state.metal; })[0] || {}).label];
      if (state.metal !== "silver") bits.push(state.karat);
      if (p.diamond !== "none") bits.push(state.diamond === "lab-grown" ? "Lab-grown diamonds" : "Natural diamonds");
      if (isRing) bits.push("Size " + state.size);
      return bits.join(" · ");
    }
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-opt]");
      if (!b) return;
      state[b.dataset.opt] = b.dataset.val;
      syncOptions();
    });
    var sizeSel = document.querySelector("[data-opt-size]");
    if (sizeSel) sizeSel.addEventListener("change", function () { state.size = sizeSel.value; syncOptions(); });
    syncOptions();

    /* gallery */
    document.querySelectorAll("[data-thumb]").forEach(function (t) {
      t.addEventListener("click", function () {
        var main = document.querySelector("[data-main]"), was = main.src;
        main.src = t.src; t.src = was;
        document.querySelector("[data-counter]").textContent =
          String(Number(t.dataset.thumb) + 1).padStart(2, "0") + " / " + String(gallery.length).padStart(2, "0");
      });
    });
    document.querySelector("[data-zoom]").addEventListener("click", function () {
      openLightbox(document.querySelector("[data-main]").src);
    });

    /* accordions */
    document.querySelectorAll(".acc button").forEach(function (b) {
      b.addEventListener("click", function () {
        var on = !b.parentElement.classList.contains("is-open");
        b.parentElement.classList.toggle("is-open", on);
        b.setAttribute("aria-expanded", String(on));
      });
    });

    document.querySelector("[data-request]").addEventListener("click", function () { openQuote(p, selectionLine()); });
  }

  /* ── quote modal ───────────────────────────────────── */
  var modal = document.querySelector("[data-quote]");
  function openQuote(p, selection) {
    var msg = "Hello Anvesha Jewels, I'd like to request a quote for the " + p.name + " (" + p.code + ").\n\n" +
      "My selection: " + selection.replace(/ · /g, ", ") + ".\n\nPlease share the details and a personalised quote. Thank you.";
    document.querySelector("[data-quote-card]").innerHTML =
      '<div class="modal-top"><p class="eyebrow">Your personal quote</p>' +
      '<button data-close-quote aria-label="Close">' + I.close + '</button></div>' +
      '<h2 class="display h-lg">A little closer to<br>your perfect piece.</h2>' +
      '<div class="modal-item"><img src="' + p.img + '" alt="' + esc(p.name) + '">' +
        '<div><h3 class="display">' + esc(p.name) + '</h3><p class="code">' + p.code + '</p>' +
        '<p class="spec">' + esc(selection) + '</p></div></div>' +
      '<p class="modal-label">Your message</p>' +
      '<div class="modal-msg">' + esc(msg) + '</div>' +
      '<p class="modal-note">Continue to WhatsApp to share your selection with Anvesha Jewels.</p>' +
      '<a class="btn btn--solid btn--block" target="_blank" rel="noopener" href="https://wa.me/' + D.whatsapp + '?text=' + encodeURIComponent(msg) + '">Continue to WhatsApp ' + I.chat + '</a>' +
      '<button class="modal-back" data-close-quote>Back to my selection</button>';
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function closeQuote() {
    if (!modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }
  document.addEventListener("click", function (e) { if (e.target.closest("[data-close-quote]")) closeQuote(); });

  /* ── lightbox ──────────────────────────────────────── */
  var lb = document.querySelector("[data-lightbox]");
  function openLightbox(src) {
    lb.querySelector("img").src = src;
    lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function closeLightbox() {
    if (!lb.classList.contains("is-open")) return;
    lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }
  lb.addEventListener("click", closeLightbox);

  /* ── inquiry form ──────────────────────────────────── */
  var form = document.querySelector("[data-inquiry]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.querySelector("[data-form-ok]").classList.add("is-on");
      form.reset();
    });
  }

  /* ── reveal ────────────────────────────────────────── */
  var io = "IntersectionObserver" in window
    ? new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px" })
    : null;
  function reveal() {
    document.querySelectorAll(".rv:not(.in)").forEach(function (n) {
      if (io) io.observe(n); else n.classList.add("in");
    });
  }
  reveal();
})();
