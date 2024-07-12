const fruits = ["orange", "apple", "banana", "mango", "litchi", "apple"];
const nameObj = [
    {
        name: "Mahin"
    },
    {
        name: "Rocky"
    },
]
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendan Eich"
}

const result = [...fruits] // spreading an array creats a copy and does not hold reference 

const result2 = [...nameObj] // does not create a perfect copy as inside there is object which holds the reference

console.log(result);
console.log(result2);

//rest operator

function sum(text, ...rest) {
    const result = rest.reduce((sum, curr) => sum + curr, 0)
    console.log(text, result);
}

const res = sum("The sum is: ", 2, 4, 1);// makes an array of passed items

//ternary

const a = 6;

const output = a % 2 === 0 ? "Even" : a % 3 === 0 ? "Divisible by 3" : "Simple odd";

console.log(output);

//destructuring

const user = {
    name: "Mahin",
    id: 4,
    age: 24,
    education: {
        degree: "BSc",
        school:{
            schoolName: "JCPSC"
        }
    }
}

const { name, age, education: { degree } = {} } = user; // {} default value if data is missing it will not break the program
console.log(degree);

const {education:{school:schoolName}} = user;

console.log(schoolName);

//using optional chaining
console.log(user?.education?.school?.schoolName);

//nullish coalescing [null, undefined]

const lang = null;
const lang2 = false;

console.log(lang2 ?? "if null or undefined it will return this text ");
// compared to || logical or

console.log(lang2 || "if falsy then this line executes");
console.log(lang2 && "if truthy then this line executes");
