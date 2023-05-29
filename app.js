$(document).ready(function() {
    // Smooth scrolling for navbar links
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        
        var hash = this.hash;
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
    
    // Handle form submission
    $('#contactForm').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
      
      // Perform form validation
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all the fields');
        return;
      }
      
      // Send form data to server (dummy implementation)
      // Replace this code with your actual form submission logic
      // You can use AJAX to send the form data to a server-side script
      // for processing or integrate with a backend framework or API
      
      // Display success message
      $('#contactForm')[0].reset(); // Reset form fields
      alert('Thank you for your message. We will get back to you soon!');
    });
  });
  