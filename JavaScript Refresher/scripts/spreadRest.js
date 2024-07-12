const fruits = ["orange", "apple", "banana", "mango", "litchi", "apple"];
const nameObj=[
    {
        name: "Mahin"
    },
    {
        name: "Rocky"
    },
]
const language ={
    name: "JavaScript",
    year: 1995,
    creator:"Brendan Eich"
}

const result = [...fruits] // spreading an array creats a copy and does not hold reference 

const result2 = [...nameObj] // does not create a perfect copy as inside there is object which holds the reference

console.log(result);
console.log(result2);

//rest operator

function sum(text,...rest){
    const  result= rest.reduce((sum, curr)=> sum + curr,0)
    console.log(text, result);
}

const res=sum("The sum is: ",2,4,1);// makes an array of passed items

