// nav-menu.js
export function setupNavMenu() {
  // idempotent guard to avoid double-binding
  if (window.__navMenuInitialized) return;
  window.__navMenuInitialized = true;

  const openBtn = document.querySelector('#openModal');
  const closeBtn = document.querySelector('#closeModal');
  const modal = document.querySelector('#modal');
  const openChefBtn = document.querySelector('#openChefModal');
  const chefModal = document.querySelector('#chef-modal');
  const closeChefBtn = document.querySelector('#closeChefModal');
  const burger = document.querySelector('#burger');
  const nav = document.querySelector('#main-nav');
  const topScrollBtn = document.querySelector("#backToTopBtn");
  const navbar = document.querySelector('#navbar');

  // ---------------------------
  // Scroll back-to-top button
  // ---------------------------
  if (topScrollBtn) {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topScrollBtn.style.display = "block";
      } else {
        topScrollBtn.style.display = "none";
      }
    });

    window.topFunction = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // ---------------------------
  // Modal helpers
  // ---------------------------
  function closeAllModals() {
    modal?.classList.remove("open");
    chefModal?.classList.remove("open");
  }

  openBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    closeAllModals();
    modal?.classList.add("open");
  });

  closeBtn?.addEventListener("click", () => modal?.classList.remove("open"));

  openChefBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    closeAllModals();
    chefModal?.classList.add("open");
  });

  closeChefBtn?.addEventListener("click", () => chefModal?.classList.remove("open"));

  // ---------------------------
  // Burger menu
  // ---------------------------
  burger?.addEventListener('click', () => {
    nav?.classList.toggle('open');
    burger?.classList.toggle('open');
    // console.log('Burger clicked:', {
    //   navClasses: nav?.className,
    //   burgerClasses: burger?.className
    // });
    // bug test
  });

  // ---------------------------
  // Navbar scroll effect
  // ---------------------------
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ---------------------------
  // Fade-in sections
  // ---------------------------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll('.fade-in-section')
    .forEach(section => observer.observe(section));
}

// Safe initializer that ensures DOM is ready before setup runs
export function initNavMenu() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setupNavMenu());
  } else {
    setupNavMenu();
  }
}
