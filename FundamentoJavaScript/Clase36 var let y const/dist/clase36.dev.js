"use strict";

var jesus = {
  nombre: 'Jesus',
  apellido: 'Castellanos',
  edad: 28
};

function esMayorDeEdad(persona) {
  var mensaje;

  if (persona.edad >= 18) {
    mensaje = 'Es mayor de edad';
  } else {
    mensaje = 'Es menor de edad';
  }

  console.log(mensaje);
}

esMayorDeEdad(jesus); // si usame for con var va a estar disponible luego del for, por eso mejor usar siempre let