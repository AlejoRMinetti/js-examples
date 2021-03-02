var nombre = 'jesus';
var saha = {
    nombre: 'Sacha'
};

var otraSaha = {
    nombre: 'Sacha'
};

console.log(saha === otraSaha);
// da false

var otraPersona = {
    ...saha
};

console.log(saha === otraPersona);
// da false

var TercerPersona = saha; // ambos obj estan en la misma posicion de memoria, se pasa la referencia

console.log(saha === TercerPersona);
// solo aca da true