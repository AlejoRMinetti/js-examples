var jesus = {
    nombre: 'Jesus',
    apellido: 'Castellanos',
    altura: 1.72
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
};

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
};

var viky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
};

var personas = [jesus, alan, martin, dario, viky, paula];

// si hace asi, no se modifica el objeto, pero se muestra en el console.log
/*const pasarAlturaACms = (persona) => {
    persona.altura *= 100;
    return persona
}*/

/*const pasarAlturaACms = (persona) => {
    //persona.altura = 100*persona.altura;
    //persona.altura *= 100;
    return {
        ...persona,
        altura: persona.altura *100
    };
}*/

const pasarAlturaACms = (persona) => ({...persona, altura: persona.altura * 100 });
var personasCms = personas.map(pasarAlturaACms);
console.log(personasCms);