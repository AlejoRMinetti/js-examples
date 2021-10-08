// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// borrar propiedad
delete miAuto.rayones;

/// metodos de objetos

//returns a boolean indicating whether object has a property myProp
object.hasOwnProperty('myProp')


// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio || 1990; //si no se define annio, va por defecto 1990 (default operator)
}
// defualt operator, devuelve el de la derecha si el de la izq es false, sino el de la izq

//creacion de metodo prototipo (no se ve en el objeto pero se puede usar)


var newAuto = new auto("Tesla", "Model 3", 2020);

// short circuit: evitar que caiga en un error usando && 
objectoAusente && objectoAusente.marca
// undefine, devuelve el de la izq si ambos son false, si ambos true: el de la derecha

////////// Prototipos

//todos los objetos tiene un prototipo (similar a herencia) del cual provienen
miAuto.__proto__

// los objetos buscan los metodos o atributos primero en el objeto y luego en los proto