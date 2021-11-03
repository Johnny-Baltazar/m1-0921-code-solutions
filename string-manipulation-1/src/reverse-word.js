/* exported reverseWord */
function reverseWord(word) {
  var wordsBackwards = '';
  for (var i = word.length - 1; i >= 0; i--) {
    wordsBackwards += word.charAt(i);
  }
  return wordsBackwards;
}
// function that reverses string backwards with a for loop
