function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, edad, estatura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estatura = estatura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
};

Persona.prototype.soyAlto = function() {
    return this.estatura > 1.8; //this es window ! ver en modo debug con un breakpoint en el inspector
};


function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
};

heredaDe(Desarrollador, Persona); // debe estar aca para que pise el metodo saludar de desarrollador

Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var jesus = new Persona('Jesus', 'Castellanos', 29, 1.72);
var erika = new Persona('Erika', 'Luna', 33, 1.65);
//var arturo = new Persona('Arturo', 'Martinez', 85, 1.89);
var arturo = new Desarrollador('Arturo', 'Martinez', 85, 1.89);

jesus.saludar()
arturo.saludar() // no esta saludando como desarrollador

console.log(jesus.soyAlto());
console.log(arturo.soyAlto()); // no funciona este metodo! da false