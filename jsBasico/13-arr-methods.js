var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "laptop", costo: 20000 },
  { nombre: "teclado", costo: 500 },
  { nombre: "audifonos", costo: 1700 },
];
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// Metodos para recorrer arrays
// en JS-VI (Henry) hay implementaciones mediante callbacks

//   Metodo forEach: recorre sin dar un return
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});
numeros.forEach(elemento => { // para usar id y array: (elemento, id, array) =>
    console.log(elemento);
});

//   Metodo Map: devuelve un array transformado a partir del array de entrada
const doble = numeros.map(function (elemento) {
  return elemento * 2;
});
console.log(doble);


//   Metodo Reduce: devuelve un unico elemento (int, string)
/* Este método corre una función en cada elemento del array, 
para comenzar a sumar los costos de cada elemento. */
var costoTotal = articulos.reduce(function (totalActual, articulo) {
  return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual
console.log(costoTotal);

//   Metodo Filter
/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500; /* Menor o igual a 100 */
});
console.log(articulosFiltrados);

//   Metodo Find
/* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */
var encuentraArticulos = articulos.find(function (articulo) {
  return articulo.nombre === "laptop";
});
console.log(encuentraArticulos);

//   Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});
console.log(articulosBaratos);

//   Metodo Every
/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */
var articulosBaratos = articulos.every(function (articulo) {
  return articulo.costo <= 700;
});
console.log(articulosBaratos);

//   Metodo Includes
var numeros = [1, 2, 3, 4, 5, 6];
var incluyeNumero = numeros.includes(2);
console.log(incluyeNumero);

// === Metodos para mutar arrays ===

// .push();
var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
console.log(frutas);
frutas[frutas.length] = "Uvas"; //equivalent to push

// .pop();
var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final
console.log(frutas);

// unshift()
var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio
console.log(frutas);

// shift()
var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();
var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);

//joins()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

//delete
delete fruits[0]; // Changes the first element in fruits to undefined

//splice
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
var banana = fruits.splice(0, 1); // Removes the first element from fruits and return it
///// for New arrays

//concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
// Concatenate (join) myGirls and myBoys
const myChildren = myGirls.concat(myBoys);
// triple concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

//slice
// The slice() method creates a new array. It does not remove any elements from the source array.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

// diferencia imperativa vs declarativa

// imperativa
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

//declarativa
array.forEach((element) => {
  console.log(element);
});
