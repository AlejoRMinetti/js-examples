"use strict";

var nombre = 'Jesus',
    apellido = 'Castellanos',
    edad = 29;
console.log('Hola ' + nombre + ' ' + apellido + ' Tienes ' + edad + ' años');
var nombre = 'Sacha';
var apellido = 'Lifszyc';

function pasarAMayusculas(nombre) {
  return nombre.toUpperCase();
}

console.log(pasarAMayusculas(nombre + ' ' + apellido));
console.log(pasarAMayusculas('Lucía'));
console.log(pasarAMayusculas(''));