/* exported getKeys */
function getKeys(object) {
  var keysArr = [];
  for (var keys in object) {
    keysArr.push(keys);
  }
  return keysArr;
}

// define a function named getKeys that takes one parameter 'object'
// assign an empty array to variable named keysArr
// create a for loop to check each of the properties of the 'object' parameter
// add the value for the current property stored in the parameter 'object' to the keysArr array
// return the keysArr
