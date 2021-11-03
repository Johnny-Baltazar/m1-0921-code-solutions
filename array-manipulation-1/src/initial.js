/* exported initial */
function initial(array) {
  var minusLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    minusLast.push(array[i]);
  }
  return minusLast;
}
