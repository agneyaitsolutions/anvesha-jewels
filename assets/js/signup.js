/* Anvesha Jewels — sign-up pop-up (email + mobile).
   When it appears (whichever comes first, never as someone lands):
     · after the visitor has viewed 2 pieces (product pages), or
     · after about 40 seconds on the site (counted across pages), or
     · on a computer, when the pointer heads for the top of the window to leave (after 10 s).
   Shown once per visitor, then not again for 30 days; never again after they join.
   It waits if a menu, the quote window or a form is in use. No cookies: it only remembers in the browser. */
(function () {
  "use strict";
  var KEY = "aj-signup", DAYS = 30, NEED_VIEWS = 2, NEED_SECONDS = 40, MIN_SECONDS = 8;
  var AJ = window.AJ || {};
  var store = { get: function (k, s) { try { return JSON.parse((s ? sessionStorage : localStorage).getItem(k)); } catch (e) { return null; } },
                set: function (k, v, s) { try { (s ? sessionStorage : localStorage).setItem(k, JSON.stringify(v)); } catch (e) {} } };
  var past = store.get(KEY);
  if (past && (past.joined || Date.now() - past.t < DAYS * 864e5)) return;

  /* count product views and time on site for this visit */
  var visit = store.get("aj-visit", true) || { views: 0, secs: 0 };
  if (/product\.html/.test(location.pathname)) { visit.views += 1; store.set("aj-visit", visit, true); }
  var shown = false, start = Date.now();

  function busy() {
    if (document.body.classList.contains("no-scroll")) return true;                       // drawer, modal or lightbox open
    var a = document.activeElement; if (a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) return true; // typing in a form
    return false;
  }
  function secondsSoFar() { return visit.secs + (Date.now() - start) / 1000; }
  function tryShow() { if (shown) return; if (secondsSoFar() < MIN_SECONDS || busy()) { setTimeout(tryShow, 2500); return; } open(); }

  /* ── the pop-up ── */
  var I = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 3l10 10M13 3 3 13"/></svg>';
  var el = document.createElement("div");
  el.className = "su"; el.hidden = true;
  el.innerHTML =
    '<div class="su-bg" data-su-close></div>' +
    '<div class="su-box" role="dialog" aria-modal="true" aria-labelledby="suTitle">' +
      '<button class="su-x" type="button" data-su-close aria-label="Close">' + I + '</button>' +
      '<p class="eyebrow">The world of Anvesha</p>' +
      '<h2 class="display h-md" id="suTitle">Be the first to know.</h2>' +
      '<p class="p su-lede">New pieces, private previews and special moments, shared with you first.</p>' +
      '<form class="su-form" novalidate>' +
        '<label class="field"><span>Email address *</span><input type="email" name="email" autocomplete="email" placeholder="Your email address" maxlength="120"></label>' +
        '<label class="field"><span>Mobile number *</span><input type="tel" name="phone" autocomplete="tel" inputmode="tel" placeholder="Country code + number" maxlength="20"></label>' +
        '<label class="su-agree"><input type="checkbox" name="agree"> <span>I agree to receive updates from Anvesha Jewels and have read the <a href="about.html#privacy">privacy policy</a>.</span></label>' +
        '<p class="su-err" role="alert" hidden></p>' +
        '<button class="btn btn--solid btn--block" type="submit">Join the story</button>' +
        '<p class="su-fine">No spam. Unsubscribe anytime.</p>' +
      '</form>' +
      '<div class="su-done" hidden><h2 class="display h-md">Thank you.</h2><p class="p">You’re part of the Anvesha story now. We’ll be in touch soon.</p><button class="btn btn--line" type="button" data-su-close>Continue browsing</button></div>' +
    '</div>';
  document.body.appendChild(el);
  var form = el.querySelector(".su-form"), err = el.querySelector(".su-err"), lastFocus = null;

  function open() {
    if (shown) return; shown = true;
    store.set(KEY, { t: Date.now(), joined: false });
    lastFocus = document.activeElement;
    el.hidden = false; requestAnimationFrame(function () { el.classList.add("on"); });
    setTimeout(function () { var f = el.querySelector("input[name=email]"); if (f && matchMedia("(hover:hover)").matches) f.focus(); }, 450);
    document.addEventListener("keydown", onKey);
  }
  function close() {
    el.classList.remove("on"); document.removeEventListener("keydown", onKey);
    setTimeout(function () { el.hidden = true; if (lastFocus && lastFocus.focus) lastFocus.focus(); }, 450);
  }
  function onKey(e) {
    if (e.key === "Escape") return close();
    if (e.key === "Tab") {                                   // keep keyboard focus inside the pop-up
      var f = [].slice.call(el.querySelectorAll("button,input,a")).filter(function (n) { return n.offsetParent; });
      if (!f.length) return; var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  el.addEventListener("click", function (e) { if (e.target.closest("[data-su-close]")) close(); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = form.email.value.trim(), phone = form.phone.value.trim(), bad = [];
    if (!/^\S+@\S+\.\S+$/.test(email)) bad.push(form.email);
    if (phone.replace(/\D/g, "").length < 8) bad.push(form.phone);
    [form.email, form.phone].forEach(function (x) { x.setAttribute("aria-invalid", bad.indexOf(x) > -1); });
    if (bad.length) { err.hidden = false; err.textContent = "Please add a valid email address and mobile number."; bad[0].focus(); return; }
    if (!form.agree.checked) { err.hidden = false; err.textContent = "Please tick the box to agree to receive updates."; return; }
    err.hidden = true;
    var data = { email: email, phone: phone, page: location.pathname, date: new Date().toISOString() };
    function done() {
      store.set(KEY, { t: Date.now(), joined: true });
      form.hidden = true; el.querySelector(".su-done").hidden = false;
      el.querySelector(".su-lede").hidden = true; el.querySelector("#suTitle").hidden = true;
    }
    if (AJ.signupEndpoint) {
      fetch(AJ.signupEndpoint, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(data) })
        .then(done).catch(function () { err.hidden = false; err.textContent = "Something went wrong. Please try again in a moment."; });
    } else {
      window.open("https://wa.me/" + String(AJ.whatsapp || "").replace(/\D/g, "") + "?text=" + encodeURIComponent("Hello Anvesha Jewels, please add me to your updates.\nEmail: " + email + "\nMobile: " + phone), "_blank", "noopener");
      done();
    }
  });

  /* ── triggers ── */
  if (visit.views >= NEED_VIEWS) setTimeout(tryShow, 1500);
  var left = Math.max(MIN_SECONDS, NEED_SECONDS - visit.secs);
  setTimeout(tryShow, left * 1000);
  window.addEventListener("pagehide", function () { visit.secs = secondsSoFar(); store.set("aj-visit", visit, true); });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { visit.secs = secondsSoFar(); store.set("aj-visit", visit, true); }
    start = Date.now();                                        // time with the tab hidden is not counted
  });
  if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
    document.addEventListener("mouseout", function (e) { if (!e.relatedTarget && e.clientY <= 0 && secondsSoFar() > 10) tryShow(); });
  }
})();
