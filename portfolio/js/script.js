/* =====================================================================
   script.js — behaviour for the portfolio.
   Content lives in js/data.js. You normally don't need to edit this.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- tiny helper: build an element safely ---------- */
  function el(tag, props, children) {
    var node = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (key) {
        if (key === "class") node.className = props[key];
        else if (key === "text") node.textContent = props[key];
        else node.setAttribute(key, props[key]);
      });
    }
    (children || []).forEach(function (child) { if (child) node.appendChild(child); });
    return node;
  }

  function fillList(id, items, build) {
    var list = document.getElementById(id);
    if (!list) return;
    items.forEach(function (item) { list.appendChild(build(item)); });
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setMenu(false);
        toggle.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) setMenu(false);
    });
  }

  /* ---------- Active link while scrolling ---------- */
  var navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  if ("IntersectionObserver" in window && navLinks.length) {
    var map = {};
    navLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && map[entry.target.id]) {
          navLinks.forEach(function (a) { a.classList.remove("active"); a.removeAttribute("aria-current"); });
          map[entry.target.id].classList.add("active");
          map[entry.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- Learning / exploring ---------- */
  if (typeof LEARNING !== "undefined") {
    fillList("learningList", LEARNING, function (t) { return el("li", { text: t }); });
    fillList("exploringList", EXPLORING, function (t) { return el("li", { text: t }); });
  }

  /* ---------- Tools ---------- */
  if (typeof TOOLS !== "undefined") {
    TOOLS.forEach(function (tool) {
      var target = document.getElementById(tool.status === "learning" ? "toolsLearning" : "toolsUsing");
      if (!target) return;
      target.appendChild(el("li", {}, [
        el("span", { class: "tool-name", text: tool.name }),
        el("span", { class: "tool-note", text: tool.note }),
      ]));
    });
  }

  /* ---------- Projects ---------- */
  function linkButton(label, url, kind, external, ariaLabel) {
    if (!url) {
      return el("span", {
        class: "btn btn-small",
        role: "https://github.com/khudabuxmahar912-prog",
        "aria-disabled": "true",
        text: label + " (coming soon)",
      });
    }
    var attrs = { class: "btn btn-small " + kind, href: url, text: label };
    if (external) { attrs.target = "_blank"; attrs.rel = "noopener noreferrer"; }
    if (ariaLabel) attrs["aria-label"] = ariaLabel;
    return el("a", attrs);
  }

  function projectCard(p) {
    var children = [];

    if (p.image) {
      children.push(el("figure", { class: "project-thumb" }, [
        el("img", { src: p.image, alt: p.name + " screenshot", loading: "lazy", decoding: "async" }),
      ]));
    }

    children.push(el("div", { class: "project-top" }, [
      el("span", { class: "project-cat", text: p.category }),
      el("span", { class: "project-status", text: p.status }),
    ]));
    children.push(el("h3", { text: p.name }));
    children.push(el("p", { class: "project-desc", text: p.description }));

    children.push(el("h4", { text: "Technologies" }));
    children.push(el("ul", { class: "tag-list" }, p.technologies.map(function (t) { return el("li", { text: t }); })));

    children.push(el("h4", { text: "Key features" }));
    children.push(el("ul", { class: "feature-list" }, p.features.map(function (f) { return el("li", { text: f }); })));

    var buttons = [];
    if (p.detailsUrl !== undefined) {
      buttons.push(linkButton("Project Details", p.detailsUrl, "btn-secondary", false));
    }
    buttons.push(linkButton("GitHub Repository","https://github.com/khudabuxmahar912-prog", "btn-ghost", true, p.name + " on GitHub (opens in a new tab)"));
    buttons.push(linkButton("Live Demo", p.liveUrl, "btn-primary", true, p.name + " live demo (opens in a new tab)"));
    children.push(el("div", { class: "btn-row" }, buttons));

    return el("article", { class: "project" }, children);
  }

  var grid = document.getElementById("projectGrid");
  if (grid && typeof PROJECTS !== "undefined") {
    PROJECTS.forEach(function (p) { grid.appendChild(projectCard(p)); });

    var soon = el("article", { class: "project project-soon" }, [
      el("h3", { text: "More projects coming soon" }),
      el("p", { text: "New work will be added here as I build it. Areas I plan to build in:" }),
      el("ul", { class: "pill-list pill-list-outline" }, FUTURE_CATEGORIES.map(function (c) { return el("li", { text: c }); })),
    ]);
    grid.appendChild(soon);
  }

  /* ---------- Hackathons & experience ---------- */
  if (typeof EXPERIENCE !== "undefined") {
    fillList("experienceList", EXPERIENCE, function (item) {
      return el("li", {}, [
        el("p", { class: "type", text: item.type }),
        el("h3", { text: item.title }),
        el("p", { class: "meta", text: item.meta }),
        el("p", { class: "desc", text: item.description }),
        item.fileUrl ? el("a", { class: "btn btn-small btn-ghost", href: item.fileUrl, target: "_blank", rel: "noopener noreferrer", text: "View certificate" }) : null,
      ]);
    });
    fillList("experienceSlots", EXPERIENCE_SLOTS, function (t) { return el("li", { text: t }); });
  }

  /* ---------- Journey ---------- */
  var journeyGrid = document.getElementById("journeyGrid");
  if (journeyGrid && typeof JOURNEY !== "undefined") {
    JOURNEY.forEach(function (t) {
      journeyGrid.appendChild(el("div", { class: "journey" }, [
        el("h3", { text: t.track }),
        el("ol", {}, t.steps.map(function (s) { return el("li", { text: s }); })),
      ]));
    });
  }

  /* ---------- Image fallbacks (photo + CV preview) ---------- */
  var photo = document.getElementById("profilePhoto");
  if (photo) {
    var showInitials = function () { photo.parentElement.classList.add("no-photo"); };
    if (photo.complete && photo.naturalWidth === 0) showInitials();
    photo.addEventListener("error", showInitials);
  }

  var cv = document.getElementById("cvPreview");
  if (cv) {
    var showCvNote = function () {
      cv.hidden = true;
      var note = cv.parentElement.querySelector(".cv-placeholder");
      if (note) note.hidden = false;
    };
    if (cv.complete && cv.naturalWidth === 0 && cv.getAttribute("loading") !== "lazy") showCvNote();
    cv.addEventListener("error", showCvNote);
  }

  /* ---------- Hero signal line: noise settling into a clean signal ---------- */
  var svg = document.getElementById("signal");
  if (svg) {
    var NS = "http://www.w3.org/2000/svg";
    var W = 1200, H = 90, mid = H / 2;

    // deterministic pseudo-random so it looks the same on every load
    var seed = 7;
    function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }

    var noisePts = [];
    for (var x = 0; x <= W; x += 6) {
      noisePts.push(x + "," + (mid + (rnd() - 0.5) * 70).toFixed(1));
    }
    var noise = document.createElementNS(NS, "polyline");
    noise.setAttribute("class", "noise");
    noise.setAttribute("points", noisePts.join(" "));

    // clean line: flat baseline with a few tidy pulses
    var d = "M0," + mid;
    [180, 420, 700, 960].forEach(function (cx, i) {
      var h = i % 2 ? 22 : 30;
      d += " L" + (cx - 50) + "," + mid +
           " L" + (cx - 25) + "," + (mid - h) +
           " L" + cx + "," + (mid + h * 0.6) +
           " L" + (cx + 25) + "," + mid;
    });
    d += " L" + W + "," + mid;
    var clean = document.createElementNS(NS, "path");
    clean.setAttribute("class", "clean");
    clean.setAttribute("d", d);
    clean.setAttribute("pathLength", "1");

    svg.appendChild(noise);
    svg.appendChild(clean);

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      svg.classList.add("drawn");
    } else {
      clean.style.strokeDasharray = "1";
      clean.style.strokeDashoffset = "1";
      requestAnimationFrame(function () {
        clean.style.transition = "stroke-dashoffset 1.8s ease-out .2s";
        clean.style.strokeDashoffset = "0";
        svg.classList.add("drawn");
      });
    }
  }

  /* ---------- Contact form ----------
     No backend yet, so the form must not pretend to send anything.
     - If SITE.formEndpoint is set (js/data.js), it posts to that service.
     - Otherwise it opens the visitor's email app with the message filled in.
  */
  var form = document.getElementById("contactForm");
  var statusEl = document.getElementById("formStatus");

  function setStatus(msg, kind) {
    statusEl.textContent = msg;
    statusEl.className = "form-status" + (kind ? " " + kind : "");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = ["name", "email", "subject", "message"];
      var firstBad = null;

      fields.forEach(function (n) {
        var input = form.elements[n];
        var value = input.value.trim();
        var bad = !value || (n === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        input.setAttribute("aria-invalid", bad ? "true" : "false");
        if (bad && !firstBad) firstBad = input;
      });

      if (firstBad) {
        setStatus("Please fill in every field with a valid email address.", "error");
        firstBad.focus();
        return;
      }

      var data = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        subject: form.elements.subject.value.trim(),
        message: form.elements.message.value.trim(),
      };

      if (SITE.formEndpoint) {
        setStatus("Sending…");
        fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(data),
        }).then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          form.reset();
          setStatus("Message sent. Thank you, I'll reply by email.", "ok");
        }).catch(function () {
          setStatus("The message could not be sent. Please use the Send Email button instead.", "error");
        });
      } else {
        var body = "Name: " + data.name + "\nEmail: " + data.email + "\n\n" + data.message;
        window.location.href = "mailto:" + SITE.email +
          "?subject=" + encodeURIComponent(data.subject) +
          "&body=" + encodeURIComponent(body);
        setStatus("Your email app should open with the message ready. Press send there to deliver it.", "ok");
      }
    });
  }
})();