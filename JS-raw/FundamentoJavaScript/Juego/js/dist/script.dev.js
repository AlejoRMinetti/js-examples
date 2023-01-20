"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// botones
var celeste = document.getElementById('celeste');
var violeta = document.getElementById('violeta');
var naranja = document.getElementById('naranja');
var verde = document.getElementById('verde');
var btnEmpezar = document.getElementById('btnEmpezar'); // numero

var segs = document.getElementById("number");
var nivel = document.getElementById("Level");
var MAX_NIVEL = 3;
var times;

var Juego =
/*#__PURE__*/
function () {
  function Juego() {
    _classCallCheck(this, Juego);

    this.inicializar();
    this.generarSecuencia(); // generamos array random

    setTimeout(this.siguienteNivel, 500);
  }

  _createClass(Juego, [{
    key: "inicializar",
    value: function inicializar() {
      // ponemos aca los binds para referir a this como al objeto
      this.siguienteNivel = this.siguienteNivel.bind(this); // para atarla al juego y no al boton o window

      this.elegirColor = this.elegirColor.bind(this);
      this.toggleBtnEmpezar(); // escondemos el boton de empezar

      this.stopTimer();
      this.timer();
      this.level = 1;
      this.colores = {
        // para usar los botones, con js te ahorras el celeste: celeste
        celeste: celeste,
        violeta: violeta,
        naranja: naranja,
        verde: verde
      };
    }
  }, {
    key: "generarSecuencia",
    value: function generarSecuencia() {
      // .fill(0) : todos los elementos en 0
      // luego .map con los elementos ya definidos en 0
      // Math.random() va entre 0 y 1. *4 aplicando floor, tenemos 0-3
      this.secuencia = new Array(MAX_NIVEL).fill(0).map(function (n) {
        return Math.floor(Math.random() * 4);
      });
    }
  }, {
    key: "siguienteNivel",
    value: function siguienteNivel() {
      this.subnivel = 0;
      this.iluminarSecuencia(); //va a iluminar segun el array generado y el nivel
      // en la segunda ejecucion, cuando apretamos el boton, tira error, ya que this es Window !

      this.agregarEventosClick();
    }
  }, {
    key: "transformarNumeroAColor",
    value: function transformarNumeroAColor(numero) {
      switch (numero) {
        case 0:
          console.log("celeste");
          return 'celeste';

        case 1:
          console.log("violeta");
          return 'violeta';

        case 2:
          console.log("naranja");
          return 'naranja';

        case 3:
          console.log("verde");
          return 'verde';
      }
    }
  }, {
    key: "transformarColorAnumero",
    value: function transformarColorAnumero(color) {
      switch (color) {
        case 'celeste':
          return 0;

        case 'violeta':
          return 1;

        case 'naranja':
          return 2;

        case 'verde':
          return 3;
      }
    }
  }, {
    key: "iluminarSecuencia",
    value: function iluminarSecuencia() {
      var _this = this;

      var _loop = function _loop(i) {
        // ver diferencia entre let y var. Usar siempre let para ciclos
        // si usamos var en i y color, aparece un bug: siempre se pisa el mismo color
        var color = _this.transformarNumeroAColor(_this.secuencia[i]); // const es mejor ya que no se va a reasignar 
        // enlistar con diferentes tiempos para iluminar todas en forma secuencial


        setTimeout(function () {
          _this.iluminarColor(color);
        }, (1000 - (_this.level - 1) / MAX_NIVEL * 900) * (i + 1)); // usa arrow func tipo lamda
      };

      for (var i = 0; i < this.level; i++) {
        _loop(i);
      }

      nivel.innerHTML = this.level; //lo agregue para mostrar nivel actual

      console.log("tiempo iluminados: " + (1000 - (this.level - 1) / MAX_NIVEL * 900));
    }
  }, {
    key: "iluminarColor",
    value: function iluminarColor(color) {
      var _this2 = this;

      this.colores[color].classList.add('light'); // le agrega la clase light al em identificado por su id

      setTimeout(function () {
        return _this2.apagarColor(color);
      }, 350); // se prendio, se apagara en 350ms
    }
  }, {
    key: "apagarColor",
    value: function apagarColor(color) {
      this.colores[color].classList.remove('light');
    }
  }, {
    key: "agregarEventosClick",
    value: function agregarEventosClick() {
      this.colores.celeste.addEventListener('click', this.elegirColor);
      this.colores.violeta.addEventListener('click', this.elegirColor);
      this.colores.naranja.addEventListener('click', this.elegirColor);
      this.colores.verde.addEventListener('click', this.elegirColor);
    }
  }, {
    key: "eliminarEventosClick",
    value: function eliminarEventosClick() {
      this.colores.celeste.removeEventListener('click', this.elegirColor);
      this.colores.violeta.removeEventListener('click', this.elegirColor);
      this.colores.naranja.removeEventListener('click', this.elegirColor);
      this.colores.verde.removeEventListener('click', this.elegirColor);
    }
  }, {
    key: "elegirColor",
    value: function elegirColor(ev) {
      // este atributo se agrega con el atributo data-color del div (boton)
      var nombreColor = ev.target.dataset.color; // ver estos atributos de ev

      var numeroColor = this.transformarColorAnumero(nombreColor);
      this.iluminarColor(nombreColor);

      if (numeroColor === this.secuencia[this.subnivel]) {
        this.subnivel++;

        if (this.subnivel === this.level) {
          this.level++;
          this.eliminarEventosClick();

          if (this.level === MAX_NIVEL + 1) {
            this.ganoElJuego();
          } else {
            setTimeout(this.siguienteNivel(), 1000);
          }
        }
      } else {
        this.perdioElJuego();
      } // para evitar que this no sea el div, hay que usar .bind(this):
      //console.log(this) // vemos que this es el boton apretado en vez del objeto juego
      //console.log(`${nombreColor} ${numeroColor}`);

    }
  }, {
    key: "ganoElJuego",
    value: function ganoElJuego() {
      swal('Platzi', 'Ganaste! ganaste el juego!', 'success').then(this.inicializar()); //es un promise
      // .then(this.inicializar); //si se usa asi requiere agregar el bind
    }
  }, {
    key: "perdioElJuego",
    value: function perdioElJuego() {
      var _this3 = this;

      this.stopTimer();
      swal('Platzi', 'Lo lamentamos, perdiste :(', 'error').then(function () {
        _this3.eliminarEventosClick();

        _this3.inicializar();
      });
    }
  }, {
    key: "toggleBtnEmpezar",
    value: function toggleBtnEmpezar() {
      if (btnEmpezar.classList.contains('hide')) {
        btnEmpezar.classList.remove('hide');
      } else {
        btnEmpezar.classList.add('hide');
      }
    }
  }, {
    key: "timer",
    value: function timer() {
      var n = 0;
      times = window.setInterval(function () {
        segs.innerHTML = n + 's';
        n++;
      }, 1000);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      window.clearInterval(times);
    }
  }]);

  return Juego;
}(); // al hacer click boton empezar se llama a empezarJuego


var empezarJuego = function empezarJuego() {
  return window.juego = new Juego();
};