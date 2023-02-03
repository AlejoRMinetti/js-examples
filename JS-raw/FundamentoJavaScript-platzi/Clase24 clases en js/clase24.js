class Persona {
    constructor(nombre, apellido, edad, estatura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.estatura = estatura;
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        return this.estatura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, edad, estatura) {
        super(nombre, apellido, edad, estatura);
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador@`);
    }
}

var jesus = new Persona('Jesus', 'Castellanos', 29, 1.72);
var erika = new Persona('Erika', 'Luna', 33, 1.65);
//var arturo = new Persona('Arturo', 'Martinez', 85, 1.89);
var arturo = new Desarrollador('Arturo', 'Martinez', 85, 1.89);

jesus.saludar()
arturo.saludar()

console.log(jesus.soyAlto());
console.log(arturo.soyAlto()); // ahora si funciona este metodo