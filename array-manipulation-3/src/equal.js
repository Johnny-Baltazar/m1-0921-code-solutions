/* exported equal */
function equal(first, second) {
  var booleanValue = true;
  if (first.length !== second.length) {
    booleanValue = false;
  } else if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        booleanValue = true;
      } else {
        booleanValue = false;
        break;
      }
    }
  }
  return booleanValue;
}

// psuedocode-befor: this function named equal takes two paremeters named first and second, and returns a boolean indicating if first is equal to second index for index.

// psuedocode-after: a function named equal is defined with two parameters first and second. true is assigned to the object booleanValue.
// if statement testing if the length of first and second are not equal, and if not, booleanValue equals false.
// an else if statement tests if the length's of first and second are equal, and if true, a for loop is used to iterate thru first.
// an if statement tests if the values of all indexes of first and second are equal, and is equal, booleanValue equals true.
// an else statment assigns false to booleanValue, followed by break. ending with a return booleanValue statment.
