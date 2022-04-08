// Filtering avoid new Array
const cars = ["meRs", "bmW", "cHevrolet", "wW", "KIa", "Chrysler", "Hino", "Karma", 4, true, false];

const filteringCars = cars.filter(car => car.length < 5);
/*console.log(minLengthOfCars);*/


// Mapping avoid new Array
// const mappingCars = cars.map(car => car.toUpperCase());
/*console.log(mappingCars);*/

// Every and some methods avoid boolean
const someCar = cars.some(car => typeof car === "number");
// console.log(someCar);

const everyCar = cars.every(car => typeof car === "number");
// console.log(everyCar);


// Reduce
const reduceCars = cars.reduce((sum, current) => sum + ", " + current);
// console.log(reduceCars);

const object = {
  Javohir: "person",
  Nodirbek: "person",
  Samandar: "person",
  Rakeloy: "animal"
}

const objToArr = Object.entries(object)
  .filter(index => index[1] === "person")
  .map(person => person[0]);

console.log(objToArr);
