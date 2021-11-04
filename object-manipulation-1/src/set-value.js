/* exported setValue */
function setValue(object, key, value) {
  for (var keys in object) {
    keys = object;
    keys[key] = value;
    // console.log(keys);
  }
  return keys;
}
// define a function named setValue that takes three parameters of 'object', 'key', and 'value'
// create a for loop to check each of the properties of the 'object' parameter
// assign the object parameter to the keys variable
// assign the value parameter to the keys varaiable at the index of the keys parameter
// return the object keys
