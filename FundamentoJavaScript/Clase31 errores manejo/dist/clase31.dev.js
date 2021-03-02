"use strict";

var API_URL = 'https://swapi.co/api/';
var PEOPLE_URL = 'people/:id';
var opts = {
  crossDomain: true
};

var obtenerPersonaje = function obtenerPersonaje(id, callback) {
  var url = "".concat(API_URL).concat(PEOPLE_URL.replace(':id', id)); // peticion + manejo de errores

  $.get(url, opts, callback).fail(function () {
    return console.log("Sucedi\xF3 un error. No se pudo obtener el personaje ".concat(id));
  });
}; // si ocurre un error en una, no se llama a las siguientes


obtenerPersonaje(1, function (data) {
  console.log("Hola, yo soy ".concat(data.name));
  obtenerPersonaje(2, function (data) {
    console.log("Hola, yo soy ".concat(data.name));
    obtenerPersonaje(3, function (data) {
      console.log("Hola, yo soy ".concat(data.name));
      obtenerPersonaje(4, function (data) {
        console.log("Hola, yo soy ".concat(data.name));
        obtenerPersonaje(5, function (data) {
          console.log("Hola, yo soy ".concat(data.name));
          obtenerPersonaje(6, function (data) {
            console.log("Hola, yo soy ".concat(data.name));
            obtenerPersonaje(7, function (data) {
              console.log("Hola, yo soy ".concat(data.name));
            });
          });
        });
      });
    });
  });
}); // para evitar este codigo de esta forma, se usan las promesas