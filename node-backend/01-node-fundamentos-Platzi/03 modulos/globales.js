// Ubicación de ficheros
console.log(__dirname);
console.log(__filename);

console.log(global);
// console.log(this);

// Timers
console.log(global.setInterval);
// console.log(clearInterval);
// console.log(setTimeout);
// console.log(clearTimeout);
// console.log(setInmediate);

// Modules
console.log(exports);
// console.log(module);
// console.log(require);

// Seteando variables globales
global.test = 'Ejemplo';
console.log(test);
console.log(global.test);

console.log(this.test); // no es un alias de global en este caso (git bash en windows)