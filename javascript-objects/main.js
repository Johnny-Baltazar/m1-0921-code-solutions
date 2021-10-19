var student = {
  firstName: 'Johnny',
  lastName: 'Baltazar',
  age: '37'
};

var fullName = student.firstName + ' ' + student.lastName;
student.livesInIrvine = false;
student.previousOccupation = 'Automotive Technician';

console.log('The value of fullName:', fullName);

console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('The value of student:', student);

var vehicle = {
  make: 'Chevy',
  model: 'k5 Blazer',
  year: 1972
};

vehicle['color'] = 'Orange';
vehicle['isConvertible'] = 'True';

console.log('Value of vehicle["color"]:', vehicle['color']);
console.log('Value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'Petey',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
