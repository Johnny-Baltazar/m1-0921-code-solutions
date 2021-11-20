/* exported lastChars */
function lastChars(length, string) {
  var lastCharacters = string.substring(string.length - length);
  return lastCharacters;
}

// this function uses the substring method to return the last characters of the string parameter.
// the last characters are returned from the end of the string with string.length minus
// the specified number of the length parameter.
// I tried using the slice() method but it did not work for the function.
