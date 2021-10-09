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
// let stExists = false;
const exist = function (st) {
return   students.find((student) => {
    if (student.email.toLowerCase().trim() === st.toLowerCase().trim()) {
     return true;
    }
  });
};
const displayData = function () {
  myTable.innerHTML = "";
  students.forEach((student) => {
    const tr = document.createElement("tr");
    const tName = document.createElement("td");
    tName.innerText = student.name;
    const tEmail = document.createElement("td");
    tEmail.innerText = student.email;
    const tPass = document.createElement("td");
    tPass.innerText = "*".repeat(student.password.length);
    tr.append(tName, tEmail, tPass);
    myTable.append(tr);
  });
};

const createNewStudentRecord = function (e) {
  e.preventDefault();
  if (userEmailEl.value && userNameEl && userPassEl.value) {
    const s1 = new Student();
    s1.name = userNameEl.value;
    s1.email = userEmailEl.value;
    s1.password = userPassEl.value;
    let stExists = exist(s1.email);
      if (stExists) {
        alert("email is already in use");
        stExists = false;
      } else {
        students.push(s1);
      }
  
  }
  displayData();
};
subForm.addEventListener("submit", (event) => {
  createNewStudentRecord(event);
});
