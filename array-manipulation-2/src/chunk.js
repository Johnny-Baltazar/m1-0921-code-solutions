/* exported chunk */
function chunk(array, size) {
  var chunked = [];
  for (var i = 0; i < array.length; i += size) {
    var arrChunk = array.slice(i, i + size);
    chunked.push(arrChunk);
  }
  return chunked;
}
