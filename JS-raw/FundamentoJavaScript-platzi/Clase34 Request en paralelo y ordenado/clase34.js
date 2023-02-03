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

var ids = [1, 2, 3, 4, 5, 6, 7];
const promises = ids.map(id => obtenerPersonaje(id));
// ahora el array ids tiene todas las promesas

Promise
    .all(promises)
    .then(data => console.log(data))
    .catch(onError);

// obteniendo todas en orden