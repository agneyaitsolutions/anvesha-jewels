/* Anvesha Jewels: premium scrolling.
   Computers (mouse / trackpad): smooth, weighted scrolling (Lenis) and a gentle parallax on the
   hero photo and the small "About" photo. Phones keep their own native scrolling, which is
   already smooth there. Anyone who asks their device for reduced motion gets normal scrolling. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (reduce || !fine) return;

  var root = document.documentElement, body = document.body;

  /* ── smooth scrolling ── */
  var lenis = null;
  if (window.Lenis) {
    /* places that scroll on their own keep their normal scrolling */
    var own = ".drawer, .drawer-nav, .modal, .lightbox, .su, .mega, .search-panel, .search-live, .lux-select-menu, .sz-tablewrap, [data-lenis-prevent]";
    lenis = new Lenis({
      lerp: 0.085,              /* lower = softer glide */
      wheelMultiplier: 0.95,
      smoothWheel: true,
      prevent: function (node) { return !!(node && node.closest && node.closest(own)); }
    });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    /* pause while the menu, a quote window or a pop-up is open */
    var sync = function () {
      var locked = body.classList.contains("no-scroll") || root.classList.contains("no-scroll");
      if (locked) lenis.stop(); else lenis.start();
    };
    new MutationObserver(sync).observe(body, { attributes: true, attributeFilter: ["class"] });
    new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ["class"] });

    /* links to a part of the same page glide there, clear of the header */
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href*="#"]');
      if (!a || a.target === "_blank") return;
      var url = new URL(a.href, location.href);
      if (url.pathname.replace(/\.html$/, "") !== location.pathname.replace(/\.html$/, "") || !url.hash || url.hash === "#") return;
      var el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      var head = document.querySelector(".site-head");
      lenis.scrollTo(el, { offset: -((head && head.offsetHeight) || 0) - 12, duration: 1.2 });
      history.replaceState(null, "", url.hash);
    });
  }

  /* ── gentle parallax ── */
  var hero = document.querySelector(".hero");
  var small = [].slice.call(document.querySelectorAll(".about-fig__small"));
  if (!hero && !small.length) return;
  var ticking = false;
  function update() {
    ticking = false;
    var vh = window.innerHeight, y = window.scrollY || window.pageYOffset;
    if (hero) {
      var h = hero.offsetHeight;
      if (y < h) hero.style.setProperty("--hero-y", (y * 0.22).toFixed(1) + "px");
    }
    small.forEach(function (el) {
      var r = el.parentNode.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var p = ((r.top + r.height / 2) - vh / 2) / vh;      /* -1 … 1 across the screen */
      el.style.setProperty("--fig-y", (p * 46).toFixed(1) + "px");
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  if (lenis) lenis.on("scroll", onScroll);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  root.classList.add("has-parallax");
  update();
})();
