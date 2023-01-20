Number 
Boolean
String
undefined
null
Object
Symbol

// typeof es un tipo de operador unitario "Unary operator" que trabaja con 1 operando (variable)
var nombre; 
console.log(typeof 30) //"number"
console.log(typeof true) //"boolean"
console.log(typeof "Diego") //"string"
console.log(typeof nombre) //"undefined"
console.log(typeof null) // "object"
console.log(typeof {}) // "object"
console.log(typeof []) // "object"
 

//ver tipo de dato:
typeof "hola"

// conversion de datos (coercion)
String(10)
Number("23")
parseInt("12.20")
parseFloat("12")
// al hacer operaciones puede suceder coercion implicita: 4 + "7" -> "47" o 2 * "3" -> 6
// si lo forzamos mediante conversion con estos metodos: es explicita

// int to string. base=10 decimal. base = 2 binario
number.toString(base)

