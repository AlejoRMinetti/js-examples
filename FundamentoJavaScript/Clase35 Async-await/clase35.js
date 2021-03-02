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

let getPersonajes = async() => {
    var ids = [1, 2, 3, 4, 5, 6, 7];
    var promises = ids.map((id) => obtenerPersonaje(id));
    try {
        var data = await Promise.all(promises); // con await se detiene la ejecucion hasta tener todas las promesas resultas
        console.log(data)
    } catch (id) {
        onError(id);
    }
}

getPersonajes();

// no todos soportan await, Chrome lo soporta