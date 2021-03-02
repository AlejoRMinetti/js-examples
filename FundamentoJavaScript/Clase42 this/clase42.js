const jesus = {
    nombre: 'Jesus',
    apellido: 'Castellanos',
    edad: 29
}

const yesika = {
    nombre: 'Yesika',
    apellido: 'Cortés',
    edad: 29
}

// si se usa directo, debe usarse como Window.saludar()
function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

// atar la funcion a los objetos definidos
// const saludarAJesus = saludar.bind(jesus);
// const saludarAyesika = saludar.bind(yesika);

// uso de bind con parametros de la funcion
// setTimeout(saludar.bind(jesus, 'Hola che'), 1000);

// ejecutan la funcion en el momento y aplica un bind implicito
// saludar.call(jesus, 'Hola che');

// call pero con array con los parametros de la funcion
saludar.apply(jesus, ['Hola che'])