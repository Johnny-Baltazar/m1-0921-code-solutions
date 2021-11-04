/* exported getValues */
function getValues(object) {
  var getValuesArr = [];
  for (var keys in object) {
    getValuesArr.push(object[keys]);
  }
  return getValuesArr;
}
// define a function named getValues with one parameter of 'object'
// define a variable named getValuesArr containing an empty array
// create a for loop to check each of the properties of the object parameter
// add the value for the current property stored in the parameter 'object'
// return the getValuesArr array
// the getValues function returns an array of the object's property values
