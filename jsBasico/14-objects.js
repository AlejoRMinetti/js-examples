// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 
const person = new Object();

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto["marca"]
miAuto.annio 
miAuto.modelo

// agregar propiedad:
miAuto.rayones = 3;

miAuto.detallesDelAuto(); 
miAuto["detallesDelAuto"]();

// delete atributo o metodo
delete miAuto["rayones"];

// Función constructora 
function Auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

// Prototipo: agrega metodo o atributos no visibles en la clase, que seran ejecutados si
// no se encuentran previamente en la definicion del objeto
Auto.prototype.arrancar = function(){
  return "Roon! roon!"
}

var newAuto = new Auto("Tesla", "Model 3", 2021);

// Clase ES6
class UserInfo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const newUser = new UserInfo("Mehdi", 19);
///////////// Metodos
// https://www.w3schools.com/js/js_object_methods.asp


