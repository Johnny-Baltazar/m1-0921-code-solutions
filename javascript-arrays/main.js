var colors = [
  'red',
  'white',
  'blue'
];

var america = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';

console.log('Value of colors[0]:', colors[0]);
console.log('Value of colors[1]:', colors[1]);
console.log('Value of colors[2]:', colors[2]);

console.log(america);

colors[2] = 'green';

var mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';

console.log(mexico);

console.log('value of colors:', colors);

var students = [
  'Timmy',
  'Dave',
  'John',
  'Pablo'
];

var numberOfStudents = students.length;

var pupils = 'There are ' + numberOfStudents + ' students in the class.';

console.log(pupils);

var lastIndex = students.length - 1;

var lastStudent = students[lastIndex];

console.log('The last student in the array is', lastStudent);
console.log('Value of students:', students);
