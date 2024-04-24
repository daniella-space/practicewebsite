document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscriptionForm');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
  
      if (name === '' || email === '') {
        showMessage('Please fill out all fields.', 'error');
        return;
      }
  
      // Simulating form submission
      simulateSubmission(name, email);
    });
  
    function simulateSubmission(name, email) {
      // Simulated delay to mimic server response
      setTimeout(function() {
        // Simulated success response
        const success = Math.random() < 0.8; // 80% chance of success
  
        if (success) {
          showMessage('Subscription successful!', 'subscription-success');
          form.reset();
        } else {
          showMessage('An error occurred. Please try again later.', 'error');
        }
      }, 1000); // Simulated delay of 1 second
    }
  
    function showMessage(messageText, messageType) {
      message.textContent = messageText;
      message.className = messageType;
    }
  });
  