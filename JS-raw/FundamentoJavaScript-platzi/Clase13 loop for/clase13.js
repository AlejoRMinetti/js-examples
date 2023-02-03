var jesus = {
    nombre: 'Jesus',
    apellido: 'Castellanos',
    edad: 29,
    peso: 80
};

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANYO = 365;

console.log(`Al inicio del año ${jesus.nombre} pesa ${jesus.peso} kg`);

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const Adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANYO; i++) {
    var ramdom = Math.random();
    if (ramdom < 0.25) {
        //Aumenta de peso
        aumentarDePeso(jesus);
    } else if (ramdom < 0.5) {
        //Adelgazar
        Adelgazar(jesus);
    }
}

console.log(`Al final del año ${jesus.nombre} pesa ${jesus.peso.toFixed(1)} kg`);