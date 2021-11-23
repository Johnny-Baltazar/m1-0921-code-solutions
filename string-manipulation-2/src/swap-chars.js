/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var stringArr = string.split('');

  for (var i = 0; i < stringArr.length; i++) {
    stringArr[firstIndex] = string[secondIndex];
    stringArr[secondIndex] = string[firstIndex];
  }
  stringArr = stringArr.join('');
  return stringArr;
}
