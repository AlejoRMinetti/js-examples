// botones
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
// numero
const segs = document.getElementById("number");
const nivel = document.getElementById("Level");
const MAX_NIVEL = 3;
var times;
class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia(); // generamos array random
        setTimeout(this.siguienteNivel, 500);
    }
    inicializar() {
        // ponemos aca los binds para referir a this como al objeto
        this.siguienteNivel = this.siguienteNivel.bind(this); // para atarla al juego y no al boton o window
        this.elegirColor = this.elegirColor.bind(this);
        this.toggleBtnEmpezar(); // escondemos el boton de empezar
        this.stopTimer();
        this.timer();
        this.level = 1;
        this.colores = { // para usar los botones, con js te ahorras el celeste: celeste
            celeste,
            violeta,
            naranja,
            verde
        };

    }
    generarSecuencia() {
        // .fill(0) : todos los elementos en 0
        // luego .map con los elementos ya definidos en 0
        // Math.random() va entre 0 y 1. *4 aplicando floor, tenemos 0-3
        this.secuencia = new Array(MAX_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel() {
        this.subnivel = 0;
        this.iluminarSecuencia(); //va a iluminar segun el array generado y el nivel
        // en la segunda ejecucion, cuando apretamos el boton, tira error, ya que this es Window !
        this.agregarEventosClick();
    }

    transformarNumeroAColor(numero) {
        switch (numero) {
            case 0:
                console.log(`celeste`);
                return 'celeste';
            case 1:
                console.log(`violeta`);
                return 'violeta';
            case 2:
                console.log(`naranja`);
                return 'naranja';
            case 3:
                console.log(`verde`);
                return 'verde';
        }
    }

    transformarColorAnumero(color) {
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

    iluminarSecuencia() {
        for (let i = 0; i < this.level; i++) { // ver diferencia entre let y var. Usar siempre let para ciclos
            // si usamos var en i y color, aparece un bug: siempre se pisa el mismo color
            const color = this.transformarNumeroAColor(this.secuencia[i]); // const es mejor ya que no se va a reasignar 
            // enlistar con diferentes tiempos para iluminar todas en forma secuencial
            setTimeout(() => { this.iluminarColor(color) }, ((1000 - ((this.level - 1) / MAX_NIVEL * 900))) * (i + 1)); // usa arrow func tipo lamda
        }
        nivel.innerHTML = this.level; //lo agregue para mostrar nivel actual
        console.log("tiempo iluminados: " + (1000 - ((this.level - 1) / MAX_NIVEL * 900)))
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light'); // le agrega la clase light al em identificado por su id
        setTimeout(() => this.apagarColor(color), 350); // se prendio, se apagara en 350ms
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light');
    }

    agregarEventosClick() {
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
    }

    eliminarEventosClick() {
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
    }

    elegirColor(ev) {
        // este atributo se agrega con el atributo data-color del div (boton)
        const nombreColor = ev.target.dataset.color; // ver estos atributos de ev
        const numeroColor = this.transformarColorAnumero(nombreColor);
        this.iluminarColor(nombreColor);
        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel++;
            if (this.subnivel === this.level) {
                this.level++;
                this.eliminarEventosClick();
                if (this.level === (MAX_NIVEL + 1)) {
                    this.ganoElJuego();
                } else {
                    setTimeout(this.siguienteNivel(), 1000);
                }
            }
        } else {
            this.perdioElJuego();
        }

        // para evitar que this no sea el div, hay que usar .bind(this):
        //console.log(this) // vemos que this es el boton apretado en vez del objeto juego
        //console.log(`${nombreColor} ${numeroColor}`);
    }

    ganoElJuego() {
        swal('Platzi', 'Ganaste! ganaste el juego!', 'success')
            .then(this.inicializar()); //es un promise
        // .then(this.inicializar); //si se usa asi requiere agregar el bind

    }

    perdioElJuego() {
        this.stopTimer();
        swal('Platzi', 'Lo lamentamos, perdiste :(', 'error')
            .then(() => {
                this.eliminarEventosClick();
                this.inicializar();
            })
    }
    toggleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide');
        } else {
            btnEmpezar.classList.add('hide');
        }


    }
    timer() {
        var n = 0;
        times = window.setInterval(function() {
            segs.innerHTML = n + 's';
            n++;
        }, 1000);
    }
    stopTimer() {
        window.clearInterval(times);
    }
}

// al hacer click boton empezar se llama a empezarJuego
const empezarJuego = () => window.juego = new Juego();