"use strict";

function myModule() {
  this.hello = function () {
    console.log("Hello World");
  };

  this.bye = function() {
    console.log("Bye!");
  }
}

module.exports = myModule;
