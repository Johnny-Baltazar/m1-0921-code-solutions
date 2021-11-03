/* exported tail */
function tail(array) {
  var afterIndexZero = [];
  for (var i = 1; i < array.length; i++) {
    afterIndexZero.push(array[i]);
  }
  return afterIndexZero;
}
// define a funciton named tail that takes one parameter of "array"
// define a variable named "aferIndexZero" which will contain an empty array literal
// create a for loop that iterates thru the array parameter starting at the index of one
// push the array parameter at index i into the afterIndexZero
// return the afterIndexZero variable
