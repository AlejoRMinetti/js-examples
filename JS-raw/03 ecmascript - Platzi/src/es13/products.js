import fetch from "node-fetch";
// se requiere instalar: npm install node-fetch
// o si ya esta en package.json: npm install

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

// console.log(products)
export { products };