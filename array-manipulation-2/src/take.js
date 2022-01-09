/* exported take */
function take(array, count) {
  var arrSubtract = array;
  for (var i = 0; i < array.length; i++) {
    arrSubtract = arrSubtract.slice(0, count);
  }
  return arrSubtract;
}

// before: this function named 'take' has two parameters named 'array' and 'count.' Returned is a shortened legnth of the array.
// after: a function named 'take' with two parameters is defined.
// the array parameter is assigned to the variable 'arrSubtract.'
// a for loop iterates thru the arrSubtract object.
// the slice method of the arrSubtract object is beeing called with two arguments, number 0 and the count parameter, and the value being assigned to the
// arrSubtract object.
// the arrSubtract is returned.
