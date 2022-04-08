"use strict";

/* functional*/
function User(name, age) {
  this.name = name;
  let userAge = age

  this.say = function() {
    console.log(`Username is ${this.name} and their age is ${userAge}`);
  }

  this.getAge = function() {
    return userAge;
  }

  this.setAge = function(age) {
    if(typeof age === "number" && age > 0 && age < 130) {
      userAge = age;
    } else {
      console.log(new Error("Data is not valid"));
    }
  }
}

const Java = new User("Javohir", 24);
Java.setAge(30);
Java.say();