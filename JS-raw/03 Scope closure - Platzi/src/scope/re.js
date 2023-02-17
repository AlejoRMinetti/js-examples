var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David"; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName); 

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // reasignado
console.log(secondName);

// Let
let fruit = 'Apple' // declara y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

let fruit = 'Banana'; // SyntaxError: Identifier 'fruit' has already been declared
console.log(fruit);

// const
const animal = 'dog'; // declara y asigna
// animal = 'cat'; // reasignado
const animal = 'Snake'; // SyntaxError: Identifier 'animal' has already been declared
console.log(animal);

const vehicles = []; // constante es la direccion de creacion del array, pero se puede modificar su contenido
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);