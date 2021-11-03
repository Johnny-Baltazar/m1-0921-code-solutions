/* exported compact */
function compact(array) {
  var compactArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArr.push(array[i]);
    }
    // console.log(array[i]);
  }
  return compactArr;
}
