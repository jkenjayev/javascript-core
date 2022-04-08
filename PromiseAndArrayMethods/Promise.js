"use strict";
/*

const isMeet = true;
const willMeet = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(isMeet) {
      const friends = {
        mood: "good",
        place: "Park Hotel"
      }

      resolve(friends);
    } else {
      const reason = new Error("The reason why There is traffic jam");
      reject(reason);
    }
  }, 2000);
});

willMeet
  .then(result => console.log(result))
  .catch(error => console.log(error));*/

/*const request = new Promise((resolve, reject) => {

  setTimeout(() => {
    console.log("Data is being prepared...");

    const car = {
      name: "Mers",
      price: 4000
    }

    resolve(car);
  }, 2000);
});

request.then((car) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      car.isBought = true;
      resolve(car);
    }, 2000);
  });
})
  .then(data => console.log(data));

console.log("Data is being sent...");*/

const timer = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
}

/*
timer(1000).then(() => console.log("1000ms"));
timer(2000).then(() => console.log("2000ms"));
*/

Promise.all([timer(1000), timer(2000)]).then(() => console.log("all"));
Promise.race([timer(1000), timer(2000)]).then(() => console.log("race"));