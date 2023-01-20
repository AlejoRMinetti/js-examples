// similar a @decorador en Python
function crearSaludo(finalDeFrase) {
    return function(nombre) {
        console.log(`hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('guey');
const saludoColombiano = crearSaludo('amigo');

saludoArgentino('Jesus'); // usa la funcion del return de crear saludo, recordando sus parametros de creacion
saludoMexicano('Jesus');
saludoColombiano('Jesus');