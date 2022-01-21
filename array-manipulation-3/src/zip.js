/* exported zip */
function zip(first, second) {
  if (first.length > second.length) {
    first.pop();
  } else if (second.length < first.length) {
    second.pop();
  }
  var zippedArr = first.map(function (element, i) {
    return [element, second[i]];
  });
  return zippedArr;
}

// this function named zip has two parameters named first and second. returned is a new array, with the array values as pairs.
// the length of the two objects is compared, and the odd array values are removed.
// the map method is used with a function to iterate and combine the two array objects.
