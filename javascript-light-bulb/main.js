var $lightOn = document.querySelector('.light-on');
var $lightsOut = document.querySelector('.container-one');
var timesClicked = 0;

$lightOn.addEventListener('click', handleClick);

function handleClick(event) {
  timesClicked++;
  if (timesClicked % 2 !== 0) {
    $lightsOut.className = 'container-two';
    $lightOn.className = 'light-off';
  } else {
    $lightOn.className = 'light-on';
    $lightsOut.className = 'container-one';
  }
}
