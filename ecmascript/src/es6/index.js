////// definir valores por defecto
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}
/////// es6 desde asginacion de los parametros
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}
newFunction2();
newFunction2("Ricardo", "23", "CO");

/////// concatenacion
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/////// multilineas
let lorem =
  "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" +
  "otra frase epica que necesitamos.";
// es6 mediante template literals ``
let lorem2 = `otra frase epica que necesitamos
  ahora es otra frase epica
  `;
console.log(lorem);
console.log(lorem2);

/////// desestructuracion de elementos
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

/////////// antes solo existia var
{
  var globalVar = "Global Var";
}
//es6 let, local scope
{
  let globalLet = "Global Let";
  console.log(globalLet);
}
console.log(globalVar);
//es6 const, invariable o inmutable
const a = "b";
a = "a";
console.log(a);

////////// declaracion de objetos
let name = "oscar";
let age = 32;
//es5
obj = { name: name, age: age };
//es6 propiedad de objetos mejorada
obj2 = { name, age };
console.log(obj2);

///////// arrow functions
const names = [
  { name: "Oscar", age: 32 },
  { name: "Yesica", age: 27 },
];
// funcion anonima
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
// arrow function multiples parametros
let listOfNames2 = names.map((item) => console.log(item.name));
const listOfNames3 = (name, age, country) => {
  console.log(name, age, country);
};
// arrow function unico parametro
const listOfNames4 = (name) => {
  console.log(name);
};
// arrow function compacta, con unica linea con return implicito
const square = (num) => num * num;

//// promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};
// ejecutar promesa
helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

/////////// clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2, 2));

///// importar modulo
const lib =  require('./module');
lib.hello();
lib.bye();
//es6 (no me anda :( )
import { hello } from './module';
hello();
// importar con otro nombre
import myHello from './module'
console.log(myHello())

//// Generators
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
