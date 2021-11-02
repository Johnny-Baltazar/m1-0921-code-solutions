/* exported countdown */
function countdown(number) {
  var countDownArr = [];
  while (number >= 0) {
    countDownArr.push(number);
    number--;
    // console.log(countDownArr);
  }
  return countDownArr;
}
