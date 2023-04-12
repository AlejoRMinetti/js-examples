// usando dotenv
require('dotenv').config();
// console.log(process.env)

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.MI_WEB || 'no tengo web';

console.log('Hola '+ nombre);
console.log('Mi web es '+ web);

// en linux correr como:
// NOMBRE=Carlos node archivo.js

// no anda en windows (git bash)
// mejor usar dotenv