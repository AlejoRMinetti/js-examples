////////// ...all
const obj = {
  name: "oscar",
  age: 32,
  country: "MX",
};
let { age, ...all } = obj; //permite separar atributos del resto
console.log(age, all);

////// anidar objeto ...obj
const obj = {
  name: "Oscar",
  age: 32,
};
// une obj con lo nuevo agregado
const obj1 = {
  ...obj,
  country: "MX",
};
console.log(obj1);

/////// promise .finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};
helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo")); //es9 se ejecuta al finalizar

////// Regex: agrega agrupacion de bloques y acceso
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; // año mes dia
//construccion de la fecha a partir del Regex
const match = regexData.exec("2018-04-20"); 
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
