"use strict";

var API_URL = 'https://swapi.co/api/';
var PEOPLE_URL = 'people/:id';
var opts = {
  crossDomain: true
};

var obtenerPersonaje = function obtenerPersonaje(id) {
  // promesa, debe tener funcion como argumento
  return new Promise(function (resolve, reject) {
    var url = "".concat(API_URL).concat(PEOPLE_URL.replace(':id', id)); // en vez del callback, va una funcion resolviendo la promesa

    $.get(url, opts, function (data) {
      resolve(data); // se llama cuando el get es exitoso
    }).fail(function () {
      return reject(id);
    }); // si falla el get
  });
};

var onError = function onError(id) {
  return console.log("Sucedi\xF3 un error al obtener el personaje ".concat(id));
};

obtenerPersonaje(1).then(function (data) {
  console.log("El personaje 1 es ".concat(data.name));
})["catch"](onError);