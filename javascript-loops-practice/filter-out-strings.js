/* exported filterOutStrings */
function filterOutStrings(values) {
  var filteredStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') { filteredStrings.push(values[i]); }
    // console.log(filteredStrings);
  }
  return filteredStrings;
}
