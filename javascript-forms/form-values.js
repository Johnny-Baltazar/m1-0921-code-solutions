var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var name = $contactForm.elements.name.value;
  var email = $contactForm.elements.name.value;
  var message = $contactForm.elements.message.value;
  var messageData = {
    name: name,
    email: email,
    message: message
  };
  console.log(messageData);
  $contactForm.reset();
}
