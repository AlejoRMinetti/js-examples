// at
const array = ["one", "two", "three", "four", "five", "six"];

console.log(array[array.length - 1]);
console.log(array.at(-1));
console.log(array.at(2));
console.log(array.at(-3));

// Top-level-await
import { products } from "./products.js";
// add to package.json: "type": "module",

console.log("Loading products...");
console.log(products);
console.log("Hey!!");

// not working over proxy connection