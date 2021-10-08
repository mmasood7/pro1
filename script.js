"use strict";
class Student {
  name = "";
  email = "";
  password = "";
}
const students = [];
const userNameEl = document.querySelector("#userName");
const userEmailEl = document.querySelector("#userEmail");
const userPassEl = document.querySelector("#userPass");
const subForm = document.querySelector("#myForm");

const createNewStudentRecord = function (e) {
  e.preventDefault();
  if (userEmailEl.value && userNameEl && userPassEl.value) {
    const s1 = new Student();
    s1.name = userNameEl.value;
    s1.email = userEmailEl.value;
    s1.password = userPassEl.value;
    if (students.length !== 0) {
      students.find((student) => {
        if (
          student.name.toLowerCase.trim === userNameEl.value.toLowerCase.trim
        ) {
          students.push(s1);
        } else {
          alert(`${s1.name} User Already Existes`);
          return;
        }
      });
    } else {
      students.push(s1);
    }
  }
};
subForm.addEventListener("submit", (event) => {
  createNewStudentRecord(event);
});
