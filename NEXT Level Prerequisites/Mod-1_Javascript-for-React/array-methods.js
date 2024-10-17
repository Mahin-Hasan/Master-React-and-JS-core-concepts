const products = [
  { name: "Smartphone", price: 599, brand: "TechBrand", color: "Black" },
  { name: "Laptop", price: 899, brand: "SuperTech", color: "Silver" },
  { name: "Headphones", price: 199, brand: "SoundMax", color: "Blue" },
  { name: "Smartwatch", price: 299, brand: "WristGadget", color: "Red" },
  { name: "Tablet", price: 499, brand: "TabMaster", color: "Gold" },
];
// map
const brands = products.map((product) => product.brand);
console.log(brands);
const price = products.map((product) => product.price);
console.log(price);
//map returns something but for each does not return

//foreach
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

//filter

const cheap = products.filter((product) => product.price < 300);
console.log(cheap);

const specificName = products.filter(p=>p.name.includes('n'))
console.log(specificName);

//find
const special = products.find(p=>p.name.includes('n'))
console.log(special);
