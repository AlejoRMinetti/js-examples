"use strict";

var jesus = {
  nombre: 'Jesus',
  apellido: 'Castellanos',
  edad: 29,
  peso: 80
};
var INCREMENTO_PESO = 0.2;
var DIAS_DEL_ANYO = 365;
console.log("Al inicio del a\xF1o ".concat(jesus.nombre, " pesa ").concat(jesus.peso, " kg"));

var aumentarDePeso = function aumentarDePeso(persona) {
  return persona.peso += INCREMENTO_PESO;
};

var Adelgazar = function Adelgazar(persona) {
  return persona.peso -= INCREMENTO_PESO;
};

var ComeMucho = function ComeMucho() {
  return Math.random() < 0.3;
};

var realizaDeporte = function realizaDeporte() {
  return Math.random() < 0.4;
};

var META = jesus.peso - 3;
var dias = 0;

while (jesus.peso > META) {
  //debugger
  if (ComeMucho()) {
    aumentarDePeso(jesus);
  }

  if (realizaDeporte()) {
    Adelgazar(jesus);
  }

  dias += 1;
}

console.log("Pasaron ".concat(dias, " hasta que ").concat(jesus.nombre, " adelgaz\xF3 3 kg"));
console.log("\xC0l final del a\xF1o ".concat(jesus.nombre, " pesa ").concat(jesus.peso.toFixed(1), " kg"));