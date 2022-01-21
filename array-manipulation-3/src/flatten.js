/* exported flatten */
function flatten(array) {
  var returnArr = [].concat.apply([], array);
  // console.log(returnArr);
  return returnArr;

}
// psuedocode-before: a function named flatten is being defined with one parameter named array.
// all the children of the array are returned as one parameter.

// psuedocode-after: a function named flatten is defined with one parameter named array.
// an empty array object is called with the concat method being called with the apply method with two arguments, an empt array and the array object.
// ending with the return statment for the returnArr object.
// this function creates a new array from the children of the parameter array, without using the flat method.
