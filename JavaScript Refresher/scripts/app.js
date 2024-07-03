// array methods

const fruits = ["orange", "apple", "banana", "mango", "litchi", "apple"];

const item = fruits.find((fruit) => fruit === "apple" || fruit === "mango"); // returns the first found item
const itemIndex = fruits.findIndex((fruit) => fruit === "apple"); // returns the first found index
const filteredItem = fruits.filter(
  (fruit) => fruit === "apple" || fruit === "mango"
); // returns matched items
const slicedArr = fruits.slice(2, 4); // takes index number as parameters
// const splicedArr = fruits.splice(2, 2, "lemon", "guava", "papaya"); // first parameter starting index, 2nd no of item to remove from that index, rest will be taken as input in the index || affects the main array be careful while using splice

const concatedArr = fruits.concat(["grape", "pineapple"]); // inserts elements at last
// const pushedArr = fruits.push("grape","pineapple") // inserts elements at last. returns array length and changes main array

console.log(concatedArr);
console.log(fruits);

// map operation
const result1 = fruits.map((f) => `${f} -`);

const result = fruits.map((fruit) => {
  if (fruit === "apple") {
    return "apple";
  } else {
    return "N/A";
  }
});

//same map operation using raw for loop system

const res = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    res.push("apple");
  } else {
    res.push("N/A");
  }
}

console.log(result1);
console.log(result);
console.log(res);

// array reduce
const numbers = [1, 2, 3, 4, 5, 6];

const output = numbers.reduce((total, currVal) => total + currVal, 0); // here total is the result and 0 is the intial value of result and currVal will change according to numbers array elements || takes the array as input and after performing operation it will give one single value as output

console.log(output);
// forEach for of for in

const language ={
    name: "JavaScript",
    year: 1995,
    creator:"Brendan Eich"
}

for (key in language){
    console.log(language[key]);
}