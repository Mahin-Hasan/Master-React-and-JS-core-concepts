// 1. array destructuring

const num = [32, 85];
// const x = num[0]
// const y = num[1]
const [x, y] = [12, 43];

console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
console.log(boxify(2, 4));
const [first, second] = boxify(4, 5);
console.log(first, second);

const student = {
  name: "Mahin hasan",
  age: 24,
  movies: ["social network", "catch me if you can"],
};
// const [firstMovie,secondMovie]=  ["social network", "catch me if you can"]
const [firstMovie, secondMovie] = student.movies;

console.log(firstMovie, secondMovie);

// object destructuring
const { name, age } = { name: "rocky", age: 32 };
console.log(name, age);

const employee = {
  ide: "VS CODE",
  designation: "Software Engineer",
  machine: "MacBook Pro",
  languages: ["JavaScript", "Python", "C++"],
  specification: {
    height: 59,
    weight: "75kg",
    drink: "water",
  },
};

const { machine, ide } = employee;
const { weight, drink, height } = employee?.specification;
console.log(machine, ide, weight, drink, height);
