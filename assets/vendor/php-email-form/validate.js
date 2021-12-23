(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();
      let name = document.getElementById('name')
      let email = document.getElementById('email')
      let subject = document.getElementById('subject')
      let message = document.getElementById('message')

      let thisForm = this;

      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
    
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      setTimeout(() => {
      thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.add('d-block');
        name.value = ''
        email.value = ''
        subject.value = ''
        message.value = ''
      }, 500);

      
     
    });
  });


})();
