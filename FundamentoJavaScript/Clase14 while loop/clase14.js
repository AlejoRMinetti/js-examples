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
const ComeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
const META = jesus.peso - 3;
var dias = 0;

while (jesus.peso > META) {
    //debugger
    if (ComeMucho()) {
        aumentarDePeso(jesus);
    }
    if (realizaDeporte()) {
        Adelgazar(jesus);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} hasta que ${jesus.nombre} adelgazó 3 kg`);
console.log(`Àl final del año ${jesus.nombre} pesa ${jesus.peso.toFixed(1)} kg`);