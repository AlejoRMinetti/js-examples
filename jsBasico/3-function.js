// Las funciones son procedimientos, un conjunto de sentencias o pasos que
// realizarán una tarea o cálculo con ciertos valores.
// Tenemos dos tipo de funciones en js, function Declaration y function Expression
// el nombre reservado de function y parametros que recibira esa function

function miFuncion() {
  // function declaration Declarativas expresión
  return 3;
}
miFuncion(); // mandamos llamar la funcion

var miFuncion = function (a, b) {
  // function Expression (también conocidas como funciones anónimas)
  return a + b;
};
miFuncion(); // mandamos llamar la variable como funcion

/* ============================= */

function saludarEstudiante(estudiante) {
  console.log(`Hola ${estudiante}`); // template strings (Plantillas de cadena de texto)
}

function suma(a, b) {
  // está funcion recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden utilizar dentro de la función.
  var resultado = a + b;
}
suma(20, 30);

// usando argumentos genericos: arguments
// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the
// arguments used when the function was called (invoked).
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

// recorrer array de nxm
for (let fila = 0; fila < array.length; fila++) {
  for (let colum = 0; colum < array[0].length; colum++) {
    array[fila][colum] += 1;
  }
}
