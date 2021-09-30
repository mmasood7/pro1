"use strict";
const a = 5;
const arr = [
  [a],
  [a + 1, a - 1],
  [a, a + 4, a - 4],
  [a - 2, a - 4, a + 2, a + 4],
  [a, a - 2, a + 2, a - 4, a + 4],
  [a - 1, a - 2, a - 4, a + 1, a + 2, a + 4],
];
const rollDice = function () {
  const allTd = document.querySelectorAll("td");
  allTd.forEach((item) => item.classList.remove("dot"));
  const randomNum = function () {
    return Math.floor(Math.random() * 6);
  };
  const randomPostition = function () {
    return Math.floor(Math.random() * 90);
  };
  let num = randomNum();
  console.log(num);
  arr.forEach((item, i) => {
    if (num === 6) {
      document.querySelector("table").style.backgroundColor = "green";
    }
    if (num === i) {
      item.forEach((item) => {
        document.querySelector("table").style.transition = `2s`;
        document.getElementById(`no${item}`).classList.add("dot");
        // document.querySelector(".dot").style.backgroundColor = `#${
        //   Math.floor(Math.random() * 600) + 50
        // }`;
      });
      document.querySelector(
        "table"
      ).style.transform = `rotate(${randomPostition()}deg)`;
      document.querySelector("table").style.boxShadow = `${
        Math.floor(Math.random() * 3) + 5
      }px ${Math.floor(Math.random() * 15) + 10}px`;
    }
  });
  const pos = ["top", "bottom", "right", "left"];
  const a = pos[Math.floor(Math.random() * 4)];
  document.querySelector("table").style.top = `${
    Math.floor(Math.random() * 200) + 50
  }px`;
  document.querySelector("table").style.left = `${
    Math.floor(Math.random() * 600) + 50
  }px`;
};
// document.getElementById("table").addEventListener("click", rollDice);
