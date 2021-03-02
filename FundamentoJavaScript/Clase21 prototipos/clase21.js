// constructor del objeto
function Persona(nombre, apellido, edad, estatura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estatura = estatura;
    //return this; // se hace implicitamente este return
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
Persona.prototype.soyAlto = function() {
    if (this.estatura > 1.8) {
        console.log(`Soy alto`);
    } else {
        console.log(`No soy alto`);
    }
}

var jesus = new Persona('Jesus', 'Castellanos', 29, 1.80);
var erika = new Persona('Erika', 'Luna', 33, 1.85);