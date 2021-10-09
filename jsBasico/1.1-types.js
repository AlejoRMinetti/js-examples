Number 
Boolean
String
undefined
null
Object
Symbol

// typeof es un tipo de operador unitario "Unary operator" que trabaja con 1 operando (variable)

var nombre; 

typeof 30 
typeof true
typeof "Diego" 
typeof nombre 
typeof null
typeof {}
typeof []

//ver tipo de dato:
typeof "hola"

// conversion de datos (coercion)
String(10)
Number("23")
// al hacer operaciones puede suceder coercion implicita: 4 + "7" -> "47" o 2 * "3" -> 6
// si lo forzamos mediante conversion con estos metodos: es explicita

// int to string. base=10 decimal. base = 2 binario
number.toString(base)