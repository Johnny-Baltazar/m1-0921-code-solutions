var $modalBox = document.querySelector('.modal-box');
var $modalButton = document.querySelector('.modal-button');

$modalButton.addEventListener('click', openDialog);

function openDialog(event) {
  $modalBox.showModal();
}

var $noButton = document.querySelector('.no-button');

$noButton.addEventListener('click', closeDialog);

function closeDialog(event) {
  $modalBox.close();
}
