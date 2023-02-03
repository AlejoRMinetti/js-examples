"use strict";

/* console.log("b dentro de 0 segundo")
console.log('a');
setTimeout(() => console.log('b'), 0); // ejecutar luego de cargar todo el codigo inicial
console.log('c');
 */
console.log("b dentro de 2 segundo");
console.log('a');
setTimeout(function () {
  return console.log('b');
}, 2000); // ejecutar dentro de 2 segundos

console.log('c'); // si tenemos mucho codigo pesado, luego del timeout,
// va a tardar mucho mas, ya que por mas que paso el tiempo,
// la tarea va a quedar esperando en la lista de eventos a 
// que termine de cargar el codigio ppal 

for (var i = 0; i < 1000000000000; i++) {}