// hoisting, global scoping, diff var | let | const
var lang = "python";

function learn(topic) {
  lang = topic;

  if (true) {
    const a = {
      b: 5,
    };
    a.b = 6; //a constant value can not be reassigned but can be modified referencing to the same array or object i.e push
    console.log(a);
  }

  console.log(`I am recapping ${lang}`);
}

learn("JavaScript");

console.log(`I know ${lang}`);

//2 Functions

// Regular Function also known as statement

function hello() {
  console.log("Say Hellow");
  //return undefined; || a function will return undefined behind the scene if nothing is returned explicitely
}

let returedResult = hello();
console.log(returedResult);

// Function Expression

const hello2 = function () {
  console.log("helloooooo");
};

// Named Function Expression

const hello3 = function hello3() {
  console.log("helloooooowww");
};

// Arrow Function
const returnFive = () => 5;
const addTwo = (a, b) => a + b;
//obj return with arrow func
const makeObj = (a, b) => {
  return {
    a: 5,
    b: 7,
  };
};
// another Syntax
const makeObj2 = (a, b) => ({
    a: a,
    b: b,
});

const first = 1;  // Example values for first and second
const second = 2;

// const objOutput = makeObj2(first, second); // Corrected function call
console.log(makeObj2(first, second));

// 4. Anonymous function
function random(){
    return function(){
        console.log('anonymous function');
    }
}

//dom 
const button = document.getElementById('button');
// button.addEventListener('click', () => {
//     console.log('clicked');
// });
button.addEventListener('click', hello);

//premitive[string , number , boolean] vs reference[obj,arr] 

let firstObj = ["ruby", "C#"]
let secondObj = ["Typescript", "C++"]

secondObj = firstObj;
console.log(firstObj);
console.log(secondObj);
firstObj.push('solidity')
console.log(firstObj);
console.log(secondObj);

