"use strict";

function factorial(n) {
  if (!this.cache) {
    //crear cache si no existe
    this.cache = {};
  } else if (this.cache[n]) {
    return this.cache[n];
  }

  if (n > 1) {
    this.cache[n] = n * factorial(n - 1);
    return this.cache[n];
  } else if (n === 1) {
    // caso base
    return 1;
  }
}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(10));
console.log(factorial(20));
console.log(factorial(50));
console.log(factorial(100));
console.log(factorial(200));