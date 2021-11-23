/* exported ransomCase */
function ransomCase(string) {
  var everyOtherUpperCase = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      everyOtherUpperCase += string[i].toLowerCase();
    } else {
      everyOtherUpperCase += string[i].toUpperCase();
    }
  }
  return everyOtherUpperCase;
}

// this function returns a string with everyother characater as uppercase, from the string parameter.
