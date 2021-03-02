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

var getPersonajes = function getPersonajes() {
  var ids, promises, data;
  return regeneratorRuntime.async(function getPersonajes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ids = [1, 2, 3, 4, 5, 6, 7];
          promises = ids.map(function (id) {
            return obtenerPersonaje(id);
          });
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(Promise.all(promises));

        case 5:
          data = _context.sent;
          // con await se detiene la ejecucion hasta tener todas las promesas resultas
          console.log(data);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          onError(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
};

getPersonajes(); // no todos soportan await, Chrome lo soporta