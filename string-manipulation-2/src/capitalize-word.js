/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalizeFirstChar = word.toLowerCase();
  var indexOnePlus = capitalizeFirstChar.substring(1, capitalizeFirstChar.length);
  if (capitalizeFirstChar === 'javascript') {
    return 'JavaScript';
  } else {
    return capitalizeFirstChar[0].toUpperCase() + indexOnePlus;
  }
}

// before: define a function named capitalizeWord that takes one parameter of 'word'
// return the word parameter with only the first character uppercased

// after: define a function named capitalizeWord with one parameter of 'word'
// assign the calling of the toLowerCase method of the word parameter to the capitalieFirstChar variable
// an if conditional statement testing if the string 'javascript' is strictly equal to the variable capitalizeFirstChar
// if true, return the string 'JavaScript'
// else statement
// return the first variable of the capitalizeFirstChar concatenated with the indexOnePlus variable
// my notes: this function returns a string with only the first character capitalized, except if the string is equal to
// javascript which returns the string 'JavaScript'
