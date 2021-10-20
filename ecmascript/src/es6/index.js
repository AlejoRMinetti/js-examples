// definir valores por defecto
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// es6 desde asginacion de los parametros
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", "23", "CO");

// concatenacion
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilineas
let lorem =
  "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" +
  "otra frase epica que necesitamos.";

// es6 mediante template literals ``
let lorem2 = `otra frase epica que necesitamos
  ahora es otra frase epica
  `;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "oscar",
  age: 32,
  country: "MX",
};

console.log(person.name, person.age);

// es6 desestructuracion de elementos
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];
//es6 operador de propagacion
let education = ["David", ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

//es6 let, local scope
{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

//es6 const
const a = "b";
a = "a";
console.log(a);
