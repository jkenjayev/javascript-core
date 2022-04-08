function* count(n) {
  for(let i = 0; i < n; i++) {
    yield i;
  }
}

const counter = count(8);

for(let key of counter) {
  console.log(key);  
}


/* function* generator() {
  yield "J";
  yield "a";
  yield "v";
  yield "o";
  yield "h";
  yield "i";
  yield "r";
}

let name = generator();
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
 */