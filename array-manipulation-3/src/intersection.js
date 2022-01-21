/* exported intersection */
function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}

// this function named intersection takes two parameters and returns a new array with values that are in both objects.
