/* exported pick */
function pick(source, keys) {
  var listedKeys = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[key] !== undefined) {
        listedKeys[keys[i]] = source[key];
      }
    }
  }
  return listedKeys;
}

// psuedocode-before: define a function named pick that takes two parameters named source and keys.
// a new object is returned with the values of the keys parameter if they are within the source parameter.

// After: a function named pick is defined with two parameters named source and keys.
// an empty object literal is assigned to the variable listedKeys.
// a for in loop is used to iterate the source parameter with the variable key.
// a for loop iterates thru the keys variable.
// an if statement compares the keys parameter at index i to the key varable, and if the key value of the source
// parameter/property is not strictly equal to undefined.
// if true, the value of key of the source parameter is assigned to the listed keys object of the keys properties at index i.
// return statement for the listedKeys object.
