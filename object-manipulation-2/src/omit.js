/* exported omit */
function omit(source, keys) {
  var includedSource = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      includedSource[key] = source[key];
    }
  }
  return includedSource;
}

// pseudocode-before: define a function named omit with two parameters named source and keys.
// the function returns an object with the properties and values that are not in the keys parameter but are in the source parameter.

// pseudocode-after: a function named omit is being defined with two parameters, source and keys.
// an empty object literal is being assigned to the variable includesSource.
// a for-in statement iterates thru the source object followed by an if statement that checks if keys does not include the properties of the source object.
// the keys of the source object that are not found within keys is assigned to the includedSource object.
// The purpose of this funtion is to return the key/value pairs of source that are not found in keys.
