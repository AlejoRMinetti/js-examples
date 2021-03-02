const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const obtenerPersonaje = (id, callback) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    // peticion + manejo de errores
    $.get(url, opts, callback).fail(() => console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`));
}

// si ocurre un error en una, no se llama a las siguientes
obtenerPersonaje(1, (data) => {
    console.log(`Hola, yo soy ${data.name}`);
    obtenerPersonaje(2, (data) => {
        console.log(`Hola, yo soy ${data.name}`);
        obtenerPersonaje(3, (data) => {
            console.log(`Hola, yo soy ${data.name}`);
            obtenerPersonaje(4, (data) => {
                console.log(`Hola, yo soy ${data.name}`);
                obtenerPersonaje(5, (data) => {
                    console.log(`Hola, yo soy ${data.name}`);
                    obtenerPersonaje(6, (data) => {
                        console.log(`Hola, yo soy ${data.name}`);
                        obtenerPersonaje(7, (data) => {
                            console.log(`Hola, yo soy ${data.name}`);
                        });
                    })
                })
            })
        })
    })
});

// para evitar este codigo de esta forma, se usan las promesas