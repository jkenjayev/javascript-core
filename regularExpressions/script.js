"use strict";
// const answer = prompt("What is your name?");
const regularExpression = /r/g;

// console.log(answer.search(regularExpression));
// console.log(answer.match(regularExpression));

const arr = [1, 2, 3];
console.log(arr.isArray(), "aytdim");

const password = prompt("Password");
console.log(password.replace(/./g, "*"));
/* 
  ---> Flags <----
  1. i --> Case-insensitive search
  2. g --> Global search
  3. m --> multi-line search

*/