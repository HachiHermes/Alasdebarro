/* Scripts for Alas de Barro MVP */
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const nav = document.querySelector('.main-nav ul');
  const hero = document.querySelector('.hero');
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Header scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scroll down - hide header
      nav.style.transform = 'translateY(-100%)';
    } else {
      // Scroll up - show header
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });
});