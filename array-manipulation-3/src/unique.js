/* exported unique */
function unique(array) {
  function returnUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  return array.filter(returnUnique);
}

// this function named unique has one parameter named array.
// a function named returnUnique with three parameters named value, index, and self. The return unique function iterates the array object,
// returning the value and indexes. Returned is the return value of the self object of the indexOf method being called with the argument value,
// if strictly equal of index. the return stament of the unique array of the filter method is called with the returnUnique argument.
// the unique funtion returns a new array removing any duplicate array values.
