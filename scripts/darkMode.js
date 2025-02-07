document.addEventListener("DOMContentLoaded", function() {
  // Hamburger menu toggle
  const hamburgerButton = document.getElementById('hamburgerButton');
  const navMenu = document.getElementById('navMenu');

  hamburgerButton.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    // Toggle the button text between "≡" (menu closed) and "X" (menu open)
    if (navMenu.classList.contains('active')) {
      hamburgerButton.textContent = 'X';
    } else {
      hamburgerButton.textContent = '≡';
    }
  });

  // Dark mode toggle: applies to the <body> to darken the entire background
  const darkModeToggle = document.getElementById('darkModeToggle');
  const bodyElement = document.body;

  darkModeToggle.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-mode');
    // Toggle the button text between "⚙️ Dark Mode" and "☀️ Light Mode"
    if (bodyElement.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '☀️ Light Mode';
    } else {
      darkModeToggle.textContent = '⚙️ Dark Mode';
    }
  });
});
