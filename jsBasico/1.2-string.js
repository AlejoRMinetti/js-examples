//////////// String Methods

str = 'AppDividend';
console.log('Original String: ', str); //Original String:  AppDividend

// replace
newStr = str.replace(/D/g, '');
console.log('After character removed: ', newStr); 
//After character removed:  Appividend

// If you are replacing a value (and not a regular expression), 
// only the first instance of the value will be replaced. 
// To replace all occurrences of a specified value, use 
// the global (g) modifier 

// replace() does not change the original string.
let str = "Mr Blue has a blue house and a blue car";
str.replace(/blue|house|car/gi, function (x) {
  return x.toUpperCase();
});
// Mr BLUE has a BLUE HOUSE and a BLUE CAR.

// slice
removeFirstChar = str.slice(1);
console.log('Removing the first character', removeFirstChar); // ppDividend
removeLastChar = str.slice(0, str.length - 1);
console.log('Removing the last character: ', removeLastChar); // AppDividen

// substr
newStr = str.substr(1, str.length);
console.log('After removing the first character:', newStr); // ppDividend

// https://www.w3schools.com/jsref/jsref_split.asp#:~:text=JavaScript%20String%20split%20%28%29%20Method%201%20Definition%20and,the%20string.%205%20Technical%20Details%206%20More%20Examples
// Split
let str = "How are you doing today?";
const myArr = str.split(" ");