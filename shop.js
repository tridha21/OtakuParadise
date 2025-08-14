document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards  = document.querySelectorAll('.product-card');
  const navLinks      = document.querySelectorAll('.nav-links a');
  const sections      = document.querySelectorAll('section');

  // NAV: smooth-scroll only for internal # links; let .html links navigate.
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';

      // Allow normal navigation for anything that's NOT a hash (#)
      if (!href.startsWith('#')) {
        return; // do not call preventDefault()
      }

      // It's a hash link -> smooth scroll
      e.preventDefault();
      if (href === '#') return; // nothing to scroll to

      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Highlight active nav item on scroll (only for # links)
  window.addEventListener('scroll', () => {
    let currentId = '';
    const y = window.scrollY + 120; // adjust for fixed header height

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (y >= top && y < bottom) currentId = sec.id;
    });

    document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`);
    });
  });

  // Filter products
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      productCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
});