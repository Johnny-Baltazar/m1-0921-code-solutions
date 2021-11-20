/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerWords = string.toLowerCase().split(' ');
  for (var i = 0; i < lowerWords.length; i++) {
    lowerWords[i] = lowerWords[i].charAt(0).toUpperCase() + lowerWords[i].substring(1);
  }
  return lowerWords.join(' ');
}

// This function capitalizes the first character of each word of the string parameter which is input to the variable lowerWords.
// the lowerWords object is converted into an array with the split() method, and all characters are converted to lowercase.
// the lowerWords object is iterated. the first character of each lowerWords at index 'i' is uppercased, and concatenated
// with the remaining characters of the string with the substring method returning the remaining characters lowercased.
// the lowerWords object is then converted back to a string with the join() method thru the return statement.
