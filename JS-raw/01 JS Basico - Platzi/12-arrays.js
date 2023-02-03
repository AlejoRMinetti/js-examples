// https://www.w3schools.com/js/js_arrays.asp
// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]); // Los arrays iician en "0"

//to String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// loop en array de 2 niveles (snippet: marrLoop)
for (let fila = 0; fila < array.length; fila++) {
  if (array[fila].length) {
    for (let colum = 0; colum < array[0].length; colum++) {
      array[fila][colum] += 1;
    }
  } else {
    array[fila] += 1;
  }
}

