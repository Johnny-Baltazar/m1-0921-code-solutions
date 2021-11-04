/* exported getValue */
function getValue(object, key) {
  for (var keyed in object) {
    keyed = object[key];
  }
  return keyed;
}

// a function named getValue is defined that takes two parameters of 'object' and 'key'
// create a for/in statement that iterates over the object
// the keyed properties of the object are being assigned to the keyed variable
// return the keyed variable
