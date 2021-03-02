function Persona(nombre, apellido, edad, estatura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estatura = estatura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
};

// si la funcion se define asi, funciona bien
/* Persona.prototype.soyAlto = function() {
    return this.estatura > 1.8;
};
 */

// al pasarla como arrow function deja de funcionar bien
Persona.prototype.soyAlto = () => this.estatura > 1.8; // vista en el inpector, nos dice que this es window
// En este caso es mejor usar la funcion anterior

var jesus = new Persona('Jesus', 'Castellanos', 29, 1.72);
var erika = new Persona('Erika', 'Luna', 33, 1.65);
var arturo = new Persona('Arturo', 'Martinez', 85, 1.89)

console.log(jesus.soyAlto());
console.log(erika.soyAlto());
console.log(arturo.soyAlto());