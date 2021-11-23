/* exported numVowels */
function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var vowelsLength = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      vowelsLength++;
    }
  }
  return vowelsLength;
}

// this function returns the length or number of vowels within the string parameter
// an array of vowels are assigned to the vowels variable
// the string parameter is iterated with a conditional on line 6 checks if the vowels
// object includes the characters within the string parameter at index 'i', then added to the
// vowelsLength object. Then the vowelsLength object is returned.
