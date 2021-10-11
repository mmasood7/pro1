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
let currentIndex;
let mode = "new";
// let stExists = false;
const isChildOfTag = function (kid, ofThe) {
  if (kid.parentElement) {
    if (kid.parentElement.nodeName === ofThe) {
      return kid.parentElement.nodeName;
    }
    if (kid.parentElement) {
      return isChildOfTag(kid.parentElement, ofThe);
    }
  }
};

const exist = function (st) {
  return students.find((student) => {
    if (student.email.toLowerCase().trim() === st.toLowerCase().trim()) {
      return true;
    }
  });
};
const edit = function (index) {
  const el = students[index];
  userNameEl.value = el.name;
  userEmailEl.value = el.email;
  userPassEl.value = el.password;
  mode = "edit";
  document.querySelectorAll("tr").forEach((tr, i) => {
    if (i != 0) tr.style.backgroundColor = "white";
    if (i === index + 1) {
      tr.style.backgroundColor = "grey";
    }
  });
};
const displayData = function () {
  myTable.innerHTML = "";
  students.forEach((student, index) => {
    const tr = document.createElement("tr");
    const tName = document.createElement("td");
    tName.innerText = student.name;
    const tEmail = document.createElement("td");
    tEmail.innerText = student.email;
    const tPass = document.createElement("td");
    tPass.innerText = "*".repeat(student.password.length);
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    const editCol = document.createElement("td");
    editCol.append(editBtn);

    editBtn.addEventListener("click", () => {
      edit(index);
    });
    currentIndex = index;

    tr.append(tName, tEmail, tPass, editCol);
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
    if (mode === "edit") {
      students.splice(currentIndex, 1, s1);
      mode = "new";
    } else if (mode === "new") {
      if (stExists) {
        alert("email is already in use");
        stExists = false;
      } else {
        students.push(s1);
      }
    }
  }

  displayData();
  myForm.reset();
};
subForm.addEventListener("submit", (event) => {
  createNewStudentRecord(event);
});
document.addEventListener("click", (e) => {
  const check = isChildOfTag(e.target, "TABLE");
  if (check !== "TABLE" &&) {
    document.querySelectorAll("tr").forEach((tr, i) => {
      if (i !== 0) tr.style.backgroundColor = "white";
    });
    const form = isChildOfTag(e.target,"FORM")
    if(check !== form){
    mode = "new";

  }
});
