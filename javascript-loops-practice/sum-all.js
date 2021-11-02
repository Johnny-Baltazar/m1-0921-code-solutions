/* exported sumAll */
function sumAll(numbers) {
  var sumAllNumbers = [];
  var i = 0;
  while (i <= numbers.length) {
    sumAllNumbers = numbers.reduce((a, b) => a + b);
    i++;
    // console.log(sumAllNumbers);
  }
  return sumAllNumbers;
}
