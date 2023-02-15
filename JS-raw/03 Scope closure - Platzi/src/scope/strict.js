'use strict';
pi = 3.1416;
console.log(pi); // ReferenceError: pi is not defined

// sin use strict, instancia var pi con hoisting
pi = 3.1416;
console.log(pi);

function myFunction() {
  return pi = 3.1416;
}

console.log(myFunction());