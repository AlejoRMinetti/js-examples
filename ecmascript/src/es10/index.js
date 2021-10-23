/////// flat aplanado arrays
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2)); 
//arg: profundidad del array default = 1

////// flatMap: flat + map
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

///////// trim sstring
// trimStart
let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());
// trimEnd
let hello = 'hello World       ';
console.log(hello);
console.log(hello.trimEnd());

///////// optional catch building
// anterior
try {
} catch (error) {
  error
}
// es10
try {
} catch {
  error
}

//////// fromEntries de array de clave valor a objetos
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

////// description mediante Symbol
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);