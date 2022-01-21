/* exported difference */
function difference(first, second) {
  return first.filter(function (val) {
    return second.indexOf(val) === -1;
  })

    .concat(second.filter(function (val) {
      return first.indexOf(val) === -1;
    }));

}

// this function named differce has two parameters named first and second.
// a new array is returned with the symmetric different values.
