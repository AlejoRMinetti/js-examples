"use strict";

var jesus = {
  nombre: 'Jesus',
  apellido: 'Castellanos',
  edad: 29
};
var yesika = {
  nombre: 'Yesika',
  apellido: 'Cortés',
  edad: 29
}; // si se usa directo, debe usarse como Window.saludar()

function saludar() {
  var saludo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hola';
  console.log("".concat(saludo, ", mi nombre es ").concat(this.nombre));
} // atar la funcion a los objetos definidos
// const saludarAJesus = saludar.bind(jesus);
// const saludarAyesika = saludar.bind(yesika);
// uso de bind con parametros de la funcion
// setTimeout(saludar.bind(jesus, 'Hola che'), 1000);
// ejecutan la funcion en el momento y aplica un bind implicito
// saludar.call(jesus, 'Hola che');
// call pero con array con los parametros de la funcion


saludar.apply(jesus, ['Hola che']);