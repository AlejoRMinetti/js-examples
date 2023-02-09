var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "laptop", costo: 20000 },
  { nombre: "teclado", costo: 500 },
  { nombre: "audifonos", costo: 1700 },
];

//   Metodo forEach: recorre sin dar un return
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

//   Metodo Reduce: devuelve un unico elemento (int, string)
/* Este método corre una función en cada elemento del array, 
para comenzar a sumar los costos de cada elemento. */
var costoTotal = articulos.reduce(function (totalActual, articulo) {
  return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual
console.log(costoTotal);

//   Metodo Filter
/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500; /* Menor o igual a 100 */
});
console.log(articulosFiltrados);

//   Metodo Find
/* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */
var encuentraArticulos = articulos.find(function (articulo) {
  return articulo.nombre === "laptop";
});
console.log(encuentraArticulos);

//   Metodo Some
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "laptop", costo: 20000 },
    { nombre: "teclado", costo: 500 },
    { nombre: "audifonos", costo: 1700 },
  ];
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});
console.log(articulosBaratos);
var idDelBarato;
var articulosBaratos = articulos.some(function (articulo, id) {
    if (articulo.costo <= 700){
        idDelBarato = id;
        return true;
    }
  });
if(articulosBaratos){
    console.log(`y cuesta ${articulos[idDelBarato].costo}`);
}

//   Metodo Every
/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */
var articulosBaratos = articulos.every(function (articulo) {
  return articulo.costo <= 700;
});
console.log(articulosBaratos);


// loops
// in vs of
for (articulo in articulos){
  console.log(articulo);
}
for (articulo of articulos){
  console.log(articulo);
}