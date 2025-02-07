// main.js

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');

  // Toggle the hamburger menu and the 'open' class for X icon transformation
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
  
  // Set the current year in the footer
  const currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;

  // Set the last modified date in the footer
  const lastModified = document.lastModified;
  document.getElementById('lastModified').textContent = `Last Updated: ${lastModified}`;
});
