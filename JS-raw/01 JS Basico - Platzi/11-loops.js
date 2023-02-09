// Los loops (bucles), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.

var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

for (estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}

for (estudiante in estudiantes) {
    saludarEstudiante(estudiante);
}

while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    var estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    saludarEstudiante(estudiante);
}


// do while
var i=1;
do {
    console.log(i)
    i++;
    //code block to be executed
}
while (i < 0);
console.log(i)