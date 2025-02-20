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

  // Lazy Loading Images
  const lazyImages = document.querySelectorAll('img.lazy');
  if (lazyImages.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const dataSrc = img.getAttribute('data-src');
          if (dataSrc) {
            img.src = dataSrc;
            img.classList.remove('lazy');
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    }, { rootMargin: '100px 0px', threshold: 0.1 });

    lazyImages.forEach(image => observer.observe(image));
  }

  });
});
