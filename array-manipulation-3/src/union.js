/* exported union */
function union(first, second) {
  var unionResult = first.concat(second).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
  return unionResult;
}

// this function named union combines to arays as parameters named first and second, then filters out duplicate values.
