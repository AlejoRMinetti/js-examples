class Persona {
    constructor(nombre, apellido, edad, estatura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.estatura = estatura;
    }
    saludar(fn) {
        var { nombre, apellido } = this;
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            responderSaludo(nombre, apellido, false);
        } else {

        }
    }

    soyAlto() {
        return this.estatura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, edad, estatura) {
        super(nombre, apellido, edad, estatura);
    }

    // funcion con otra como argumento opcional
    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador@`);

        // si se envia un argumento valido (Str vacio no es valido)
        if (fn) {
            // usa funcion externa
            responderSaludo(this.nombre, this.apellido, true);
        } else {

        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log('ah mirá, no sabia que eras desarrollador/a');
    }
}

var jesus = new Persona('Jesus', 'Castellanos', 29, 1.72);
var erika = new Persona('Erika', 'Luna', 33, 1.65);
//var arturo = new Persona('Arturo', 'Martinez', 85, 1.89);
var arturo = new Desarrollador('Arturo', 'Martinez', 85, 1.89);

jesus.saludar(responderSaludo);
erika.saludar();
arturo.saludar(responderSaludo);