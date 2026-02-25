/**
 * PADEL VISION AI — main.js
 * Non-blocking, dependency-free vanilla JS
 * Features: nav scroll, hamburger, scroll reveal, form handling
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────
     1. NAV — scroll-aware background
     ───────────────────────────────────── */
  const header = document.getElementById('site-header');

  if (header) {
    const updateHeader = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 20);
    };

    // Passive listener for performance
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader(); // initialise on load
  }

  /* ─────────────────────────────────────
     2. HAMBURGER — mobile nav toggle
     ───────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('is-open', !isOpen);
      // Update aria-hidden so screen readers know when menu is reachable
      mobileMenu.setAttribute('aria-hidden', String(isOpen));
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    function closeMobileMenu() {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  /* ─────────────────────────────────────
     3. SCROLL REVEAL — IntersectionObserver
     ───────────────────────────────────── */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after revealing (performance)
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ─────────────────────────────────────
     4. SMOOTH SCROLL — anchor links
     ───────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ─────────────────────────────────────
     5. CONTACT FORM — validation + mailto
     ───────────────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  const formFields  = contactForm ? contactForm.querySelectorAll('[required]') : [];
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic client-side validation
      let valid = true;
      formFields.forEach(field => {
        const group = field.closest('.form__group');
        const error = group ? group.querySelector('.form__error') : null;
        const isEmpty = !field.value.trim();
        const isEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);

        if (isEmpty || isEmail) {
          valid = false;
          field.setAttribute('aria-invalid', 'true');
          field.style.borderColor = 'var(--color-red)';
          if (error) error.removeAttribute('hidden');
        } else {
          field.removeAttribute('aria-invalid');
          field.style.borderColor = '';
          if (error) error.setAttribute('hidden', '');
        }
      });

      if (!valid) return;

      // Build mailto
      const name    = (document.getElementById('f-name')    || {}).value || '';
      const venue   = (document.getElementById('f-venue')   || {}).value || '';
      const email   = (document.getElementById('f-email')   || {}).value || '';
      const phone   = (document.getElementById('f-phone')   || {}).value || '';
      const courts  = (document.getElementById('f-courts')  || {}).value || '';
      const offer   = (document.getElementById('f-offer')   || {}).value || '';
      const message = (document.getElementById('f-message') || {}).value || '';

      const subject = encodeURIComponent(`Demande PadelVision AI — ${venue}`);
      const body    = encodeURIComponent(
        `Nom : ${name}\nClub : ${venue}\nEmail : ${email}\nTéléphone : ${phone}\n` +
        `Terrains : ${courts}\nOffre : ${offer}\n\nMessage :\n${message}`
      );

      // Obfuscated email address
      const addr = ['padel', '.', 'vision', '.', 'ai', '@', 'gmail', '.', 'com'].join('');
      window.location.href = `mailto:${addr}?subject=${subject}&body=${body}`;

      // Show success state
      if (formSuccess) {
        contactForm.style.display = 'none';
        formSuccess.classList.add('is-visible');
      }
    });

    // Live inline validation on blur
    formFields.forEach(field => {
      field.addEventListener('blur', () => {
        const group = field.closest('.form__group');
        const error = group ? group.querySelector('.form__error') : null;
        if (field.value.trim()) {
          field.removeAttribute('aria-invalid');
          field.style.borderColor = '';
          if (error) error.setAttribute('hidden', '');
        }
      });
    });
  }

  /* ─────────────────────────────────────
     6. ACTIVE NAV LINK — current page
     ───────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ─────────────────────────────────────
     7. LIVE SCORE BADGE — hero animation
     ───────────────────────────────────── */
  const liveScore = document.getElementById('live-score');
  if (liveScore) {
    const scores = ['0 – 0', '15 – 0', '15 – 15', '30 – 15', '40 – 15', '40 – 30', 'Deuce', '40 – 30'];
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % scores.length;
      liveScore.textContent = scores[idx];
    }, 2800);
  }

  /* ─────────────────────────────────────
     8. STAT COUNTER — animated numbers
     ───────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const start = performance.now();

        const tick = now => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

})();
