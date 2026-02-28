/**
 * PADEL VISION AI — main.js
 * Non-blocking, dependency-free vanilla JS
 * Features: nav scroll, hamburger, scroll reveal, form handling, FAQ accordion
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
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
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
      mobileMenu.setAttribute('aria-hidden', String(isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

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
     5. FAQ ACCORDION
     ───────────────────────────────────── */
  document.querySelectorAll('.faq-item__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      // Collapse all others in same list
      const parentList = btn.closest('.faq-list');
      if (parentList) {
        parentList.querySelectorAll('.faq-item__btn').forEach(otherBtn => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherAnswer = otherBtn.closest('.faq-item').querySelector('.faq-item__answer');
            if (otherAnswer) otherAnswer.hidden = true;
          }
        });
      }
      // Toggle current
      btn.setAttribute('aria-expanded', String(!isExpanded));
      const answer = btn.closest('.faq-item').querySelector('.faq-item__answer');
      if (answer) answer.hidden = isExpanded;
    });
  });

  /* ─────────────────────────────────────
     6. CONTACT FORM — validation + mailto
     ───────────────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formContainer = document.getElementById('form-container');
  const formFields = contactForm ? contactForm.querySelectorAll('[required]') : [];

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;
      formFields.forEach(field => {
        const group = field.closest('.form__group');
        const error = group ? group.querySelector('.form__error') : null;
        const isEmpty = !field.value.trim();
        const isInvalidEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);

        if (isEmpty || isInvalidEmail) {
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
      const email   = (document.getElementById('f-email')   || {}).value || '';
      const courts  = (document.getElementById('f-courts')  || {}).value || '';
      const message = (document.getElementById('f-message') || {}).value || '';

      const subject = encodeURIComponent('Demande de démo — Padel Vision AI');
      const body    = encodeURIComponent(
        `Nom : ${name}\nEmail : ${email}\nNombre de terrains : ${courts}\n\nMessage :\n${message}`
      );

      const addr = ['padel', '.', 'vision', '.', 'ai', '@', 'gmail', '.', 'com'].join('');
      window.location.href = `mailto:${addr}?subject=${subject}&body=${body}`;

      // Show success state
      if (formSuccess && formContainer) {
        formContainer.hidden = true;
        formSuccess.removeAttribute('hidden');
        formSuccess.focus();
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
     7. ACTIVE NAV LINK — current page
     ───────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ─────────────────────────────────────
     8. LIVE SCORE BADGE — hero animation
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
     9. STAT COUNTER — animated numbers
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
