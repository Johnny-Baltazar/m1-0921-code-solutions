/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var personObj = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return personObj;
}
