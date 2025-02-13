window.onload = function() {
  // Display the current range value in real time
  const pageRating = document.getElementById('pageRating');
  const rangeValue = document.getElementById('rangeValue');
  
  if (pageRating && rangeValue) {
    pageRating.addEventListener('input', function() {
      rangeValue.textContent = pageRating.value;
    });
  }

  // Validate that the passwords match before submitting
  const form = document.getElementById('registrationForm');
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirmPassword');

  if (form && passwordField && confirmPasswordField) {
    form.addEventListener('submit', function(event) {
      if (passwordField.value !== confirmPasswordField.value) {
        event.preventDefault(); // Prevent form submission
        alert('Passwords do not match. Please try again.');
        
        // Clear both password fields
        passwordField.value = '';
        confirmPasswordField.value = '';
        passwordField.focus();

        // Add red border for better feedback
        passwordField.style.border = '2px solid red';
        confirmPasswordField.style.border = '2px solid red';

        // Remove border when user starts typing again
        passwordField.addEventListener('input', () => passwordField.style.border = '');
        confirmPasswordField.addEventListener('input', () => confirmPasswordField.style.border = '');
      }
    });
  }
};