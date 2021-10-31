/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddOrEvenString = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenString.push('even');
    } else {
      oddOrEvenString.push('odd');
    }
  }
  // console.log(oddOrEvenString);
  return oddOrEvenString;
}
