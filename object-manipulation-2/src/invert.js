/* exported invert */
function invert(source) {
  var invertedSource = {};
  for (var key in source) {
    invertedSource[source[key]] = key;
  }
  // console.log('source:', source);
  // console.log('invertedSource:', invertedSource);
  return invertedSource;
}

// This function named invert, switches the properties and values of an object when passed within the function.
// The result is assigned to the inverted source object.
