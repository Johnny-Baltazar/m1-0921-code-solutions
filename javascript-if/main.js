/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  var letterJ = 'J';
  string.split('');
  if (string[0] === letterJ) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(ph) {
  if (ph === 7) {
    return 'Acidity is neutral.';
  } else if (ph >= 0 && ph <= 6) {
    return 'Acid';
  } else if (ph >= 8 && ph <= 14) {
    return 'Base';
  } else {
    return 'Invalid ph level.';
  }
}

function introduceWarnerBro(name) {
  if (name === 'Yakko') {
    return 'We\'re the Warner Brothers!';
  } else if (name === 'Wakko') {
    return 'We\'re the Warner Brothers!';
  } else if (name === 'Dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight Everybody!';
  }
}
