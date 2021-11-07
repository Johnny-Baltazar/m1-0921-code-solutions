var $clickMe = document.querySelector('.click-button');
$clickMe.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('Button Clicked!', event, document.querySelector('.click-button'));
}

var $hoverMe = document.querySelector('.hover-button');
$hoverMe.addEventListener('mouseover', handleMouseover);

function handleMouseover(event) {
  console.log('Button Hovered!', event, $hoverMe);
}

var $doubleClickMe = document.querySelector('.double-click-button');
$doubleClickMe.addEventListener('dblclick', handleDoubleClick);

function handleDoubleClick(event) {
  console.log('Button Double-clicked!', event, $doubleClickMe);
}
