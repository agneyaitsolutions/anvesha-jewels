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
    check: '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m2.5 7.3 3 3 6-6.6"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    google: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>'
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
    return '' +
'<footer class="site-foot">' +
  '<div class="wrap-wide">' +
    '<div class="foot-top">' +
      '<div class="foot-brand-col">' +
        '<a class="foot-brand" href="index.html" aria-label="Anvesha Jewels — home">' +
          '<img src="assets/logo.png" alt="Anvesha Jewels" width="200" loading="lazy"></a>' +
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
            '<li><a href="rings.html">Rings</a></li>' +
            '<li><a href="necklaces.html">Necklaces</a></li>' +
            '<li><a href="earrings.html">Earrings</a></li>' +
            '<li><a href="bracelets.html">Bracelets</a></li>' +
            '<li><a href="collections.html">All Pieces</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="foot-col">' +
          '<h4 class="foot-heading">HOUSE</h4>' +
          '<ul>' +
            '<li><a href="about.html">Our Craft</a></li>' +
            '<li><a href="collections.html">Collections</a></li>' +
            '<li><a href="collections.html#solene">Solene Selection</a></li>' +
            '<li><a href="testimonials.html">Stories</a></li>' +
            '<li><a href="contact.html">Contact Us</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="foot-col">' +
          '<h4 class="foot-heading">CARE</h4>' +
          '<ul>' +
            '<li><a href="about.html#sizing">Size Guide</a></li>' +
            '<li><a href="about.html#care">Jewellery Care</a></li>' +
            '<li><a href="contact.html">Personal Guidance</a></li>' +
            '<li><a href="contact.html#inquiry">Request a Quote</a></li>' +
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
        '<a href="rings.html" class="wm-char" data-char="A" aria-label="A — Rings">' +
          '<span class="wm-letter">A</span>' +
          '<span class="wm-media"><img src="assets/p-r001.webp" alt="Solene Diamond Ring" loading="lazy"></span>' +
        '</a>' +
        '<a href="necklaces.html" class="wm-char" data-char="N" aria-label="N — Necklaces">' +
          '<span class="wm-letter">N</span>' +
          '<span class="wm-media"><img src="assets/hero-necklaces.webp" alt="Signature Diamond Necklace" loading="lazy"></span>' +
        '</a>' +
        '<a href="collections.html" class="wm-char" data-char="V" aria-label="V — Collections">' +
          '<span class="wm-letter">V</span>' +
          '<span class="wm-media"><img src="assets/p-r002.webp" alt="Lumiere Halo Creation" loading="lazy"></span>' +
        '</a>' +
        '<a href="earrings.html" class="wm-char" data-char="E" aria-label="E — Earrings">' +
          '<span class="wm-letter">E</span>' +
          '<span class="wm-media"><img src="assets/hero-earrings.webp" alt="Fine Emerald & Diamond Earrings" loading="lazy"></span>' +
        '</a>' +
        '<a href="bracelets.html" class="wm-char" data-char="S" aria-label="S — Bracelets">' +
          '<span class="wm-letter">S</span>' +
          '<span class="wm-media"><img src="assets/hero-bracelets.webp" alt="Handcrafted Tennis Bracelet" loading="lazy"></span>' +
        '</a>' +
        '<a href="rings.html" class="wm-char" data-char="H" aria-label="H — Heritage Rings">' +
          '<span class="wm-letter">H</span>' +
          '<span class="wm-media"><img src="assets/hero-rings.webp" alt="Heritage Gold Ring" loading="lazy"></span>' +
        '</a>' +
        '<a href="collections.html" class="wm-char" data-char="A" aria-label="A — Haute Joaillerie">' +
          '<span class="wm-letter">A</span>' +
          '<span class="wm-media"><img src="assets/nav-jewellery.webp" alt="Haute Joaillerie Statement" loading="lazy"></span>' +
        '</a>' +
      '</div>' +
    '</div>' +

    '<div class="foot-bar">' +
      '<span>© 2026 Anvesha Jewels. Handcrafted with care.</span>' +
      '<nav aria-label="Legal links">' +
        '<a href="about.html#privacy">Privacy Policy</a>' +
        '<span>·</span>' +
        '<a href="about.html#terms">Terms of Use</a>' +
        '<span>·</span>' +
        '<a href="about.html#sizing">Sizing Guidance</a>' +
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
  initWordmarkWave();
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

    enhanceAllSelects(document.querySelector("[data-filters]"));

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

    /* one large 4:5 photo; the other photos of the piece (up to 3) sit beside it */
    var shots = gallery.slice(0, 4);
    document.querySelector("[data-pdp-media]").innerHTML =
      '<div class="pdp-gal' + (shots.length > 1 ? " has-thumbs" : "") + '">' +
      (shots.length > 1
        ? '<div class="pdp-side" role="list">' + shots.map(function (src, k) {
            return '<button type="button" class="pdp-th' + (k ? "" : " is-on") + '" role="listitem" data-shot="' + k + '" aria-label="Photo ' + (k + 1) + ' of ' + esc(p.name) + '"><img src="' + src + '" alt="" loading="lazy"></button>';
          }).join("") + '</div>'
        : "") +
      '<div class="pdp-main"><img src="' + shots[0] + '" alt="' + esc(p.name) + '" data-main>' +
        '<button class="pdp-zoom" data-zoom aria-label="View larger">' + I.zoom + '</button>' +
        (shots.length > 1 ? '<span class="pdp-count" data-counter>01 / ' + String(shots.length).padStart(2, "0") + '</span>' : "") +
      '</div></div>';

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
    enhanceAllSelects(document.querySelector("[data-pdp-opt]"));

    /* gallery: tap a photo on the side to show it large */
    document.querySelectorAll("[data-shot]").forEach(function (t) {
      t.addEventListener("click", function () {
        var k = Number(t.dataset.shot), main = document.querySelector("[data-main]");
        main.style.opacity = 0;
        setTimeout(function () { main.src = shots[k]; main.style.opacity = 1; }, 180);
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
  enhanceAllSelects(document);
  reveal();
})();
