"use strict";

class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  say () {
    console.log(`Username is ${this._name} and their age is ${this._age}`);
  };

  getAge() {
    return this.age;
  }

  setAge(age) {
    if (typeof age === "number" && age > 10 && age < 100) {
      this.age = age;
    } else {
      console.log("Data is not valid");
    }
  }
}

const Java = new User("Javohir", 23);
Java.setAge = 25;
console.log(Java);
Java.say();