const numbers = [123, 564, 76, 8, 71, 34];

const student = {
  name: "Mahin hasan",
  age: 24,
  movies: ["social network", "catch me if you can"],
};

// 1. template string
const about = `my name is ${student["name"]} and age ${student.age} i have ${numbers[4]} amount of balls and i like movies ${student.movies[1]}`;

console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (z) => z % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// 3. spread operator | creates copy as array holds reference

const newNumbers = [...numbers];
numbers.push(99);
console.log(newNumbers);

//cerate a new array from older array and add an element
const currentNumber = [...numbers, 86];
console.log(currentNumber);
