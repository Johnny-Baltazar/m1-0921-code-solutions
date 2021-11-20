var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', handleClick);

function handleClick(e) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  var closestEl = event.target.closest('.task-list-item');
  console.log(closestEl);
  closestEl.remove();
}
