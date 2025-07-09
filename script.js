document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById('menu-icon');
  const dropdownMenu = document.querySelector('.dropdown_menu');

  menuIcon.addEventListener('click', function() {
    dropdownMenu.classList.toggle('active');
    menuIcon.classList.toggle('open');
    // Toggle between hamburger and X icon
    if (menuIcon.classList.contains('open')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    } else {
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById('menu-icon');
  const dropdownMenu = document.querySelector('.dropdown_menu');
  const navLinks = document.querySelectorAll('.dropdown_menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      dropdownMenu.classList.remove('active');
      if (menuIcon.classList.contains('fa-xmark')) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    });
  });
});

