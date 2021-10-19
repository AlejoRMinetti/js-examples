const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];

const lista1Count = {};

lista1.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);

// entries convierte al array en un array de arrays [Key, value]
const lista1Array = Object.entries(lista1Count).sort(
  // sort cuando la func devuelve positivo, mueve hacia adelante el elementoA
  function (elementoA, elementoB) { 
    return elementoA[1] - elementoB[1];
    // mueve hacia el final el elemento mayor, segun su 2do valor del subarray
  }
);

const moda = lista1Array[lista1Array.length - 1];
// La media va a ser el ultimo elemento dado por el ordenamiento efectuado

