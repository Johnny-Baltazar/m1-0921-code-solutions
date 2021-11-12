var $modalOpen = document.querySelector('.modal-close');
var $openButton = document.querySelector('.open-button');

$openButton.addEventListener('click', openSurveyBox);

function openSurveyBox(event) {
  $modalOpen.className = 'modal-open';
}

var $noButton = document.querySelector('.no-button');

$noButton.addEventListener('click', closeSurveyBox);

function closeSurveyBox(event) {
  $modalOpen.className = 'modal-close';
}
