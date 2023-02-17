/////////// 🔢 Big INT: permite trabajar con numeros mayores a 2^53
// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;
// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

//////////// 🤝 Promise All Settled
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));
// promesa que se resuelve despues del resultado de todas las otras promesas
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
// promise.all requiere que todas las promesas sean resolve

//////////// 🌎 Global This
console.log(window); // anda en el navegador
console.log(globalThis); //anda en todos los entonos
// navegador: window
//

//////////// 🔍 Nuevo operador lógico: null operator
const fooo = null ?? 'default string'; 
console.log(fooo); // 'default string'
const fooo2 = 'not null' ?? 'default string';
console.log(fooo2) // 'not null'
// diferencia con el || ? lo veo igual!
const fooo = null || 'default string';
console.log(fooo); // 'default string'
const fooo2 = 'not null' || 'default string';
console.log(fooo2) // 'not null'

//////////// ⛓ Optional chaining
const user = {};
console.log(user?.profile?.email);
// evita errores al acceder directo
// con ? de los previos hacemos la validacion
if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}