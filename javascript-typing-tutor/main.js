var $grumpyWiz = document.querySelectorAll('span');
var index = 0;

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  var key = event.key;
  var spanIndex = $grumpyWiz[index];
  var spanText = spanIndex.textContent;
  var nextSpan = $grumpyWiz[index + 1];

  if (key === spanText) {
    spanIndex.className = 'happy-wizard';
    nextSpan.className = 'before-keyed';
    index++;

  } else {
    spanIndex.className = 'angry-wizard';
  }
}
