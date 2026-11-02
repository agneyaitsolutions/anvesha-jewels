/* Catalogue strip: the four tall photos open from the bottom one after another as the row comes into view,
   and close again when it leaves, so it plays every time, scrolling down or up. The photos drift slightly. */
(function () {
  "use strict";
  var strips = [].slice.call(document.querySelectorAll("[data-cs]")); if (!strips.length) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) { strips.forEach(function (s) { s.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle("in", e.isIntersecting); }); }, { threshold: 0.25 });
  strips.forEach(function (s) { io.observe(s); });
  function frame() {
    var vh = window.innerHeight;
    strips.forEach(function (s) {
      var r = s.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return;
      var t = (r.top + r.height / 2 - vh / 2) / vh;                     /* −1 … 1 as the row passes */
      s.style.setProperty("--cs-y", (t * -36).toFixed(1) + "px");
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
