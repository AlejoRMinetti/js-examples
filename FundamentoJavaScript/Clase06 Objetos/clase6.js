var jesus = {
    nombre: 'Jesus',
    appellido: 'Castellanos',
    edad: 28
};

var dario = {
    nombre: 'Dario',
    appellido: 'Susnisky',
    edad :27
};

function imprimirNombreEnMayusculas({ nombre, appellido }){
    console.log(`${nombre.toUpperCase()} ${appellido}`);
}

imprimirNombreEnMayusculas(jesus);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: 'pepito'});



