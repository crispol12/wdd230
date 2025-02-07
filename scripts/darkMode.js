document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu toggle
    const hamburgerButton = document.getElementById('hamburgerButton');
    const navMenu = document.getElementById('navMenu');
  
    hamburgerButton.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      // Toggle the button text between "≡" (closed) and "X" (open)
      if (navMenu.classList.contains('active')) {
        hamburgerButton.textContent = 'X';
      } else {
        hamburgerButton.textContent = '≡';
      }
    });
  
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mainContent = document.querySelector('main');
  
    darkModeToggle.addEventListener('click', function() {
      mainContent.classList.toggle('dark-mode');
      // Toggle dark mode button text between "⚙️ Dark Mode" and "☀️ Light Mode"
      if (mainContent.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
      } else {
        darkModeToggle.textContent = '⚙️ Dark Mode';
      }
    });
  });
  