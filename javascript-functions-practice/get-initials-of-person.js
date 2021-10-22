/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstString = person.firstName;
  var lastString = person.lastName;
  var firstInitial = firstString.charAt(0);
  var lastInitial = lastString.charAt(0);
  return firstInitial + lastInitial;
}
