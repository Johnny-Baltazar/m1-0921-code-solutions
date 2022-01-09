/* exported drop */
function drop(array, count) {
  var arrayDrop = [];
  for (var i = 0; i < array.length; i++) {
    arrayDrop = array.slice(count, array.length);
  }
  return arrayDrop;
}

// before: the function named drop has two parameters named array and count.
// returned, is the array legnth being shortened before the index of count.

// after: a function is being named drop with two parameters array and count.
// and empty array is being assigned to the variable arrayDrop.
// a for loop iterates thru the array.
// the slice method of the array object is being called with two arguments, the count parameter and the array.length parameter,
// and the value is assigned to arrayDrop variable.
// the arrayDrop is being returned.
