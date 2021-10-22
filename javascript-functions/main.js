function convertMinutesToSeconds(minutes) {
  var totalSeconds = 60 * minutes;
  return totalSeconds;
}

var totalSecondsResult = convertMinutesToSeconds(6);

console.log('convertMinutesToSeconds result:', totalSecondsResult);

function greet(name) {
  var theirName = 'Hey, ' + name + '!';
  return theirName;
}

var theirName = greet('dude');

console.log('greet result:', theirName);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaTotal = getArea(5, 6);

console.log('getArea result:', areaTotal);

function getFirstName(person) {
  console.log('getFirstName result:', person.firstName);
  return person;
}

getFirstName({ firstName: 'Michael', lastName: 'Scott' });

function getLastElement(array) {
  var lastItem = array.length - 1;
  var lastElement = array[lastItem];
  return lastElement;
}

var getLastIndex = getLastElement(['a', 'b', 'c', 'd']);

console.log('getLastElement result:', getLastIndex);
