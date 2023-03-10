// ejemplo basico de promesa
const promise = new Promise(function (resolve, reject) {
  resolve('hey!')
});

const cows = 15;
// aplicado a una logica
const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is no cows on the farm");
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => console.log('Finally'));