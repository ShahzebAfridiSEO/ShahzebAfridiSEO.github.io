(() => {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');

  if (navToggle && nav) {
    const closeNav = () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
    };

    navToggle.addEventListener('click', () => {
      const open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeNav();
    });
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');

  revealItems.forEach(item => {
    const delay = Number(item.dataset.delay || 0);
    item.style.setProperty('--delay', `${delay}ms`);
  });

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealItems.forEach(item => revealObserver.observe(item));
  }

  const counters = document.querySelectorAll('.counter');
  const animateCounter = element => {
    if (element.dataset.animated === 'true') return;
    element.dataset.animated = 'true';

    const target = Number(element.dataset.value);
    const suffix = element.dataset.suffix || '';
    const decimals = Number(element.dataset.decimals || 0);

    if (prefersReducedMotion) {
      element.textContent = `${target.toFixed(decimals)}${suffix}`;
      return;
    }

    const duration = 1150;
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      element.textContent = `${value.toFixed(decimals)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach(counter => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  const dialog = document.getElementById('media-dialog');
  const dialogImage = document.getElementById('dialog-image');
  const dialogClose = document.querySelector('.dialog-close');
  const dialogTitle = document.getElementById('dialog-title');
  const mediaButtons = document.querySelectorAll('.open-media');
  let lastTrigger = null;

  if (dialog && dialogImage && typeof dialog.showModal === 'function') {
    mediaButtons.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        lastTrigger = button;
        dialogImage.src = button.dataset.src;
        dialogImage.alt = button.dataset.alt || '';
        if (dialogTitle) dialogTitle.textContent = button.dataset.title || 'Portfolio evidence';
        dialog.showModal();
        dialogClose?.focus();
      });
    });

    const closeDialog = () => {
      dialog.close();
      lastTrigger?.focus();
    };

    dialogClose?.addEventListener('click', closeDialog);
    dialog.addEventListener('click', event => {
      if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener('close', () => lastTrigger?.focus());
  } else {
    mediaButtons.forEach(button => {
      if (button.tagName === 'A') return;
      button.addEventListener('click', () => window.open(button.dataset.src, '_blank', 'noopener'));
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && location.protocol.startsWith('http')) {
    const cleanPath = location.pathname.endsWith('/') ? location.pathname : location.pathname.replace(/[^/]*$/, '');
    canonical.href = `${location.origin}${cleanPath}`;
  }
})();
