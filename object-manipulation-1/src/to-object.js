/* exported toObject */
function toObject(keyValuePair) {
  var convertedArrToObject = {};
  for (var i = 0; i < keyValuePair.length; i++) {
    convertedArrToObject[keyValuePair[0]] = keyValuePair[i];
  }
  return convertedArrToObject;
}

// my notes: this function takes an array from parameter keyValuePair and returns the array to a object
// line 5 assigns the keyValuePair parameter at index i to the convertedArrToObject variable,
// and also adds the keyValuePair parameter at index 0 to the convertedArrToObject variable
// keyValuePair arguments were ['firstName', 'David'], ['isCool', true], and ['employer', 'LearningFuze']
