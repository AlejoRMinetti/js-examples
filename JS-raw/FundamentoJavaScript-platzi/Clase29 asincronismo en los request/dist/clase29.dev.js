"use strict";

var API_URL = 'https://swapi.co/api/';
var PEOPLE_URL = 'people/:id';
var opts = {
  crossDomain: true
};

var onPeopleResponse = function onPeopleResponse(data) {
  return console.log("Hola, yo soy ".concat(data.name));
};

function obtenerPersonaje(id) {
  var url = "".concat(API_URL).concat(PEOPLE_URL.replace(':id', id));
  $.get(url, opts, onPeopleResponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4); // se recibien en diferente orden al puesto