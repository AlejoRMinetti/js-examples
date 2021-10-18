// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return Number(lado1) + Number(lado2) + Number(base);
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  let input = document.getElementById("InputCuadrado");
  let value = input.value;

  let perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  let input = document.getElementById("InputCuadrado");
  let value = input.value;

  let area = areaCuadrado(value);
  alert(area);
}

// Para el circulo
function calcularPerimetroCirculo() {
  let input = document.getElementById("InputCirculo");
  let radio = input.value;

  let perimetro = perimetroCirculo(radio);
  alert(perimetro);
}
function calcularAreaCirculo() {
  let input = document.getElementById("InputCirculo");
  let radio = input.value;

  let area = areaCirculo(radio);
  alert(area);
}

// Para el triangulo
function calcularPerimetroTriangulo() {
  let inputLado1 = document.getElementById("InputTrianguloLado1");
  let lado1 = inputLado1.value;
  let inputLado2 = document.getElementById("InputTrianguloLado2");
  let lado2 = inputLado2.value;
  let inputBase = document.getElementById("InputTrianguloBase");
  let base = inputBase.value;

  let perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  let inputAltura = document.getElementById("InputTrianguloAltura");
  let altura = inputAltura.value;
  let inputBase = document.getElementById("InputTrianguloBase");
  let base = inputBase.value;

  let area = areaTriangulo(base, altura);
  alert(area);
}
