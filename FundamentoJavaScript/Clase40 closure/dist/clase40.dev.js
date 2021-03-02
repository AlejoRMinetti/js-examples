"use strict";

// similar a @decorador en Python
function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log("hola ".concat(nombre, " ").concat(finalDeFrase));
  };
}

var saludoArgentino = crearSaludo('che');
var saludoMexicano = crearSaludo('guey');
var saludoColombiano = crearSaludo('amigo');
saludoArgentino('Jesus'); // usa la funcion del return de crear saludo, recordando sus parametros de creacion

saludoMexicano('Jesus');
saludoColombiano('Jesus');