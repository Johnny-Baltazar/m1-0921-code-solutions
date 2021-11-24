var arrOfBooks = [
  {
    isbn: 12345,
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss'
  },
  {
    isbn: 5678,
    title: 'Brown Bear, Brown Bear',
    author: 'Eric Carle'
  },
  {
    isbn: 101010,
    title: 'How the Grinch Stole Christmas',
    author: 'Dr. Seuss'
  }
];

console.log('arrOfBooks value:', arrOfBooks);
console.log('typeof:', typeof (arrOfBooks));

console.log('value of JSON.stringify(arrOfBooks):', JSON.stringify(arrOfBooks));
console.log('typeof JSON.stringify(arrOfBooks):', typeof (JSON.stringify(arrOfBooks)));

console.log('value of student:', '{"number id": 123456, "name": "Napolean Dynamite"}');
console.log('typeof:', typeof ('{"number id": 123456, "name": "Napolean Dynamite"}'));

var student = JSON.parse('{"number id": 123456, "name": "Napolean Dynamite"}');

console.log('value of JSON.parse(student):', student);
console.log('typeof(student):', typeof (student));
