var ten = 10;
var fifty = 50;
var eightyFive = 85;

var maximumValue = Math.max(ten, fifty, eightyFive);

console.log('Value of maximumValue:', maximumValue);

var heroes = ['Venom', 'Wolverine', 'Superman', 'Hulk'];

var randomNumber = Math.random(heroes);

console.log('Value of randomNumber:', randomNumber);

randomNumber = heroes.length * randomNumber;

console.log('Value of randomNumber:', randomNumber);

var randomIndex = Math.floor(randomNumber);

console.log('Value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Value of randomHero:', randomHero);

var library = [
  {
    title: 'It',
    author: 'Stephen King'
  },
  {
    title: 'The Shining',
    author: 'Stephen King'
  },
  {
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss'
  }
];

var lastBook = library.pop();

console.log('Value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('Value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('Value of library:', library);

var fullName = 'Johnny Baltazar';

var firstAndLastName = fullName.split(' ');

console.log('Value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('Value of sayMyName:', sayMyName);
