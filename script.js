/**
 * script.js — Ganesh Jannu Portfolio
 * Scroll reveal · Work timeline bar
 * Zero dependencies · Vanilla JS · GitHub Pages ready
 */

(function () {
  'use strict';

  /* ── 1. SCROLL REVEAL ─────────────────────────────────── */
  function setupReveal() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal, .reveal-group')
            .forEach(el => io.observe(el));
  }

  /* ── 2. WORK TIMELINE BAR ─────────────────────────────── */
  function setupWorkTimeline() {
    const entries = document.querySelector('.work-entries');
    if (!entries) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entries.classList.add('is-visible');
          io.unobserve(entries);
        }
      },
      { threshold: 0.08 }
    );

    io.observe(entries);
  }

  /* ── 3. SCROLL NAVIGATION ─────────────────────────────── */
  function setupScrollNav() {
    const navBars = document.querySelectorAll('.scroll-nav-bar');
    if (!navBars.length) return;

    let isScrolling = false;

    function updateNav() {
      // 1. Calculate scroll progress
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = docHeight - winHeight;

      if (maxScroll <= 0) return;

      const progress = scrollY / maxScroll;
      const activeIndex = Math.round(progress * (navBars.length - 1));

      // 2. Update states
      navBars.forEach((bar, index) => {
        bar.classList.remove('active', 'passed');
        if (index < activeIndex) {
          bar.classList.add('passed');
        } else if (index === activeIndex) {
          bar.classList.add('active');
        }
      });

      isScrolling = false;
    }

    // ── CLICK TO SCROLL
    navBars.forEach((bar, index) => {
      bar.addEventListener('click', () => {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const maxScroll = docHeight - winHeight;
        const targetY = (index / (navBars.length - 1)) * maxScroll;

        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      });
    });

    // ── SCROLL SYNC (Perf optimized)
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        window.requestAnimationFrame(updateNav);
        isScrolling = true;
      }
    }, { passive: true });

    // Initial run
    updateNav();
  }

  /* ── BOOT ─────────────────────────────────────────────── */
  function init() {
    setupReveal();
    setupWorkTimeline();
    setupScrollNav();

    // Trigger header expansion after a short delay
    setTimeout(() => {
      const header = document.querySelector('.navbar-outer');
      if (header) header.classList.add('loaded');
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
