var nombre = 'Sacha',
    apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

// mini reto mostrar ultima letra del apellido
console.log("ultima letra del apellido")
console.log(apellido.charAt(apellido.length - 1))

// no anda:
console.log(apellido.charAt(apellido.length))
console.log(apellido.charAt(-1))