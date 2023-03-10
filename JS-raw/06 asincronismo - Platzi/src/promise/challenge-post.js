import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
const PROXY = "http.proxy http://proxy-cac.cnea.gov.ar:1280/"

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors', // permisos que va a tener: https://developer.mozilla.org/en-US/docs/Glossary/CORS
    credentials: 'same-origin', //no importa si no hay autentificacion
    headers: {
      'Content-Type': 'application/json' //lo que vamos a enviar
    },
    body: JSON.stringify(data) //lo enviamos como texto
  });
  return response;
}

// Requisitos para el POST: https://fakeapi.platzi.com/doc/products
const data = {
  "title": "Nuevo productillo",
  "price": 666,
  "description": "algo para probar un POST",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));