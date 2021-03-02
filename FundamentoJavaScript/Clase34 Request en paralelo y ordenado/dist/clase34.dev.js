"use strict";

var API_URL = 'https://swapi.co/api/';
var PEOPLE_URL = 'people/:id';
var opts = {
  crossDomain: true
};

var obtenerPersonaje = function obtenerPersonaje(id) {
  return new Promise(function (resolve, reject) {
    var url = "".concat(API_URL).concat(PEOPLE_URL.replace(':id', id));
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(function () {
      return reject(id);
    });
  });
};

var onError = function onError(id) {
  return console.log("Sucedi\xF3 un error al obtener el personaje ".concat(id));
};

var ids = [1, 2, 3, 4, 5, 6, 7];
var promises = ids.map(function (id) {
  return obtenerPersonaje(id);
}); // ahora el array ids tiene todas las promesas

Promise.all(promises).then(function (data) {
  return console.log(data);
})["catch"](onError); // obteniendo todas en orden