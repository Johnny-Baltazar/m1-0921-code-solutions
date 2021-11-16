var $nameInput = document.querySelector('#user-name');
var $emailInput = document.querySelector('#user-email');
var $messageInput = document.querySelector('#user-message');

$nameInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('focus', handleFocus);
$messageInput.addEventListener('focus', handleFocus);

function handleFocus(event) {
  console.log('The focus event fired');
  console.log('event.target.name', event.target.name);
}

$nameInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('blur', handleBlur);
$messageInput.addEventListener('blur', handleBlur);

function handleBlur(event) {
  console.log('The blur event fired');
  console.log('event.target.name', event.target.name);
}

$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('input', handleInput);
$messageInput.addEventListener('input', handleInput);

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}
