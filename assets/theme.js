document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.header-menu-wrap');
  const menuLinks = document.querySelectorAll('.header-menu-wrap a');

  // Toggle open/close
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});