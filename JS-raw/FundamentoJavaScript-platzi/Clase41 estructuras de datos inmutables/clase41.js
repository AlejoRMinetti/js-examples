const jesus = {
    nombre: 'Jesus',
    apellido: 'Castellanos',
    edad: 29
}

// mediante esta funcion se modifica el objeto
// const cumpleayos = (persona) => persona.edad++;

// en este caso crea un nuevo objeto, sin modificar el original
const cumpleayosInmutable = (persona) => ({
    ...persona,
    edad: persona.edad + 1
});

console.log(cumpleayosInmutable(jesus))