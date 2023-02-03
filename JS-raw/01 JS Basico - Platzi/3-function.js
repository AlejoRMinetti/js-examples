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
// Funciones Declarativas:
function saludarEstudiante(estudiante) {
  console.log(`Hola ${estudiante}`); // template strings (Plantillas de cadena de texto)
}

function suma(a, b) {
  // está funcion recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden utilizar dentro de la función.
  var resultado = a + b;
}
suma(20, 30);

//// Funciones expresivas o anonimas:
// Expresión de función:
// Declaración
var suma = function (a, b) {
  return a + b;
};
// Invocación
var resultado = suma(2, 2);

console.log(resultado); //4

// Diferencias:
// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no.
// Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar
// la función antes de que ésta sea declarada, y con la expresión de función, no,
// tendríamos que declararla primero, y después mandarla llamar.



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

///// usando callback

function decirHolaAlUsuario(usuario) {
  return "Hola " + usuario + "!";
}

function decirAdiosAlUsuario(usuario) {
  return "Adiós " + usuario + "!";
}

function crearSaludo(usuario, cb) {
  return cb(usuario);
}

crearSaludo("Dan", decirHolaAlUsuario); // 'Hello Dan!'
crearSaludo("Dan", decirAdiosAlUsuario); // 'Goodbye Dan!'
