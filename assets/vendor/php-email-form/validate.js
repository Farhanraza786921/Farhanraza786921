/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  // Initialize EmailJS with your user ID
  emailjs.init('6M9zz57U2A_PR1G-i');

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData(thisForm);
      console.log("Form data entries:");
      for (let pair of formData.entries()) {
        console.log(pair[0]+ ': ' + pair[1]);
      }

      emailjs.sendForm('service_vigsbu1', 'template_1p4zxjq', thisForm)
        .then((response) => {
          console.log("Email sent successfully:", response.status, response.text);
          thisForm.querySelector('.loading').classList.remove('d-block');
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset();
        }, (error) => {
          console.error("Email sending error:", error);
          displayError(thisForm, error.text);
        });
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

  // Add a check to ensure EmailJS is initialized
  if (!emailjs) {
    console.error("EmailJS is not initialized properly.");
  } else {
    console.log("EmailJS initialized successfully.");
  }

})();
