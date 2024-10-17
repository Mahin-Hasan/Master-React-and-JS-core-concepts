// 1. Declaring variable using let and const
const fatherName = "Arnold";
let season = "rainy";
season = "winter";
console.log(season);

// 2. conditions
// 6 basic conditions: >,<, ===,!==,>=,<=, &&, ||
if (fatherName === "arnold" || season === "rainy") {
} else if (fatherName === "Arnold") {
} else {
}

// 3. array | index | length | Push
const numbers = [123, 564, 76, 8, 71, 34];
numbers[0];

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function
function multiply(num1, num2) {
  const res = num1 * num2;
  return res;
}
const output = multiply(2, 3);
console.log(output);

// 6. object | 3 ways to access property by name
const student = {
  name: "Mahin hasan",
  age: 24,
  movies: ["social network", "catch me if you can"],
};

const myVariable = "age";
console.log(student.age); // direct by property
console.log(student["age"]); // access via property name string
console.log(student[myVariable]); // access via property name in a vaiarble
