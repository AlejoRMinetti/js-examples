var jesus={
    nombre: 'Jesus',
    apellido: 'Castellanos',
    altura: 1.72,
    cantidadDeLibros: 91
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 182
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 91
};

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 132
};

var viky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
};

var personas = [jesus, alan, martin, dario, viky, paula];

/*const pasarAlturaACms = (persona) => {
    //persona.altura = 100*persona.altura;
    //persona.altura *= 100;
    return {
        ...persona,
        altura: persona.altura *100
    };
}*/

const pasarAlturaACms = (persona) => ({...persona, altura: persona.altura *100});
var personasCms = personas.map(pasarAlturaACms);

/*var acum = 0;

for (var i=0; i< personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros;
}*/

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;


var totalDelibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDelibros} libros`);