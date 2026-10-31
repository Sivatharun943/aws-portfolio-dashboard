// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Hamburger menu toggle for mobile
const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.querySelector('.main-nav');

if (hamburgerButton) {
  hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });
}

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// ── Scroll restore ─────────────────────────────────────────────
// Save scroll Y into localStorage when a project card is clicked
document.querySelectorAll('.card-link').forEach(link => {
  link.addEventListener('click', () => {
    localStorage.setItem('returnScroll', Math.round(window.scrollY));
  });
});

// On the home page: if returnScroll exists, jump to it then clear it
if (window.location.pathname === '/') {
  const saved = localStorage.getItem('returnScroll');
  if (saved) {
    // Run after full page paint using double rAF
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, parseInt(saved, 10));
        localStorage.removeItem('returnScroll');
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = '';
          revealOnScroll();
        }, 100);
      });
    });
  } else {
    window.addEventListener('load', revealOnScroll);
  }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (hero) {
    const scrollPosition = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  }
});
