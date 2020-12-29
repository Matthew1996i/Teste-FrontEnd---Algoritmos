const mapArray = [
  "a",
  10,
  "b",
  "hola",
  122,
  15,
  "a",
  350,
  1,
  -10,
  "Casa",
  "oi",
];

let word = [];
let numbers = [];

mapArray.map((item) => {
  if (isNaN(item)) {
    word.push(item);
  } else {
    numbers.push(item);
  }
});

//function to get the major number
numbers.sort((a, b) => {
  return a - b;
});

console.log(word, numbers, numbers[numbers.length - 1]);
