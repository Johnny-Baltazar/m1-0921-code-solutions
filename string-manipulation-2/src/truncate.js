/* exported truncate */
function truncate(length, string) {
  return string.substring(0, length) + '...';
}
// before: define a function named truncate that takes two parameters of 'length' and 'string'
// the function returns a shortened length of the string parameter based on the number of length parameter
// an ellipsis is returned at the end of the string parameter

// after: define a function named truncate that takes two parameters of 'length' and 'string'
// return the substring method of the string parameter that is being called with two arguments of the number zero and the length parameter,
// and is being concatenation with an elipsis
