/* ==========================================
   Shanghai Unlocked — Shared JavaScript
   Used by: index.html, plan-your-day.html, taste-toast.html
   ========================================== */

(function() {
  'use strict';

  // — Nav scroll: add .scrolled after 40px —
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // — Nav show/hide on scroll direction —
  var lastScroll = 0;
  var navHideThreshold = 200;
  if (nav) {
    window.addEventListener('scroll', function() {
      var currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        nav.classList.remove('hidden');
      } else if (currentScroll > lastScroll && currentScroll > navHideThreshold) {
        nav.classList.add('hidden');
      } else if (currentScroll < lastScroll) {
        nav.classList.remove('hidden');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // — Mobile nav toggle —
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // — IntersectionObserver for .fade-up —
  var fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(function(el) {
    fadeObserver.observe(el);
  });

  // — IntersectionObserver for .section-label (handwriting reveal) —
  var labelObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        labelObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.section-label').forEach(function(el) {
    labelObserver.observe(el);
  });

  // — IntersectionObserver for .section-rule (expand on scroll) —
  var ruleObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('expanded');
        ruleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.section-rule').forEach(function(el) {
    ruleObserver.observe(el);
  });

})();
