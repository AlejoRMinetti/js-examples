const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const obtenerPersonaje = (id) => {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
            .get(url, opts, (data) => {
                resolve(data);
            })
            .fail(() => reject(id));
    })
};

const onError = (id) => console.log(`Sucedió un error al obtener el personaje ${id}`);

// con promesas tenemos todo el codigo centrado
obtenerPersonaje(1)
    .then(data => {
        console.log(`El personaje 1 es ${data.name}`);
        return obtenerPersonaje(2);
    })
    .then(data => {
        console.log(`El personaje 2 es ${data.name}`);
        return obtenerPersonaje(3);
    })
    .then(data => {
        console.log(`El personaje 3 es ${data.name}`);
        return obtenerPersonaje(4);
    })
    .then(data => {
        console.log(`El personaje 4 es ${data.name}`);
        return obtenerPersonaje(5);
    })
    .then(data => {
        console.log(`El personaje 5 es ${data.name}`);
        return obtenerPersonaje(6);
    })
    .then(data => {
        console.log(`El personaje 6 es ${data.name}`);
        return obtenerPersonaje(7);
    })
    .then(data => {
        console.log(`El personaje 7 es ${data.name}`);
    })
    .catch(onError);