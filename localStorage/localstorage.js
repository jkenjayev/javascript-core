"use strict";

const checkbox = document.querySelector("#checkbox");
const  form = document.querySelector("form");
const changer = document.querySelector("[data-change]");
const body = document.querySelector("body");


if(localStorage.getItem("isChecked")) {
  checkbox.checked = true;
}

if(localStorage.getItem("bg") === "changed") {
  body.style.background = "crimson";
}
checkbox.addEventListener("change", () => {
  localStorage.setItem("isChecked", true);
});

changer.addEventListener("click", () => {
  if(localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
    body.style.background = "#fff";
  }
  else {
    localStorage.setItem("bg", "changed");
    body.style.background = "crimson";
  }
})