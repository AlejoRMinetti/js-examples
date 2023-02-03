/*  Ejemplo del universo, un sistema solar, y un planeta.  */ 


// Scope es igual a, donde buscar por cosas (estás cosas son las variables), el Scope es el alcance que tienen las variables, depende de donde las declaremos y las mandamos llamar si tendremos acceso a ellas o no.

// Tenemos dos tipos de Scope, Scope Global y Scope Local.

// ===============

// Ejemplo de lo que es un Scope Global
{
    var a_quien = "JavaScript"
    
    function saludar(){
        console.log("Hola " + a_quien)
    }
    
    saludar() // Hola Javascript
}

{
    var miNombre = "Diego"; 
    function nombre() {
        var miNombre = "Alonso";
        console.log(miNombre);
    }
    
    nombre(); // Alonso
    console.log(miNombre); // Diego

}


// Ejemplo de lo que es un Scope Local, el Scope local
// pasa al momento de crear una funcion, esto genera un
// ámbito diferente al global, al cual no se podrá tener
// acceso desde el ámbito global
{
    function nombreyApellido() {
        var miApellido = "De Granda"; 
        return miNombre + " " + miApellido 
    }
    
    console.log(nombreyApellido());
    console.log(miNombre);
    console.log(typeof miApellido);

} 

//  Ejemplos de como puede ayuar o crear error el tema del scope. 
console.log(" Ejemplo 1, cómo con una funcion podemos cambiar el valor de la variable global");
{
    var miNombre = "Diego"
    
    function nombreLog(usuario) {
        miNombre = usuario;
        console.log(miNombre); 
    }
    
    nombreLog("Oscar");
    console.log(`Hola ${miNombre}, cómo estás?`);
    
}

console.log(" Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope");
{
    miNombre = "Diego"
    
    function nombre(usuario) {
        var miNombre = usuario;
        console.log(miNombre); 
    }
    
    nombre("Oscar");
    console.log(`Hola ${miNombre}, cómo estás?`);

}

console.log(" Ejemplo 3, cómo si creamos un scope local, y mandamos llamar la variable fuera de la funcion, nos puede crear un problema.");
{
    function nombre(usuario) {
        var miNombre = usuario;
        console.log(miNombre); 
    }
    
    nombre("Oscar");
    console.log(`Hola ${miNombre}, cómo estás?`);
}


