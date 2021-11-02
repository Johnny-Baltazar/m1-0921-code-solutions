/* exported capitalize */
function capitalize(word) {
  word.toLowerCase();
  // console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
// define a function named capitalize that takes one parameter of 'word'
// the lowerCase method of the word parameter is being called with no parameters.
// return the toUpperCase method of the word parameter at index 0 is being
// called by zero parameters, and concatenated with the toLowerCase method with no parameters and
// the slice method at the index of one of the word object.
