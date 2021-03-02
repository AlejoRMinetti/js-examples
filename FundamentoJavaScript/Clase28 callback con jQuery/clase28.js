const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`; // url al que se hace el request
const opts = { crossDomain: true }; // se va hacer hacia otra pagina el request
const onPeopleResponse = (data) => console.log(`Hola yo soy ${data.name}`); // callback que se ejecuta si el request es exitoso

$.get(lukeurl, opts, onPeopleResponse); // nos perdmite hacer los request