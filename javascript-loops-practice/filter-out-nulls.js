/* exported filterOutNulls */
function filterOutNulls(values) {
  var exceptNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) { exceptNulls.push(values[i]); }
    // console.log(exceptNulls);
  }
  return exceptNulls;
}
