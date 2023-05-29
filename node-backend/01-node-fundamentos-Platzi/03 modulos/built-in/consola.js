// Console

console.log("hola")
console.info("hola")
console.warn("hola")
console.error("hola")

console.table()
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

// console.group();
// console.groupEnd();

// EJEMPLO group: agrega indentacion
console.group('despedida');
console.log('adios');
console.group();
console.log('Carlos');
console.groupEnd();
console.groupEnd();

// console.count('veces');
// console.count('veces');
// console.count('veces');
// console.countReset('veces');
// console.count('veces');