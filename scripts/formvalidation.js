 // Display the current range value in real time
 const pageRating = document.getElementById('pageRating');
 const rangeValue = document.getElementById('rangeValue');
 pageRating.addEventListener('input', function() {
   rangeValue.textContent = pageRating.value;
 });

 // Validate that the passwords match before submitting
 const form = document.getElementById('registrationForm');
 const passwordField = document.getElementById('password');
 const confirmPasswordField = document.getElementById('confirmPassword');

 form.addEventListener('submit', function(event) {
   if (passwordField.value !== confirmPasswordField.value) {
     event.preventDefault(); // Prevent form submission
     alert('Passwords do not match. Please try again.');
     // Clear both password fields
     passwordField.value = '';
     confirmPasswordField.value = '';
     // Focus the first password field
     passwordField.focus();
   }
 });