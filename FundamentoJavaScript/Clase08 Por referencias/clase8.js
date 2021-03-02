var jesus = {
    nombre: 'Jesus',
    apellido: 'Castellanos',
    edad: 28
};

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
};

function imprimirNombreEnMayusculas(persona, apellido, edad) {
    // var nombre = persona.nombre;
    // var apellido = persona.nombre;
    var { nombre, apellido, edad } = persona;
    console.log(`Hola me llamo ${nombre.toUpperCase()} ${apellido} y tengo ${edad} años`);
}

imprimirNombreEnMayusculas(jesus);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre: 'pepito', apellido: 'Perez', edad: 29 });

// para poder devolver el objeto modificado
function cumpleanios(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    };
}

cumpleanios(jesus);