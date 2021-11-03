/* exported reverse */
function reverse(array) {
  var backwardsArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    backwardsArr.push(array[i]);
  }
  return backwardsArr;
}
