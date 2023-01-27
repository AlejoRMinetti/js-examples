// 🧯 Replace
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);
//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);
//// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
    publicShow(val){
        console.log(val);
        this.#show("desde aca si te muestro lo privado")
    }
};
const message = new Message();
message.publicShow('Hola!');
message.show('Hola!'); // tira error

//  👽 Promise Any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));
// ejecuta la primera promesa que sea satisfactoria
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response)); // "2"

//  🦴 WeakRef(element);
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
        // evita que se lo lleve el garbish colector
    }
    {...}
}

// 🧪 Nuevos operadores lógicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //false

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse); //true

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //false