/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      // console.log(i);
      return i;
    }
  }
  return -1;
}
