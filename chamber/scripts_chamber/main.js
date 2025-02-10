document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
  
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
      });
    }
  
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
      lastModifiedElement.textContent = `Last Updated: ${document.lastModified}`;
    }
  
    const lazyImages = document.querySelectorAll('img.lazy');
    if (lazyImages.length > 0) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
  
      lazyImages.forEach(image => observer.observe(image));
    }
  
    // 🔹 Visit Message with localStorage
    const visitMessage = document.getElementById('visit-message');
    if (visitMessage) {
      const lastVisit = localStorage.getItem('lastVisit');
      const now = Date.now();
  
      if (!lastVisit) {
        visitMessage.textContent = 'Welcome! If you have any questions, let us know.';
      } else {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
          visitMessage.textContent = 'Welcome back! Great to see you again!';
        } else if (daysSinceLastVisit === 1) {
          visitMessage.textContent = 'The last time you visited was 1 day ago.';
        } else {
          visitMessage.textContent = `The last time you visited was ${daysSinceLastVisit} days ago.`;
        }
      }
      localStorage.setItem('lastVisit', now);
    }
  
    // Calendar Generation
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
  
    function generateCalendar(month, year) {
      const calendarContainer = document.getElementById('calendar-container');
      if (!calendarContainer) {
        console.warn('Calendar container not found!');
        return;
      }
  
      calendarContainer.innerHTML = ''; // Clear previous content
  
      const now = new Date();
      const today = now.getDate();
      const thisMonth = now.getMonth();
      const thisYear = now.getFullYear();
  
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      document.getElementById('calendar-month').textContent = `${monthNames[month]} ${year}`;
  
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      weekdays.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.style.fontWeight = 'bold';
        calendarContainer.appendChild(dayElement);
      });
  
      for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.style.background = 'transparent';
        emptyDiv.style.pointerEvents = 'none';
        calendarContainer.appendChild(emptyDiv);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('calendar-day');
  
        // Highlight the current day
        if (day === today && month === thisMonth && year === thisYear) {
          dayElement.classList.add('today');
        }
  
        calendarContainer.appendChild(dayElement);
      }
    }
  
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
  
    if (prevMonthButton && nextMonthButton) {
      prevMonthButton.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
      });
  
      nextMonthButton.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
      });
  
      // Generate the initial calendar
      generateCalendar(currentMonth, currentYear);
    } else {
      console.warn('Prev/Next month buttons are not found.');
    }
  });
  