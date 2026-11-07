/* Anvesha Jewels: site behaviour.
   Header, drawer, mega menus and footer are injected here so every page stays in step. */
(function () {
  "use strict";
  var D = window.AJ;
  var page = document.body.dataset.page || "";
  var cat = document.body.dataset.cat || "";

  /* ── icons ─────────────────────────────────────────── */
  var I = {
    ruler: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="2" y="6.5" width="16" height="7" rx=".6"/><path d="M5 6.5v3M8 6.5v2M11 6.5v3M14 6.5v2"/></svg>',
    swap: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M4 7h11l-3-3M16 13H5l3 3"/></svg>',
    lock: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="4.5" y="9" width="11" height="8" rx="1"/><path d="M7 9V6.5a3 3 0 0 1 6 0V9"/></svg>',
    arrow: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4"/></svg>',
    diag: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg>',
    chev: '<svg viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5"/></svg>',
    search: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="9" cy="9" r="6"/><path d="m13.5 13.5 4 4"/></svg>',
    insta: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ig-sg" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#f09433"/><stop offset="25%" stop-color="#e6683c"/><stop offset="50%" stop-color="#dc2743"/><stop offset="75%" stop-color="#cc2366"/><stop offset="100%" stop-color="#bc1888"/></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#ig-sg)" stroke-width="2"/><circle cx="12" cy="12" r="4.2" stroke="url(#ig-sg)" stroke-width="1.8"/><circle cx="17.4" cy="6.6" r="1.3" fill="url(#ig-sg)"/></svg>',
    reel: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="2.5" y="2.5" width="15" height="15" rx="4.2"/><path d="M8 7.3v5.4l4.4-2.7z" fill="currentColor" stroke="none"/></svg>',
    close: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="m4 4 12 12M16 4 4 16"/></svg>',
    chat: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M17 9.4c0 3.4-3.1 6.2-7 6.2-.9 0-1.8-.15-2.6-.43L3 16.5l1.3-3.2A5.9 5.9 0 0 1 3 9.4C3 6 6.1 3.2 10 3.2s7 2.8 7 6.2Z"/></svg>',
    dl: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M8 2v8M4.6 7.2 8 10.6l3.4-3.4M3 13.4h10"/></svg>',
    sliders: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M3 6h9M15 6h2M3 14h2M8 14h9"/><circle cx="13.5" cy="6" r="1.6"/><circle cx="6.5" cy="14" r="1.6"/></svg>',
    zoom: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="9" cy="9" r="6"/><path d="m13.5 13.5 4 4M7 9h4M9 7v4"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M20 12H5M10 6l-5 6 5 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M4 12h15M14 6l5 6-5 6"/></svg>',
    check: '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m2.5 7.3 3 3 6-6.6"/></svg>',
    fb: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#1877F2"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" fill="#0A66C2"/><rect x="2" y="9" width="4" height="12" fill="#0A66C2"/><circle cx="4" cy="4" r="2" fill="#0A66C2"/></svg>',
    google: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/></svg>'
  };

  var CATS = ["rings", "bracelets", "necklaces", "earrings"];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }

  /* ── search: every word must match the start of a word in the piece's details,
     so "gold ring" works and "ring" no longer pulls in earrings ── */
  function words(str) {
    return String(str || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).map(function (w) {
      return w.length > 3 && /s$/.test(w) && !/ss$/.test(w) ? w.slice(0, -1) : w;
    });
  }
  function searchProducts(q) {
    var t = words(q);
    if (!t.length) return [];
    return D.products.filter(function (p) {
      var hay = words([p.name, p.line, p.meta, p.code, p.cat, (D.categories[p.cat] || {}).name,
        p.style, (p.metal || []).join(" "), p.diamond].join(" "));
      return t.every(function (x) { return hay.some(function (w) { return w.indexOf(x) === 0; }); });
    });
  }

  /* ── header ────────────────────────────────────────── */
  function header() {
    var navCats = CATS.map(function (c) {
      return '<a href=\"/' + c + '">' + D.categories[c].name + ' ' + I.diag + '</a>';
    }).join("");
    var subCats = CATS.map(function (c) {
      return '<a href=\"/' + c + '">' + D.categories[c].name + '</a>';
    }).join("");

    return '' +
'<header class="site-head">' +
  '<div class="wrap-wide">' +
    '<div class="head-top">' +
      '<button class="menu-btn" data-open-drawer aria-label="Open menu"><span class="bars"><i></i><i></i><i></i></span>Menu</button>' +
      '<a class="brand" href="/" aria-label="Anvesha Jewels, home"><img src="/assets/logo.png" alt="Anvesha Jewels" width="178"></a>' +
      '<div class="head-tools">' +
        '<a href="' + D.instagram + '" target="_blank" rel="noopener" aria-label="Anvesha Jewels on Instagram">' + I.insta + '</a>' +
        '<button data-toggle-search aria-label="Search jewellery">' + I.search + '</button>' +
      '</div>' +
    '</div>' +
  '</div>' +
  '<div class="head-navbar">' +
    '<nav class="head-nav wrap-wide" aria-label="Primary">' +
      '<div><a class="nav-item" href="/"' + (page === "home" ? ' aria-current="page"' : '') + '>Home</a></div>' +
      '<div data-mega="jewellery">' +
        '<button class="nav-item" data-mega-btn aria-expanded="false">Jewellery ' + I.chev + '</button>' +
      '</div>' +
      '<div data-mega="collections">' +
        '<button class="nav-item" data-mega-btn aria-expanded="false">Collections ' + I.chev + '</button>' +
      '</div>' +
      '<div><a class="nav-item" href="/about"' + (page === "about" ? ' aria-current="page"' : '') + '>About Us</a></div>' +
      '<div><a class="nav-item" href="/contact"' + (page === "contact" ? ' aria-current="page"' : '') + '>Contact Us</a></div>' +
    '</nav>' +
  '</div>' +

    '<div class="mega mega--jewellery" data-mega-panel="jewellery">' +
      '<div class="wrap-wide"><div class="mega-inner">' +
        '<div><p class="eyebrow mega-col-head">Explore jewellery</p><div class="mega-list">' + navCats + '</div></div>' +
        '<div><p class="eyebrow mega-col-head">Make it personal</p>' +
          '<h3 class="display h-md" style="margin-bottom:14px">A piece that feels<br>like you.</h3>' +
          '<p class="p" style="margin-bottom:20px">Explore your preferred metal, diamond and design details with a personal quote.</p>' +
          '<a class="mlink" href="/contact">Request guidance ' + I.diag + '</a></div>' +
        '<figure class="mega-fig" style="margin:0"><img src="/assets/nav-jewellery.webp" alt="A gold ring set with an emerald and diamonds" loading="lazy">' +
          '<figcaption><a href="/rings">A gesture, held close. Explore rings ' + I.diag + '</a></figcaption></figure>' +
      '</div></div>' +
    '</div>' +

    '<div class="mega mega--collections" data-mega-panel="collections">' +
      '<div class="wrap-wide"><div class="mega-inner">' +
        '<div><p class="eyebrow mega-col-head">Explore our collection</p>' +
          '<h3 class="display h-lg" style="margin-bottom:18px">Considered forms.<br>Personal expressions.</h3>' +
          '<p class="p" style="margin-bottom:26px;max-width:40ch">Discover the collection, from delicate everyday details to pieces for meaningful moments.</p>' +
          '<a class="btn btn--ghost" href="' + D.catalogue + '" data-catalogue>Download catalogue ' + I.dl + '</a></div>' +
        '<figure class="mega-fig" style="margin:0"><img src="/assets/nav-collections.webp" alt="Gold cuff, emerald ring and emerald drop earrings on green silk" loading="lazy">' +
          '<div class="mega-links"><a href="/collections">Explore the collection ' + I.diag + '</a>' +
          '<a href="/collections#solene">Discover the Solene selection ' + I.diag + '</a></div></figure>' +
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
    '<a class="wordmark" href="/"><b>ANVESHA</b><i>JEWELS</i></a>' +
    '<button class="drawer-close" data-close-drawer>Close ' + I.close + '</button>' +
  '</div>' +
  '<form class="drawer-search" data-search-form>' + I.search +
    '<input type="search" name="q" placeholder="Search jewellery" aria-label="Search jewellery"></form>' +
  '<nav class="drawer-nav">' +
    '<div class="drawer-row"><a href="/">Home</a></div>' +
    '<div class="drawer-row"><button data-acc aria-expanded="false">Jewellery <span class="pm">+</span></button>' +
      '<div class="drawer-sub">' + subCats + '</div></div>' +
    '<div class="drawer-row"><button data-acc aria-expanded="false">Collections <span class="pm">+</span></button>' +
      '<div class="drawer-sub"><a href="/collections">The collection</a><a href="/collections#solene">Solene selection</a>' +
      '<a href="' + D.catalogue + '" data-catalogue>Download catalogue</a><a href="/contact">Request guidance</a></div></div>' +
    '<div class="drawer-row"><a href="/about">About Us</a></div>' +
    '<div class="drawer-row"><a href="/contact">Contact Us</a></div>' +
  '</nav>' +
  '<div class="drawer-foot">' +
    '<a class="mlink mlink--ink" href="/contact">Personal guidance · Make an inquiry ' + I.diag + '</a>' +
    '<a href="' + D.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + I.insta + '</a>' +
  '</div>' +
  '<p class="drawer-tag">For the moments that become you.</p>' +
'</aside>';
  }

  /* ── footer ────────────────────────────────────────── */
  function footer() {
    return '' +
'<footer class="site-foot">' +
  '<div class="wrap-wide">' +
    '<div class="foot-top">' +
      '<div class="foot-brand-col">' +
        '<a class="foot-brand" href="/" aria-label="Anvesha Jewels, home">' +
          '<img src="/assets/logo.png" alt="Anvesha Jewels" width="200" loading="lazy"></a>' +
        '<p class="foot-tag">For the moments that become you.</p>' +
        '<p class="foot-summary">Considered fine jewellery handcrafted in solid gold, natural and lab-grown diamonds. Made to be lived with and kept for generations.</p>' +
        '<div class="foot-social-pills">' +
          '<a href="' + D.instagram + '" target="_blank" rel="noopener" aria-label="Instagram" class="foot-icon-btn">' + I.insta + '</a>' +
          '<a href="' + D.facebook + '" target="_blank" rel="noopener" aria-label="Facebook" class="foot-icon-btn">' + I.fb + '</a>' +
          '<a href="' + D.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn" class="foot-icon-btn">' + I.linkedin + '</a>' +
          '<a href="' + D.google + '" target="_blank" rel="noopener" aria-label="Google Reviews" class="foot-icon-btn">' + I.google + '</a>' +
        '</div>' +
      '</div>' +

      '<div class="foot-nav-cols">' +
        '<div class="foot-col">' +
          '<h4 class="foot-heading">SHOP</h4>' +
          '<ul>' +
            '<li><a href="/rings">Rings</a></li>' +
            '<li><a href="/necklaces">Necklaces</a></li>' +
            '<li><a href="/earrings">Earrings</a></li>' +
            '<li><a href="/bracelets">Bracelets</a></li>' +
            '<li><a href="/collections">All Pieces</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="foot-col">' +
          '<h4 class="foot-heading">HOUSE</h4>' +
          '<ul>' +
            '<li><a href="/about">Our Craft</a></li>' +
            '<li><a href="/collections">Collections</a></li>' +
            '<li><a href="/collections#solene">Solene Selection</a></li>' +
            /* Stories page hidden for now: '<li><a href="/testimonials">Stories</a></li>' + */
            '<li><a href="/contact">Contact Us</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="foot-col">' +
          '<h4 class="foot-heading">CARE</h4>' +
          '<ul>' +
            '<li><a href="/sizing-chart">Sizing Chart</a></li>' +
            '<li><a href="/returns-exchange">Returns &amp; Exchange</a></li>' +
            '<li><a href="/shipping-policy">Shipping Policy</a></li>' +
            '<li><a href="/privacy-policy">Privacy Policy</a></li>' +
            '<li><a href="/jewellery-care">Jewellery Care</a></li>' +
            '<li><a href="/contact#inquiry">Request a Quote</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="foot-col foot-col--social">' +
          '<h4 class="foot-heading">CONNECT</h4>' +
          '<p class="foot-connect-desc">Follow our journey, new bespoke arrivals and private previews.</p>' +
          '<ul class="foot-connect-list">' +
            '<li><a href="' + D.instagram + '" target="_blank" rel="noopener" class="foot-connect-link">' + I.insta + '<span>Instagram</span></a></li>' +
            '<li><a href="' + D.facebook + '" target="_blank" rel="noopener" class="foot-connect-link">' + I.fb + '<span>Facebook</span></a></li>' +
            '<li><a href="' + D.linkedin + '" target="_blank" rel="noopener" class="foot-connect-link">' + I.linkedin + '<span>LinkedIn</span></a></li>' +
            '<li><a href="' + D.google + '" target="_blank" rel="noopener" class="foot-connect-link">' + I.google + '<span>Google Reviews</span></a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="foot-wordmark-wrap">' +
      '<div class="foot-wordmark" data-wordmark aria-label="Anvesha Jewels">' +
        '<a href="/rings" class="wm-char" data-char="A" aria-label="A: Rings">' +
          '<span class="wm-letter">A</span>' +
          '<span class="wm-media"><img src="/assets/p-r001.webp" alt="Solene Diamond Ring" loading="lazy"></span>' +
        '</a>' +
        '<a href="/necklaces" class="wm-char" data-char="N" aria-label="N: Necklaces">' +
          '<span class="wm-letter">N</span>' +
          '<span class="wm-media"><img src="/assets/hero-necklaces.webp" alt="Signature Diamond Necklace" loading="lazy"></span>' +
        '</a>' +
        '<a href="/collections" class="wm-char" data-char="V" aria-label="V: Collections">' +
          '<span class="wm-letter">V</span>' +
          '<span class="wm-media"><img src="/assets/p-r002.webp" alt="Lumiere Halo Creation" loading="lazy"></span>' +
        '</a>' +
        '<a href="/earrings" class="wm-char" data-char="E" aria-label="E: Earrings">' +
          '<span class="wm-letter">E</span>' +
          '<span class="wm-media"><img src="/assets/hero-earrings.webp" alt="Fine Emerald & Diamond Earrings" loading="lazy"></span>' +
        '</a>' +
        '<a href="/bracelets" class="wm-char" data-char="S" aria-label="S: Bracelets">' +
          '<span class="wm-letter">S</span>' +
          '<span class="wm-media"><img src="/assets/hero-bracelets.webp" alt="Handcrafted Tennis Bracelet" loading="lazy"></span>' +
        '</a>' +
        '<a href="/rings" class="wm-char" data-char="H" aria-label="H: Heritage Rings">' +
          '<span class="wm-letter">H</span>' +
          '<span class="wm-media"><img src="/assets/hero-rings.webp" alt="Heritage Gold Ring" loading="lazy"></span>' +
        '</a>' +
        '<a href="/collections" class="wm-char" data-char="A" aria-label="A: Haute Joaillerie">' +
          '<span class="wm-letter">A</span>' +
          '<span class="wm-media"><img src="/assets/nav-jewellery.webp" alt="Haute Joaillerie Statement" loading="lazy"></span>' +
        '</a>' +
      '</div>' +
    '</div>' +

    '<div class="foot-bar">' +
      '<span>© 2026 Anvesha Jewels. Handcrafted with care.</span>' +
      '<span class="foot-credit">Developed by <a href="https://www.agneyasolutions.com" target="_blank" rel="noopener">Agneya IT Solutions</a></span>' +
      '<nav aria-label="Legal links">' +
        '<a href="/privacy-policy">Privacy Policy</a>' +
        '<span>·</span>' +
        '<a href="/about#terms">Terms of Use</a>' +
        '<span>·</span>' +
        '<a href="/sizing-chart">Sizing Guidance</a>' +
      '</nav>' +
    '</div>' +
  '</div>' +
'</footer>';
  }

  function initWordmarkWave() {
    var wm = document.querySelector("[data-wordmark]");
    if (!wm) return;
    var chars = Array.prototype.slice.call(wm.querySelectorAll(".wm-char"));
    if (!chars.length) return;

    chars.forEach(function (charEl, idx) {
      charEl.addEventListener("mouseenter", function () {
        chars.forEach(function (c, i) {
          var dist = Math.abs(i - idx);
          c.classList.remove("is-hovered", "is-neighbor-1", "is-neighbor-2");
          if (dist === 0) c.classList.add("is-hovered");
          else if (dist === 1) c.classList.add("is-neighbor-1");
          else if (dist === 2) c.classList.add("is-neighbor-2");
        });
      });
      charEl.addEventListener("touchstart", function () {
        chars.forEach(function (c, i) {
          var dist = Math.abs(i - idx);
          c.classList.remove("is-hovered", "is-neighbor-1", "is-neighbor-2");
          if (dist === 0) c.classList.add("is-hovered");
          else if (dist === 1) c.classList.add("is-neighbor-1");
          else if (dist === 2) c.classList.add("is-neighbor-2");
        });
      }, { passive: true });
    });

    wm.addEventListener("mouseleave", function () {
      chars.forEach(function (c) {
        c.classList.remove("is-hovered", "is-neighbor-1", "is-neighbor-2");
      });
    });

    document.addEventListener("touchstart", function (e) {
      if (!wm.contains(e.target)) {
        chars.forEach(function (c) {
          c.classList.remove("is-hovered", "is-neighbor-1", "is-neighbor-2");
        });
      }
    }, { passive: true });
  }

  /* ── shared blocks ─────────────────────────────────── */
  function ctaBand() {
    return '<section class="cta-band"><div class="wrap-wide"><div class="cta-inner">' +
      '<div><h2 class="display h-lg">A little guidance. A piece that feels like you.</h2>' +
      '<p class="p">Tell us what you have in mind. We can help you explore the details.</p></div>' +
      '<a class="btn btn--ghost-em" href="/contact#inquiry">Make an inquiry ' + I.arrow + '</a>' +
      '</div></div></section>';
  }

  function card(p) {
    var href = "/product/" + D.slug(p);
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
  initWordmarkWave();
  document.body.insertAdjacentHTML("beforeend",
    '<div class="modal" data-quote aria-hidden="true" role="dialog" aria-modal="true"><div class="modal-bg" data-close-quote></div>' +
    '<div class="modal-card" data-quote-card></div></div>' +
    '<div class="lightbox" data-lightbox aria-hidden="true"><button data-close-lightbox aria-label="Close">' + I.close + '</button><img alt=""></div>');

  /* ── floating WhatsApp button (every page, desktop and mobile) ── */
  (function () {
    var num = String(D.whatsapp || "").replace(/\D/g, "");
    if (!num) return;
    /* one plain greeting, so people write their own question */
    function waHref() { return "https://wa.me/" + num + "?text=" + encodeURIComponent("Hello Anvesha Jewels,"); }
    document.body.insertAdjacentHTML("beforeend",
      '<a class="wa-float" href="' + waHref() + '" target="_blank" rel="noopener" aria-label="Chat with Anvesha Jewels on WhatsApp">' +
      /* WhatsApp's official logo glyph */
      '<span class="wa-float__icon"><svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>' +
      '</svg></span><span class="wa-float__label">Chat with us</span></a>');
    var wa = document.querySelector(".wa-float");
    /* product pages only: a small "need help?" note after 45 seconds, once per visit (a test) */
    if (page === "product") {
      var seen = false;
      try { seen = sessionStorage.getItem("aj-wa-tip") === "1"; } catch (e) {}
      var showTip = function () {
        /* wait while the sign-up pop-up, menu or another window is open */
        var su = document.querySelector(".su");
        if (document.body.classList.contains("no-scroll") || (su && !su.hidden)) { setTimeout(showTip, 3000); return; }
        document.body.insertAdjacentHTML("beforeend",
          '<div class="wa-tip" role="status"><button class="wa-tip__x" aria-label="Close">' + I.close + '</button>' +
          '<a href="' + waHref() + '" target="_blank" rel="noopener"><strong>Need help with this piece?</strong><span>Chat with us on WhatsApp</span></a></div>');
        var tip = document.querySelector(".wa-tip");
        requestAnimationFrame(function () { tip.classList.add("is-on"); });
        function hide() { tip.classList.remove("is-on"); setTimeout(function () { tip.remove(); }, 400); }
        tip.querySelector(".wa-tip__x").addEventListener("click", hide);
        tip.querySelector("a").addEventListener("click", hide);
        wa.addEventListener("click", hide);
        try { sessionStorage.setItem("aj-wa-tip", "1"); } catch (e) {}
      };
      if (!seen) setTimeout(showTip, 45000);
    }
    /* any link marked data-wa="message" opens WhatsApp with that message */
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      a.href = waHref();
      a.target = "_blank"; a.rel = "noopener";
    });
  })();

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
    drawer.classList.add("is-curving");
    curveSvg.setAttribute("viewBox", "0 0 100 " + H);
    (function f(now) {
      var k = Math.min(1, (now - t0) / ms), c = from + (to - from) * bez(k);
      curvePath.setAttribute("d", "M0 0 Q" + c.toFixed(1) + " " + (H / 2) + " 0 " + H + " Z");
      if (k < 1) curveRaf = requestAnimationFrame(f);
      else { drawer.classList.remove("is-curving"); if (!drawer.classList.contains("is-open")) curvePath.setAttribute("d", ""); }
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
    if (e.key === "Escape") { closeMega(); closeSearch(); setDrawer(false); closeQuote(); closeLightbox(); closeAllLuxDropdowns(); }
  });
  function liveResults(q) {
    var list = searchProducts(q);
    if (!list.length) {
      return '<p class="sl-empty">No pieces match \u201c' + esc(q) + '\u201d. Try \u201cring\u201d, \u201cpendant\u201d or \u201choops\u201d.</p>';
    }
    return '<div class="sl-list">' + list.slice(0, 6).map(function (p) {
      return '<a class="sl-item" href="/product/' + D.slug(p) + '">' +
        '<img src="' + p.img + '" alt="" loading="lazy"><span><b>' + esc(p.name) + '</b><small>' + esc(p.meta) + '</small></span></a>';
    }).join("") + '</div>' +
      '<a class="mlink sl-all" href="/rings?q=' + encodeURIComponent(q) + '">View all ' + list.length +
      (list.length === 1 ? ' result' : ' results') + '</a>';
  }
  function wireSearch(f) {
    var input = f.querySelector("input");
    var live = el('<div class="search-live" aria-live="polite"></div>');
    f.insertAdjacentElement("afterend", live);
    function update() {
      var q = input.value.trim();
      live.innerHTML = q.length > 1 ? liveResults(q) : "";
    }
    input.addEventListener("input", update);
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = input.value.trim();
      if (q) location.href = "/rings?q=" + encodeURIComponent(q);
    });
  }
  document.querySelectorAll("[data-search-form]").forEach(wireSearch);
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
    /* Slides run on automatically and always move left: a copy of the first slide sits after the last,
       the track slides onto it, then jumps back to the real first slide without animating. */
    var n = slides.length, first = slides[0].cloneNode(true);
    first.classList.remove("is-active"); first.setAttribute("aria-hidden", "true"); first.inert = true;
    first.querySelectorAll("[id]").forEach(function (e) { e.removeAttribute("id"); });
    var fh = first.querySelector("h1"); if (fh) fh.outerHTML = fh.outerHTML.replace(/^<h1/, "<h2").replace(/h1>$/, "h2>");
    track.appendChild(first);
    function place(i, animate, px) {
      if (!animate) track.style.transition = "none";
      track.style.transform = px ? "translateX(calc(" + (-i * 100) + "% + " + px + "px))" : "translateX(-" + (i * 100) + "%)";
      if (!animate && !dragging) { void track.offsetWidth; track.style.transition = ""; }
    }
    function go(k) {
      idx = k;
      place(idx, true);
      var shown = idx % n;
      slides.forEach(function (s, i) {
        s.classList.toggle("is-active", i === shown);
        s.setAttribute("aria-hidden", i === shown ? "false" : "true");
      });
      first.classList.toggle("is-active", idx === n);
      cur$.textContent = String(shown + 1).padStart(2, "0");
      bar.style.transform = "translateX(" + (shown * 100) + "%)";
      restart();
      /* no animation (reduced motion): there is no transitionend, so reset straight away */
      if (idx === n && !parseFloat(getComputedStyle(track).transitionDuration)) reset();
    }
    function reset() { idx = 0; first.classList.remove("is-active"); place(0, false); }
    track.addEventListener("transitionend", function (e) { if (e.target === track && idx === n) reset(); });
    /* a background tab may skip the animation and its transitionend; never step past the copy */
    function restart() { clearInterval(timer); timer = setInterval(function () { if (idx >= n) reset(); go(idx + 1); }, 6500); }
    /* Drag with a mouse or swipe with a finger: the slides follow, and on release move on, go back, or
       settle if the drag was short. Dragging right from the first slide uses the copy at the end, so the
       last slide shows on its left and the loop holds both ways. A vertical swipe still scrolls the page,
       and a drag never opens the slide's link. */
    var dragging = false, decided = false, horiz = false, sx = 0, sy = 0, dx = 0, moved = 0, t0 = 0;
    track.addEventListener("pointerdown", function (e) {
      if (e.button) return;
      if (idx >= n) reset();
      dragging = true; decided = e.pointerType === "mouse"; horiz = decided;
      sx = e.clientX; sy = e.clientY; dx = 0; moved = 0; t0 = e.timeStamp;
      clearInterval(timer);
    });
    window.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var mx = e.clientX - sx, my = e.clientY - sy;
      if (!decided) {
        if (Math.abs(mx) < 6 && Math.abs(my) < 6) return;
        decided = true; horiz = Math.abs(mx) > Math.abs(my);
        if (!horiz) { dragging = false; restart(); return; }
      }
      dx = mx; moved = Math.max(moved, Math.abs(dx));
      if (moved > 4) hero.classList.add("is-dragging");
      if (idx === 0 && dx > 0) { idx = n; first.classList.add("is-active"); }
      else if (idx === n && dx < 0) { idx = 0; first.classList.remove("is-active"); }
      track.style.transition = "none";
      place(idx, false, dx);
    });
    function release(e) {
      if (!dragging) return;
      dragging = false; hero.classList.remove("is-dragging"); track.style.transition = "";
      var w = track.clientWidth, v = dx / Math.max(1, e.timeStamp - t0);   /* px per ms */
      if (dx < -w * 0.15 || (dx < -30 && v < -0.45)) go(idx + 1);
      else if (dx > w * 0.15 || (dx > 30 && v > 0.45)) go(idx - 1);
      else go(idx);
    }
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    hero.addEventListener("click", function (e) { if (moved > 6) { e.preventDefault(); e.stopPropagation(); } moved = 0; }, true);
    hero.addEventListener("dragstart", function (e) { e.preventDefault(); });

    hero.querySelector("[data-hero-total]").textContent = String(n).padStart(2, "0");
    bar.style.width = (100 / n) + "%";
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

  /* ── bespoke luxury dropdowns ────────────────────────── */
  var openLuxDropdown = null;

  function closeAllLuxDropdowns() {
    if (openLuxDropdown) {
      openLuxDropdown.classList.remove("is-open");
      var btn = openLuxDropdown.querySelector(".lux-select-trigger");
      if (btn) btn.setAttribute("aria-expanded", "false");
      var menu = openLuxDropdown.querySelector(".lux-select-menu");
      if (menu) menu.setAttribute("aria-hidden", "true");
      openLuxDropdown.classList.remove("is-flipped", "is-right-aligned");
      openLuxDropdown = null;
    }
  }

  function setupLuxSelect(selEl) {
    if (!selEl || selEl.dataset.luxInit === "true") return;
    selEl.dataset.luxInit = "true";

    var isFilter = selEl.hasAttribute("data-filter");
    var isSort = selEl.hasAttribute("data-sort");
    var isSize = selEl.hasAttribute("data-opt-size") || !!selEl.closest(".opt-size");
    var isField = !isFilter && !isSort && !isSize && !!selEl.closest(".field");

    var filterKey = selEl.dataset.filter || (isSort ? "sort" : "");
    var ariaLabel = selEl.getAttribute("aria-label") || selEl.name || "";
    var parentSpan = selEl.closest(".selectish");
    if (parentSpan) {
      parentSpan.classList.add("has-lux");
      parentSpan.querySelectorAll(":scope > svg").forEach(function (s) { s.style.display = "none"; });
    }

    // Hide native select visually
    selEl.classList.add("lux-native-hidden");

    // Create wrapper
    var wrap = document.createElement("div");
    wrap.className = "lux-select" +
      (isFilter || isSort ? " lux-select--filter" : "") +
      (isField ? " lux-select--field" : "") +
      (isSize ? " lux-select--size" : "");

    // Trigger button
    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "lux-select-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", ariaLabel ? ariaLabel + " selector" : "Select option");

    var dot = document.createElement("span");
    dot.className = "lux-select-dot";

    var text = document.createElement("span");
    text.className = "lux-select-text";

    var arrow = document.createElement("span");
    arrow.className = "lux-select-arrow";
    arrow.innerHTML = I.chev;

    trigger.appendChild(dot);
    trigger.appendChild(text);
    trigger.appendChild(arrow);

    // Dropdown menu
    var menu = document.createElement("div");
    menu.className = "lux-select-menu";
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-hidden", "true");

    var optsContainer = document.createElement("div");
    optsContainer.className = "lux-select-options";
    menu.appendChild(optsContainer);

    function getFormattedTriggerText(opt) {
      if (!opt) return "";
      var val = opt.value;
      var lbl = opt.textContent.trim();
      if (!val) {
        return lbl;
      }
      if (isFilter) {
        if (filterKey === "metal") return "Metal: " + lbl;
        if (filterKey === "diamond") return "Diamond: " + lbl;
        if (filterKey === "style") return "Style: " + lbl;
        return lbl;
      }
      if (isSize) {
        return /size/i.test(lbl) ? lbl : "Size " + lbl;
      }
      return lbl;
    }

    function renderOptions() {
      optsContainer.innerHTML = "";
      var currentVal = selEl.value;

      Array.prototype.forEach.call(selEl.options, function (opt, idx) {
        var optVal = opt.value;
        var optLabel = opt.textContent.trim();
        var isSelected = (optVal === currentVal);
        var isPlaceholder = (!optVal && idx === 0);

        var displayLabel = optLabel;
        if (isFilter && isPlaceholder) {
          if (filterKey === "metal") displayLabel = "All Metals";
          else if (filterKey === "diamond") displayLabel = "All Diamond Types";
          else if (filterKey === "style") displayLabel = "All Styles";
        } else if (isSize && !/size/i.test(optLabel)) {
          displayLabel = "Size " + optLabel;
        }

        var optItem = document.createElement("div");
        optItem.className = "lux-select-option" +
          (isSelected ? " is-selected" : "") +
          (isPlaceholder ? " is-placeholder" : "");
        optItem.setAttribute("role", "option");
        optItem.setAttribute("data-value", optVal);
        optItem.setAttribute("aria-selected", isSelected ? "true" : "false");
        optItem.tabIndex = -1;

        optItem.innerHTML =
          '<span class="lux-select-option-label">' + esc(displayLabel) + '</span>' +
          '<span class="lux-select-check">' + I.check + '</span>';

        optItem.addEventListener("click", function (e) {
          e.stopPropagation();
          selectValue(optVal);
          closeAllLuxDropdowns();
          trigger.focus();
        });

        optsContainer.appendChild(optItem);
      });

      syncTrigger();
    }

    function syncTrigger() {
      var selectedOpt = selEl.options[selEl.selectedIndex] || selEl.options[0];
      if (selectedOpt) {
        text.textContent = getFormattedTriggerText(selectedOpt);
        var hasVal = !!selectedOpt.value;
        wrap.classList.toggle("is-set", hasVal);
        wrap.classList.toggle("is-unselected", !hasVal);
        if (parentSpan) parentSpan.classList.toggle("is-set", hasVal);
      }

      optsContainer.querySelectorAll(".lux-select-option").forEach(function (item) {
        var isSel = (item.dataset.value === selEl.value);
        item.classList.toggle("is-selected", isSel);
        item.setAttribute("aria-selected", isSel ? "true" : "false");
      });
    }

    function selectValue(val) {
      if (selEl.value !== val) {
        selEl.value = val;
        selEl.dispatchEvent(new Event("change", { bubbles: true }));
        selEl.dispatchEvent(new Event("input", { bubbles: true }));
      }
      syncTrigger();
    }

    // Toggle menu
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = wrap.classList.contains("is-open");
      closeAllLuxDropdowns();
      if (!isOpen) {
        wrap.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-hidden", "false");
        openLuxDropdown = wrap;

        // Smart flip & alignment
        var rect = wrap.getBoundingClientRect();
        var menuHeight = Math.min(optsContainer.scrollHeight + 16, 260);
        var spaceBelow = window.innerHeight - rect.bottom;
        var spaceAbove = rect.top;

        if (spaceBelow < menuHeight && spaceAbove > spaceBelow) {
          wrap.classList.add("is-flipped");
        } else {
          wrap.classList.remove("is-flipped");
        }

        if (rect.left + 260 > window.innerWidth) {
          wrap.classList.add("is-right-aligned");
        } else {
          wrap.classList.remove("is-right-aligned");
        }

        var selOpt = optsContainer.querySelector(".lux-select-option.is-selected");
        if (selOpt) {
          selOpt.scrollIntoView({ block: "nearest" });
        }
      }
    });

    // Keyboard navigation
    trigger.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!wrap.classList.contains("is-open")) {
          trigger.click();
        } else {
          var items = Array.prototype.slice.call(optsContainer.querySelectorAll(".lux-select-option"));
          var curIdx = -1;
          items.forEach(function (it, i) {
            if (it.classList.contains("is-highlighted") || it.classList.contains("is-selected")) curIdx = i;
          });
          var nextIdx = curIdx;
          if (e.key === "ArrowDown") nextIdx = (curIdx + 1) % items.length;
          else if (e.key === "ArrowUp") nextIdx = (curIdx - 1 + items.length) % items.length;
          items.forEach(function (it, idx) { it.classList.toggle("is-highlighted", idx === nextIdx); });
          if (items[nextIdx]) items[nextIdx].scrollIntoView({ block: "nearest" });
          if (e.key === "Enter" || e.key === " ") {
            if (items[nextIdx]) items[nextIdx].click();
          }
        }
      } else if (e.key === "Escape") {
        closeAllLuxDropdowns();
      }
    });

    // Label click support
    if (selEl.id) {
      var lbl = document.querySelector('label[for="' + selEl.id + '"]');
      if (lbl) {
        lbl.addEventListener("click", function (e) {
          e.preventDefault();
          trigger.focus();
          trigger.click();
        });
      }
    }

    // External change listener
    selEl.addEventListener("change", syncTrigger);
    selEl.addEventListener("input", syncTrigger);

    // Form reset listener
    if (selEl.form) {
      selEl.form.addEventListener("reset", function () {
        setTimeout(syncTrigger, 20);
      });
    }

    // Mount
    renderOptions();
    selEl.parentNode.insertBefore(wrap, selEl);
    wrap.appendChild(selEl);
    wrap.appendChild(trigger);
    wrap.appendChild(menu);
  }

  function enhanceAllSelects(root) {
    var targets = (root || document).querySelectorAll("select:not([data-lux-init])");
    targets.forEach(setupLuxSelect);
  }

  window.enhanceAllSelects = enhanceAllSelects;

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".lux-select")) {
      closeAllLuxDropdowns();
    }
  });

  /* ── listing page ──────────────────────────────────── */
  if (page === "category") {
    var params = new URLSearchParams(location.search);
    var qRaw = (params.get("q") || "").trim();
    var q = qRaw.toLowerCase();
    var c = D.categories[cat];
    var searching = !!q;
    var matches = searching ? searchProducts(q) : null;
    var heroEl = document.querySelector("[data-cat-hero]");
    if (searching) {
      heroEl.classList.add("cat-hero--search");
      var crumbs = document.querySelector(".crumbs");
      if (crumbs) crumbs.innerHTML = '<a href="/">Home</a> / Search';
      document.title = "Search: " + qRaw + " · Anvesha Jewels";
    }

    heroEl.innerHTML = searching
      ? '<div><p class="eyebrow">Search</p><h1 class="display h-lg">Results for \u201c' + esc(qRaw) + '\u201d</h1>' +
        '<p class="lede" data-search-summary></p>' +
        '<form class="search-refine" data-search-form role="search">' + I.search +
        '<input type="search" name="q" value="' + esc(qRaw) + '" aria-label="Search jewellery"><button class="mlink" type="submit">Search</button></form></div>'
      : '<div><p class="eyebrow">The Anvesha selection</p>' +
        '<h1 class="display h-xl">' + c.name + '</h1>' +
        '<span class="script script--emerald">' + esc(c.script) + '</span>' +
        '<p class="lede">' + esc(c.intro) + '</p></div>' +
        '<img src="' + c.hero + '" alt="' + esc(c.name) + ' by Anvesha Jewels">';

    document.querySelector("[data-tabs]").innerHTML = CATS.map(function (k) {
      return '<a href=\"/' + k + '"' + (!searching && k === cat ? ' class="is-active" aria-current="page"' : '') + '>' + D.categories[k].name + '</a>';
    }).join("");

    var all = searching ? D.products.slice() : D.products.filter(function (p) { return p.cat === cat; });
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

    enhanceAllSelects(document.querySelector("[data-filters]"));

    /* size chart link at the top of each category that has sizes (returns and privacy live in the footer) */
    var anchor = { rings: "rings", bracelets: "bracelets", necklaces: "necklaces" }[cat];
    if (!searching && anchor) {
      document.querySelector("[data-filters]").insertAdjacentHTML("beforebegin",
        '<nav class="cat-help" aria-label="Sizing help"><a href="/sizing-chart#' + anchor + '">' + I.ruler + 'Size chart</a></nav>');
    }

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
        if (matches && matches.indexOf(p) < 0) return false;
        return true;
      });
      var sort = document.querySelector("[data-sort]").value;
      if (sort === "az") list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      if (sort === "za") list.sort(function (a, b) { return b.name.localeCompare(a.name); });

      grid.innerHTML = list.length
        ? list.map(card).join("")
        : '<p class="grid-empty">' + (searching ? 'No pieces match \u201c' + esc(qRaw) + '\u201d. Try ring, pendant, hoops or bracelet, browse the categories above,' : 'No designs match these details just yet. Try another combination,') + ' or <a class="mlink" href="/contact#inquiry">make an inquiry</a>.</p>';
      document.querySelector("[data-count]").textContent = list.length + (list.length === 1 ? " design" : " designs");
      var sum = document.querySelector("[data-search-summary]");
      if (sum) sum.textContent = list.length
        ? list.length + (list.length === 1 ? " piece" : " pieces") + " across our jewellery."
        : "Nothing matches yet. Try a simpler word such as ring, pendant, hoops or bracelet.";
      endNote.textContent = list.length
        ? searching
          ? "You've explored all " + list.length + " matching design" + (list.length === 1 ? "" : "s") + "."
          : "You've explored all " + list.length + " design" + (list.length === 1 ? "" : "s") + " in " + c.name.toLowerCase() + "."
        : "";
      reveal();
    }
    document.querySelector("[data-filters]").addEventListener("change", render);
    if (searching) wireSearch(heroEl.querySelector("[data-search-form]"));
    render();
  }

  /* ── product page ──────────────────────────────────── */
  var state = null;
  if (page === "product") {
    /* /product/aurelia-band; older links used /product.html?id=AJ-R003, so those still work and move to the new address */
    var slug = (location.pathname.match(/^\/product\/([^/?#]+)/) || [])[1];
    var id = new URLSearchParams(location.search).get("id");
    var p = D.products.filter(function (x) { return slug ? D.slug(x) === decodeURIComponent(slug) : x.code === id; })[0] || D.products[0];
    if (history.replaceState && location.pathname !== "/product/" + D.slug(p)) history.replaceState(null, "", "/product/" + D.slug(p) + location.hash);
    var pc = D.categories[p.cat];
    var gallery = p.gallery || [p.img];
    var isRing = p.cat === "rings";
    state = { metal: "gold", karat: "18K", diamond: "lab-grown", size: "14", product: p };

    document.title = "Anvesha Jewels · " + p.name;
    /* one address per piece for search engines, and its own description */
    var canon = document.querySelector('link[rel="canonical"]') || document.head.appendChild(document.createElement("link"));
    canon.rel = "canonical"; canon.href = location.origin + "/product/" + D.slug(p);
    var md = document.querySelector('meta[name="description"]');
    if (md) md.content = p.name + ". " + p.desc;
    document.querySelector("[data-crumbs]").innerHTML =
      '<a href="/">Home</a> / <a href=\"/' + p.cat + '">Jewellery</a> / <a href=\"/' + p.cat + '">' + pc.name + '</a> / ' + esc(p.name);

    /* one large 4:5 photo; the other photos of the piece (up to 3) sit beside it */
    /* until the real extra photos arrive, a piece with one photo also shows a close-up of it and its
       category photo, so the side column is never empty. Real photos: add "gallery" in data.js. */
    var shots = (p.gallery && p.gallery.length > 1 ? p.gallery : [p.img, p.img + "#detail", pc.hero]).slice(0, 4);
    var isDetail = function (src) { return /#detail$/.test(src); };
    document.querySelector("[data-pdp-media]").innerHTML =
      '<div class="pdp-gal' + (shots.length > 1 ? " has-thumbs" : "") + '">' +
      (shots.length > 1
        ? '<div class="pdp-side" role="list">' + shots.map(function (src, k) {
            return '<button type="button" class="pdp-th' + (k ? "" : " is-on") + (isDetail(src) ? " is-detail" : "") + '" role="listitem" data-shot="' + k + '" aria-label="Photo ' + (k + 1) + ' of ' + esc(p.name) + '"><img src="' + src + '" alt="" loading="lazy"></button>';
          }).join("") + '</div>'
        : "") +
      '<div class="pdp-main"><img src="' + shots[0] + '" alt="' + esc(p.name) + '" data-main>' +
        '<button class="pdp-zoom" data-zoom aria-label="View larger">' + I.zoom + '</button>' +
        (shots.length > 1 ? '<span class="pdp-count" data-counter>01 / ' + String(shots.length).padStart(2, "0") + '</span>' : "") +
      '</div></div>' +
      pdpHelp(p);

    /* under the product photos: call, stylist, made-to-order dates */
    function pdpHelp(p) {
      var num = AJ.whatsapp, days = AJ.shipDays || [10, 15];
      var tel = "+" + num, show = "+" + num.slice(0, 2) + " " + num.slice(2, 7) + " " + num.slice(7);
      var wa = function (t) { return "https://wa.me/" + num + "?text=" + encodeURIComponent(t); };
      var ic = {
        phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M5 4h3.2l1.6 4-2.1 1.3a11 11 0 0 0 5 5l1.3-2.1 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
        video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="3" y="6.5" width="12.5" height="11" rx="1.5"/><path d="m15.5 10.5 5-3v9l-5-3z"/></svg>',
        box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>'
      };
      return '<ul class="pdp-help-list">' +
        '<li>' + ic.phone + '<p><span>Contact us</span> <a href="tel:' + tel + '">' + show + '</a></p></li>' +
        '<li>' + ic.video + '<p><strong>Have questions? Talk to our personal stylist.</strong>' +
          '<a class="pdp-help-link" href="' + wa("Hello Anvesha Jewels, I'd like to schedule a call about the " + p.name + ".") + '" target="_blank" rel="noopener">Schedule a call</a></p></li>' +
        '<li>' + ic.box + '<p><strong>Made to order for you. Delivered in ' + days[0] + '–' + days[1] + ' days.</strong>' +
          '<span>Want it sooner? <a class="pdp-help-link" href="' + wa("Hello Anvesha Jewels, I'd like the " + p.name + " sooner.") + '" target="_blank" rel="noopener">Write to us</a></span></p></li>' +
      '</ul>';
    }

    function chips(key, items) {
      return items.map(function (it) {
        var id2 = it.id || it, lab = it.label || it;
        return '<button class="chip" data-opt="' + key + '" data-val="' + id2 + '">' + lab + ' ' + I.check + '</button>';
      }).join("");
    }
    var metals = D.metals.filter(function (m) { return p.metal.indexOf(m.id) >= 0; });
    if (!metals.some(function (m) { return m.id === state.metal; })) state.metal = metals[0].id;

    var sizeAnchor = p.cat === "bracelets" ? (p.style === "bangle" || p.style === "cuff" ? "bangles" : "bracelets")
      : p.cat === "necklaces" ? "necklaces" : "";
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
          '<a href="/sizing-chart#rings">Size chart</a></div></div>'
        : sizeAnchor
          ? '<div class="opt"><div class="opt-size"><span class="opt-label">Fit and length</span>' +
            '<a href="/sizing-chart#' + sizeAnchor + '">Size chart</a></div></div>'
          : "") +
      '<div class="pdp-cta"><button class="btn btn--solid" data-request>Request a quote ' + I.chat + '</button>' +
        '<p class="pdp-sel"><span data-selection></span><span>Continue with your selection on WhatsApp.</span></p></div>' +
      '';

    document.querySelector("[data-pdp-detail]").innerHTML =
      '<div><h2 class="display h-md">The details that make it yours.</h2><p class="p">' + esc(p.detail) + '</p></div>' +
      '<div>' +
        '<div class="acc"><button aria-expanded="false">Jewellery care <span>+</span></button>' +
          '<div class="acc-body"><div><p class="p">Put your jewellery on last, after make-up and perfume, and store each piece separately in a soft muslin cloth. Clean it gently with lukewarm soapy water and a soft toothbrush.</p>' +
          '<a class="mlink" href="/jewellery-care">Read the full care guide</a></div></div></div>' +
        '<div class="acc"><button aria-expanded="false">Sizing and personal guidance <span>+</span></button>' +
          '<div class="acc-body"><div><p class="p">Not sure of your size, or choosing for someone else? Tell us what you know and we will guide you to the right fit.</p>' +
          '<a class="mlink" href="/sizing-chart">See the sizing chart</a></div></div></div>' +
        '<div class="acc"><button aria-expanded="false">Returns and exchange <span>+</span></button>' +
          '<div class="acc-body"><div><p class="p">Eligible pieces can be returned or exchanged at 80% of the original invoice value. If your piece arrives damaged or different from your order, contact us within 24 hours and we will put it right.</p>' +
          '<a class="mlink" href="/shipping-policy">Shipping policy</a>' +
          '<a class="mlink" href="/returns-exchange">Read our returns and exchange policy</a></div></div></div>' +
      '</div>';

    var related = D.products.filter(function (x) { return x.cat === p.cat && x.code !== p.code; }).slice(0, 3);
    document.querySelector("[data-related]").innerHTML = related.map(card).join("");
    document.querySelector("[data-related-link]").innerHTML =
      '<a class="mlink" href=\"/' + p.cat + '">Explore all ' + pc.name.toLowerCase() + ' ' + I.diag + '</a>';

    /* option behaviour */
    function syncOptions() {
      document.querySelectorAll("[data-opt]").forEach(function (b) {
        b.classList.toggle("is-on", state[b.dataset.opt] === b.dataset.val);
      });
      var silver = state.metal === "silver";
      var kb = document.querySelector("[data-karat-block]");
      if (kb) { kb.style.opacity = silver ? ".45" : "1"; kb.style.pointerEvents = silver ? "none" : "auto"; }
      var metalLabel = (D.metals.filter(function (m) { return m.id === state.metal; })[0] || {}).label;
      var out = { metal: metalLabel, karat: silver ? "Not needed" : state.karat, diamond: state.diamond === "lab-grown" ? "Lab-grown" : "Natural" };
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
    enhanceAllSelects(document.querySelector("[data-pdp-opt]"));

    /* gallery: tap a photo on the side to show it large */
    document.querySelectorAll("[data-shot]").forEach(function (t) {
      t.addEventListener("click", function () {
        var k = Number(t.dataset.shot), main = document.querySelector("[data-main]");
        main.style.opacity = 0;
        setTimeout(function () { main.src = shots[k]; main.classList.toggle("is-detail", isDetail(shots[k])); main.style.opacity = 1; }, 180);
        document.querySelectorAll("[data-shot]").forEach(function (x) { x.classList.toggle("is-on", x === t); });
        var c = document.querySelector("[data-counter]");
        if (c) c.textContent = String(k + 1).padStart(2, "0") + " / " + String(shots.length).padStart(2, "0");
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
    /* WhatsApp message: one line per detail, so the team sees the full specification at a glance */
    var parts = selection.split(" · "), spec = ["Product: " + p.name, "Code: " + p.code];
    parts.forEach(function (x) {
      if (/^\d+K$/.test(x)) spec.push("Gold purity: " + x);
      else if (/diamonds$/i.test(x)) spec.push("Diamond: " + x.replace(/ diamonds$/i, ""));
      else if (/^Size /.test(x)) spec.push("Ring size: " + x.slice(5));
      else spec.push("Metal: " + x);
    });
    spec.push("Link: " + location.href.split("#")[0]);
    var msg = "Hello Anvesha Jewels,\n\nI'd like a quote for this piece:\n\n" + spec.join("\n") +
      "\n\nPlease share the price and details. Thank you.";
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
  enhanceAllSelects(document);
  reveal();
})();
