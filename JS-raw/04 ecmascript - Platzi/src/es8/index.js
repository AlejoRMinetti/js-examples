///////////// entries
const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

/////////////// values
const values = Object.values(data);
console.log(values)
console.log(values.length)

////////// sintring padEnd y padStart
const string = 'hello';
console.log(string.padStart(9, 'hi'));
console.log(string.padEnd(12, ' --'))
console.log('food'.padEnd(12, '  -----'))
// se evita error al dejar la ,
const obj = {
  name: 'oscar',
}

// async await
const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
///////////// usando promise en async await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};
helloAsync();
// async await: de forma correcta con try catch
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction(); // probar error con (false) en la promesa