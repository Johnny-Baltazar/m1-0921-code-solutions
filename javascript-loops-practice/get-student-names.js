/* exported getStudentNames */
function getStudentNames(students) {
  var studentNamesArr = [];
  for (var i = 0; i < students.length; i++) {
    studentNamesArr.push(students[i].name);
    // console.log(studentNamesArr);
  }
  return studentNamesArr;
}
