"use strict";

var API_URL = 'https://swapi.co/api/';
var PEOPLE_URL = 'people/:id';
var lukeurl = "".concat(API_URL).concat(PEOPLE_URL.replace(':id', 1)); // url al que se hace el request

var opts = {
  crossDomain: true
}; // se va hacer hacia otra pagina el request

var onPeopleResponse = function onPeopleResponse(data) {
  return console.log("Hola yo soy ".concat(data.name));
}; // callback que se ejecuta si el request es exitoso


$.get(lukeurl, opts, onPeopleResponse); // nos perdmite hacer los request