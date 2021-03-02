"use strict";

var API_URL = 'https://swapi.co/api/';
var PEOPLE_URL = 'people/:id';
var opts = {
  crossDomain: true
};

var obtenerPersonaje = function obtenerPersonaje(id, callback) {
  var url = "".concat(API_URL).concat(PEOPLE_URL.replace(':id', id));
  $.get(url, opts, function (data) {
    console.log("Hola, yo soy ".concat(data.name));

    if (callback) {
      callback();
    }
  });
}; // Para garantizar el orden de los callbacks:


obtenerPersonaje(1, function () {
  return obtenerPersonaje(2, function () {
    return obtenerPersonaje(3, function () {
      return obtenerPersonaje(4, function () {
        return obtenerPersonaje(5, function () {
          return obtenerPersonaje(6, function () {
            return obtenerPersonaje(7);
          });
        });
      });
    });
  });
}); // se llama dentro del callback de uno el callback siguiente