import fetch from "node-fetch"; //npm i node-fetch
const API = "https://api.escuelajs.co/api/v1";
const PROXY = "http://proxy-cac.cnea.gov.ar:1280";

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products);
//   })
//   .then(() => {
//     console.log('hola')
//   })
//   .catch(error => console.log(error));

// fetchData(`${API}/products`)
fetchData(`${PROXY}/${API}/products`) // usando un proxy
  .then((response) => {
    console.log(response.headers.get('content-type'));
    // response.json();
    return response.text(); // Get the response text
  })
  .then(text => {
    console.log(text); // Log the text
    return JSON.parse(text); // Parse it as JSON
  })
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    // le asigno el nombre que yo quiero a la rta
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));

// intentaod usar poroxy: Unexpected token < in JSON at position 0
// at JSON.parse (<anonymous>)
// at Response.json
// at process.processTicksAndRejections

// error usando proxy: FetchError: request to https://api.escuelajs.co/api/v1/products
// failed, reason: connect ETIMEDOUT
