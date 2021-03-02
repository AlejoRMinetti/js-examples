const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const obtenerPersonaje = (id, callback) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, (data) => { console.log(`Hola, yo soy ${data.name}`); if (callback) { callback(); } });
}

// Para garantizar el orden de los callbacks:
obtenerPersonaje(1, () =>
    obtenerPersonaje(2, () =>
        obtenerPersonaje(3, () =>
            obtenerPersonaje(4, () =>
                obtenerPersonaje(5, () =>
                    obtenerPersonaje(6, () =>
                        obtenerPersonaje(7)
                    )
                )
            )
        )
    )
)

// se llama dentro del callback de uno el callback siguiente