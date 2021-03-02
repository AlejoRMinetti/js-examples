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

console.log("-------------- Usand for loop --------------------")
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} m`);
}

console.log("-------------- Usand foreach Arrow func --------------------")
personas.forEach(persona => {
    console.log(`${persona.nombre} mide ${persona.altura} m`);
});

console.log("-------------- Usand foreach con mas parametros--------------------")
personas.forEach(myFunction)

function myFunction(persona, index, arr) {
    console.log(`index: ${index}: ${persona.nombre} mide ${persona.altura} m`);
}