/* exported dropRight */
function dropRight(array, count) {
  var arrayLastIndex = array.length - count;
  var arrayFirst = array.slice(0, arrayLastIndex);

  return arrayFirst;

}
