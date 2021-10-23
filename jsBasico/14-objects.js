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

// borrar propiedad
delete miAuto.rayones;
/// metodos de objetos
//returns a boolean indicating whether object has a property myProp
object.hasOwnProperty('myProp')
// delete atributo o metodo
delete miAuto["rayones"];

// Función constructora 
function Auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio || 1990; //si no se define annio, va por defecto 1990 (default operator)
}
// defualt operator, devuelve el de la derecha si el de la izq es false, sino el de la izq

//creacion de metodo prototipo (no se ve en el objeto pero se puede usar)


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


// short circuit: evitar que caiga en un error usando && 
objectoAusente && objectoAusente.marca
// undefine, devuelve el de la izq si ambos son false, si ambos true: el de la derecha

////////// Prototipos

//todos los objetos tiene un prototipo (similar a herencia) del cual provienen
miAuto.__proto__

// los objetos buscan los metodos o atributos primero en el objeto y luego en los proto

//////////////// Loops para objetos

// https://www.delftstack.com/howto/javascript/loop-through-object-javascript/#:~:text=for-in%20Loop%20to%20Loop%20Through%20JavaScript%20Object%20The,loop%20through%20the%20JavaScript%20object%20is%20as%20follows.
var Cities = {City1:"Tokyo",City2:"Paris",City3:"Dubai",City3:"Rome",City4:"London"}

// for-in
for(var city in Cities)
{
    console.log(city,": ",Cities[city]);
}

//for-of
for(var city of Object.getOwnPropertyNames(Cities))
{
    const CityName = Cities[city];
    console.log(city,":",CityName);
}

// for-of alternative
for(var [city,CityName] of Object.entries(Cities))
{
    console.log(city,":",CityName);
}
// ver mas alnativas en link

// forEach object
Object.keys.forEach(city => {console.log(city,":",Cities[city])})