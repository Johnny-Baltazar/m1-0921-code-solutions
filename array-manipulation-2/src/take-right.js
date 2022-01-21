/* exported takeRight */
function takeRight(array, count) {
  var arrayStartIndex = array.length - count;
  var arrayLast = array.slice(arrayStartIndex);
  return arrayLast;
}
