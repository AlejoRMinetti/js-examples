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
}; // con promesas tenemos todo el codigo centrado


obtenerPersonaje(1).then(function (data) {
  console.log("El personaje 1 es ".concat(data.name));
  return obtenerPersonaje(2);
}).then(function (data) {
  console.log("El personaje 2 es ".concat(data.name));
  return obtenerPersonaje(3);
}).then(function (data) {
  console.log("El personaje 3 es ".concat(data.name));
  return obtenerPersonaje(4);
}).then(function (data) {
  console.log("El personaje 4 es ".concat(data.name));
  return obtenerPersonaje(5);
}).then(function (data) {
  console.log("El personaje 5 es ".concat(data.name));
  return obtenerPersonaje(6);
}).then(function (data) {
  console.log("El personaje 6 es ".concat(data.name));
  return obtenerPersonaje(7);
}).then(function (data) {
  console.log("El personaje 7 es ".concat(data.name));
})["catch"](onError);