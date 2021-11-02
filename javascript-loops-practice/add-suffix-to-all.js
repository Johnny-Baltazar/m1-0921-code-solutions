/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordsWithSuffix = [];
  for (var i = 0; i < words.length; i++) {
    wordsWithSuffix.push(words[i] + suffix);
    // console.log(wordsWithSuffix);
  }
  return wordsWithSuffix;
}
