/* exported includes */
function includes(array, value) {
  var includesValue = array.some(event => event === value);
  return includesValue;
}
