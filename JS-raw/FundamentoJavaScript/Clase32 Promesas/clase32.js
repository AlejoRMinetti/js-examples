const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const obtenerPersonaje = (id) => {
    // promesa, debe tener funcion como argumento
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        // en vez del callback, va una funcion resolviendo la promesa
        $.get(url, opts, (data) => {
                resolve(data); // se llama cuando el get es exitoso
            })
            .fail(() => reject(id)); // si falla el get
    })
};

const onError = (id) => console.log(`Sucedió un error al obtener el personaje ${id}`);

obtenerPersonaje(1)
    .then((data) => {
        console.log(`El personaje 1 es ${data.name}`);
    })
    .catch(onError);