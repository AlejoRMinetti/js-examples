# Fundamentos de Node.js | Platzi

## Node (2009)

Es un entorno de ejecución de JavaScript fuera del navegador. Sin transpiladores, scraping, automatización...

Todo lo que no sea sintaxis de programación van a ser modulos. Por lo que se podría decir que está centrado en módulos así como también está orientado a eventos. Ejecuta JavaScript así que es monohilo con entradas y salidas asincronas.

## EventLoop: Asíncrona por diseño

**Event Queue:** Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

**Event Loop:** Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

**Thread Pool:** Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop verá si lo pasa a Event Queue o no.

## Monohilo: Implicaciones en diseño y seguridad.

El hecho de que sea monohilo lo hace delicado en el sentido de que puede ejecutarse algo que corte el código y detenga el programa, como la ausencia de sintaxis o una variable pendiente por definir.

Aquí se pueden ver los problemas de seguridad y los Updates en este tema. Muy interesante leerlo para entender cómo atacan y saltan el código y cómo lo resolvieron.

- [Security Issues](https://nodejs.org/en/blog/vulnerability/february-2020-security-releases/)

Así que así se presentaría una de las principales implicaciones al estar haciendo un programa en Node. Si no se manejan bien los errores y uno falla, ya no continua con los procesos posteriores por lo que debes estar pendiente de todo el código y evitar estas situaciones.

## Variables de entorno

El código no debería guardar ningún tipo de credenciales o valores destinados a cambiar. Para esto tenemos las variables de entorno.

Podemos acceder a nuestras variables a través de process. Usando algo como `process.env.NOMBRE;`

Si no tenemos ninguna variable podemos definir un mensaje por defecto.

Para ingresar las variables con PowerShell primero hay que definirlas escribiendo:

```bash
$env:NOMBRE="Carlos"
```

Fuera de PowerShell en terminales UNIX podemos simplemente declararlas de la siguiente manera

```bash
NOMBRE=Carlos
```

## Herramientas para ser más felices: Nodemon y PM2

Para ejecutar nodemon en windows

```bash
npx nodemon archivo.js

// En Linux
nodemon archivo.js
```

**Nodemon.** Demons en linux, puedes tener procesos que ves ejecutándose nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automáticamente el código.

```bash
sudo npm install -g nodemon
```

- [Nodemon](https://nodemon.io/)

**Producción**

```bash
sudo npm install -g pm2
```

**PM2** Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

- Voy a poner monitorizar el código para saber si algo se rompe.
- Me permite ver dashboards de mi código, puedo ver que está corriendo.
- Puedo ver el rendimiento de mi cpu
- Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.

[PM2](https://pm2.keymetrics.io/)

## Callbacks

**Funciones Callback** Una función callback es una función que es pasada como argumento a otra función, para ser llamada(`called back`) en otro momento. La función que recibe como argumento otras funciones es denominada función de orden superior (higher-order function), esta contiene la lógica correspondiente para ejecutar adecuadamente la función callback.

En el siguiente código

```js
setTimeout(console.log("Hello"), 1000);
```

`setTimeout` es una higher-order function y `console.log` es una callback function

## Promesas

Las promesas son una manera mas elegante y legible de realizar callbacks, creando así un código mucho más escalable y entendible.
Una promesa al final no deja de ser un callback, con la novedad de tener estados. Las promesas cuentan con 3 estados, resuelta, en progreso y fallo.

Para utilizar una promesa solo debemos de instanciar una nueva, una promesa en si es una función que recibe dos parámetros, resolve y reject, que son los dos estados de una promesa.

```js
 New Promise( (resolve, reject) => {
  codeIf(code === true)
    {resolve(correctValue)}
  else 
    {Reject(wrongValue)}});
```

Utilizamos resolve para retornar el valor deseado cuando una función se ejecute y utilizamos reject para cuando una función retorna un valor no deseado. Para poder obtener los valores que retorna una función debemos utilizar su propiedad .then, esta propiedad es una función que recibe un callback el cual tendrá como parámetro el valor retornado con resolve o reject.

Siempre que usemos una promesa además de la propiedad .then debemos invocar la propiedad .catch, la cual es un callback que recibe como parámetro el error ocurrido en caso de haber uno.

```js
myPromise(‘Parameter’).then( data => console.log(data) ).catch( err => console.log(err));
```

# Core Modules Node

💡 Para referenciar algo en la documentación de Node, usualmente nos referimos a la documentación de la API

[NodeJS API](https://nodejs.org/api/)

## Globals

En node tenemos un objeto global que contiene los métodos y propiedades básicas que podemos usar en Node; i.e (setTimeOut)

global es un equivalente de this en el navegador

En node this es un alias de global.

```js
this === global; // true
```

Algunos métodos que se incluyen en el objeto **global** son:

- **setTimeOut:** se encarga de llamar a otra función después de un periodo de tiempo
- **setInterval:** llama a otra función cada intervalo de tiempo
- **setImmediate:** equivalente a setTimeOut pero con tiempo 0.
- **clearTimeOut:** detiene un setTimeOut
- **clearInterval:** detiene un setInterval

## File system

Este provee una API para interactuar con el sistema de archivos cerca del estándar POSIX.
POSIX es el estándar para interfaces de comando y shell, las siglas las significan: “Interfaz de sistema operativo portátil” la X de POSIX es por UNIX.

El file system nos permite acceder a archivos del sistema. Leer, modificar, escribir. Es muy útil para precompiladores, para lo que requiera hacer grabados de disco o bases de datos en node.

Todo lo que hagamos con módulos por buenas prácticas son tareas asíncronas, pero tienen una version síncrona no recomendada pues podría bloquear el event loop con más facilidad.

Para ver más sobre la documentación de FileSystem:

- [FileSystem Docs](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system)

```js
// Importamos el modulo, todos los modulos globales ya los tenemos disponibles
// de manera default.

const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No he podido escribirlo", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo1.txt', console.log)
// borrar(__dirname + '/archivo1.txt', console.log);
```

## Console

Con console podemos imprimir todo tipo de valores en nuestra terminal.

- **console.log**: recibe cualquier tipo y lo muestra en el consola.
- **console.info**: es equivalente a log pero es usado para informar.
- **console.error**: es equivalente a log pero es usado para errores.
- **console.warn**: es equivalente a log pero es usado para warning.
- **console.table**: muestra una tabla a partir de un objeto.
- **console.count**: inicia un contador autoincremental.
- **console.countReset**: reinicia el contador a 0.
- **console.time**: inicia un cronometro en ms.
- **console.timeEnd**: Finaliza el cronometro.
- **console.group**: permite agrupar errores mediante identación.
- **console.groupEnd**: finaliza la agrupación.
- **console.clear**: Limpia la consola.

## Errores (try / catch)

Con Node podemos manejar los errores de una manera muy optima, pero primero debemos entender como Node maneja los errores por defecto.

Cuando sucede un error en Node, él por defecto terminara todo el proceso de nuestro código para avisar que ha ocurrido un error, esto puede ser fatal para nuestros proyectos, los errores además se notifican por hilos, es decir, que si un error sucede en el hilo principal del event loop, es decir, el evento queue, el error se avisara desde este mismo hilo, pero si un error sucede antes desde otro hilo como el hilo de las funciones asíncronas, el error se avisara desde aquel hilo sin dejar mostrar el error del hilo principal.

Nosotros podemos manejar este flujo de errores para que Node no se detenga al momento de que ocurra uno y lo podamos manejar según nuestros deseos, para esto usamos try y catch. Siendo try el bloque de código que ejecutara la función que puede o no fallar y siendo catch la función que atrapara el error y le especificaremos que hacer con él.

```js
try {
  itsBroken();
} catch (error) {
  console.log(error.message);
}
```

Si deseamos manejar errores asíncronos tenemos que encargarnos de este en su propio hilo, por ejemplo si está usando API's del navegador por fuera a través del ciclo de un event loop como un setImmediate lo que necesitamos hacer es poner el try catch dentro de el código que hará esa ejecución:

```js
functionbadfunction() {
    setImmediate(() => {
			try {
				return 5 + z
			} catch (error) {
          console.log('bad function ha fallado')
          console.error(error.message)
          console.log('continuamos...')
      }});
}

badfunction()
```

## Procesos hijo

El módulo de procesos secundarios de Node.js (**child_process**) tiene dos funciones **spawn** y **exec**, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema (como si nos encontráramos en la línea de comandos).

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

- Usa **spawn** cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
- Usa **exec** cuando quieras que el proceso hijo devuelva mensajes de estado simples.
- Usa **spawn** cuando quieras recibir datos desde que el proceso arranca.
- Usa **exec** cuando solo quieras recibir datos al final de la ejecución.

```js
// Exec
const { exec } = require("child_process");
exec("ls", (e, stdout) => {
  e ? console.log(e) : console.log(stdout);
});

// Spawn
const { spawn } = require("child_process");
const myprocess = spawn("ls");

process.stdout.on("data", (data) => console.log(data.toString()));
process.on("exit", () => console.log("process end"));
```

Un buen blog para revisar mas del tema:

[Diferencia entre spawn y exec de child_process de NodeJS - michelletorres](https://blog.michelletorres.mx/diferencia-entre-spawn-y-exec-de-child_process-de-nodejs/)

## Native Modules C++

JavaScript permite hacer uso de módulos nativos de c++. Para lograr esto debemos instalar `sudo npm i -g node-gyp`, este modulo de npm nos permite compilar módulos nativos de c++ en node.

Luego debemos tener listo nuestro archivo de código fuente en c++ junto a otro archivo .gyp, que nos ayudara hacer la compilación a JavaScript.

En este archivo .gyp le indicamos que va compilar, como se va llamar el archivo resultante y de donde va a tomar la info a convertir, todo esto lo dejamos como un json

```json
{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ "hola.cc" ]
    }
  ]
}

```

luego le decimos a node que configure este modulo, con le comando `node-gyp configure`, como resultado tendremos en un directorio nuevo donde se encontraran diferentes archivos de código nativo, para finalizar con `node-gyp build` creamos nuestro modulo y estará listo para ser usado.

## HTTP

Node nos ofrece el modulo HTTP el cual nos permite principalmente crear un servidor en nuestro computador.

En este modulo encontraremos todo lo necesario que necesitamos para crear un sistema de rutas, que responderá cada ruta, los header que podrá mandar, etc.

Uno de los métodos principales de este modulo es createServer, el cual nos permitirá abrir un puerto para crear el servidor.

[HTTP Cheat Sheet](https://cheatography.com/kstep/cheat-sheets/http-status-codes/)

[Adding routes and logic to a pure Node.js server](https://medium.com/@officialrahulmandal/adding-routes-and-logic-to-a-pure-node-js-server-9f995298d984)

Express (framework) is great to creating routes and etc.

## OS

El modulo de Node para OS me permite acceder a elementos de muy bajo nivel, y es útil en diferentes contextos.

```js
const os = require("os");

console.log(os.hostname()); //  Voy a saber el hostname de la máquina
console.log(os.networkInterfaces()); // Puedo acceder a mi interfaz de red activas en mi máquina, puedo saber  IPVX
// Recomendado console.table(os.networkInterfaces())
console.log(os.tmpdir()); //-->Me muestra los directorios temporales, temproales una imagen que voy a procesar
console.log(os.homedir()); // Me permite saber cual es el directorio raíz
console.log(os.arch()); //----> Me devuelve la arquitecura de mi OS
console.log(os.platform()); //---> Me dice en qué plataforma estoy
console.log(os.cpus()); //--->podemos acceder a la información de las cpus de mi pc.
// Recomendado console.table(os.cpus())
console.log(os.constants); //--->  Me muestran todos los errores de sistema.

//Acceder a espacios de memoria es muy útil para saber si tengo a memoria suficiente para realizar esta operación.
console.log(os.freemem()); // ---> Me dice en bytes la memoria libre que tenemos
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));
console.log(gb(os.totalmem())); // ---> Me muestra la memoria disponible del pc.

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}
```

## Process

El objeto process es una instancia de `EventEmitter`; podemos suscribirnos a el para escuchar eventos de node.

Al usar process.on el autocompletado del editor te va a dar un montón de cosas que puedes ver como funcionan en la documentación y expanden tus capacidades con este modulo.

- **UncaughtException**: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.
  ```js
  process.on('uncaughtException', (error, origen) => {
  console.log(error, origen);
  });
  ```
- **exit**: Se ejecuta cuando node detiene el `eventloop` y cierra su proceso principal.

  ```js
  process.on('exit', () => {
  console.log('Adios');
  });
  ```

- **beforeExit** → Es para enviar algo antes que pare un proceso.
- **exit** → Es para matar un proceso.
- **uncaughtException** → Permite capturar cualquier error que no fue caputurado previamente. (**No esta diseñado para remplazar el manejo de errores que debería de tener tu aplicación y debería ser tu ultimo recurso para tratar de manejar errores)**
- **uncaughtRejection** → Permite capturar cualquier error de promesas que se han rechazado.

## Módulos y paquetes externos

**npm** (Node Package Manager) es un administrador de paquetes que permiten ejecutar funciones ya realizadas y validadas y de esta manera acelerar y asegurar la calidad de nuestro proceso de desarrollo.

Podemos buscar módulos para casi todo en: [npm](https://www.npmjs.com/)

Al utilizar un paquete de npm debemos tener presente que algunos paquetes dependen de otros paquetes y esto puede llegar a ser riesgoso si alguno de los paquetes que se utilizan tiene alguna falla de seguridad y no es actualizado.

## Construyendo Módulos: Require & Import

En Node tenemos una forma de importar módulos la cual es con el método `require`, el cual es la forma por defecto de importar módulos, ya sean nuestros propios módulos como los de otras personas en nuestros proyectos JS, pero suele haber mucha confusión debido al import.

`Import` es la forma de importar módulos en ECMAScript, el cual es un estándar de JavaScript para la web, esta forma de importar en teoría Node no la acepta oficialmente, a no ser que usemos su modo de .mjs.

Pero gracias a compiladores como Babel, nosotros podremos utilizar estas normas de ECMAScript en nuestro código para cuando se ejecute se transforme en código que sea aceptable por Node.

Se recomienda en la mayoría de veces la importación con require. (Para los que llegan a este curso a mediados de 2021 o más recientemente, los imports y exports en estándar ES6 ya están 100% soportados. A continuación les comparto un ejemplo realizado de ambos modos.)

```js
//Export & Module Creation
function suma(a, b) {
  return a + b;
}
function saludar(nombre) {
  return `Hola ${nombre}`;
}
const PI = 3.14159264;

module.exports = { suma, saludar, PI };
```
```js
// Import
const { suma, saludar, PI } = require(...path_module);
suma(3, 2);
saludar("The Rock");
console.log(`Pi es un constante y su valor es: ${PI}`);
```

**ES6**

```jsx
//Export & Module Creation
function sayHello() {
  console.log("Hello from inside a function of myOwnES6Module.mjs");
}

const property1 = "Property 1 String value";
const property2 = 2;

export default { sayHello, property1, property2 };
```
```js
// Import
import myOwnES6Module from "./myOwnES6ModuleES6.mjs";

console.log(myOwnES6Module.property1);
console.log("Property 2 value (number): ", myOwnES6Module.property2);
myOwnES6Module.sayHello();
```

Para más información:

[NodeJS module exports](https://nodejs.org/dist/latest-v12.x/docs/api/modules.html#modules_module_exports)

## Módulos útiles

Estos son módulos bastante comunes de utilizar para las tareas mas recurrentes que se suelen presentar con node cosas como el manejo de fechas, imágenes o contraseñas.

- **Bcrypt**: La función de cifrado de **bcrypt** nos permite construir una plataforma de seguridad utilizando contraseñas encriptadas con Salt.
  Para windows funciona bcryptjs: ```npm i bcryptjs```, si usamos bcrypt solo no funciona.
- **Moment.js:** es una librería que nos permite solventar estos problemas e implementa un sistema de manejo de fechas mucho más cómodo.
- **Sharp:** puede convertir imágenes grandes en imágenes JPEG, PNG más pequeñas y compatibles con la web de diferentes dimensiones.

**Bcrypt** y **Sharp** necesitan Python 2.7+ para funcionar

```js
// BCrypt
const bcrypt = require("bcrypt");
const password = "NuncaParesDeAprender2020";

bcrypt.hash(password, 5, function (err, hash) {
  console.log(hash);
});
// La consola nos entregaria una contraseña distinta en cada oportunidad.

// Para evaluar si una contraseña concuerda con un hash
bcrypt.compare(password, hash, function (error, result) {
  console.log(result);
  console.log(error);
});
// Nos va a responder **true** *(en el result)* o **false** *(en el error)* dependiendo si la contraseña puede generar el hash
```
```js
// Moment
const moment = require("moment");
const ahora = moment();

// Para formatear una fecha
ahora.format("MM/DD/YYYY HH:MM A"); // 04/11/2020 20:10 PM

// Para validad una fecha
moment("2020-04-11").isValid(); // Nos dara **true** o **false** dependiendo de si la fecha es valida o no

// Para encontrar cuanto tiempo ha pasado hasta hoy
moment("2018-04-11").fromNow(); // Hace 2 años

// Para agregar o eliminar años, días o meses
moment("2020-04-11").add(1, "years"); // 2021-04-11
moment("2020-04-11").subtract(1, "years"); // 2019-04-11
```
```js
// Sharp
const sharp = require("sharp");

// La siguiente reducira una imagen de 120x120 o cualquier tamaño a 80x80 y lo guardara en una imagen mas pequeña sin eliminr la original.
sharp("imagen.png").resize(80, 80).toFile("imagen_80x80.png");
```

## Datos almacenados VS Datos en Memoria

La diferencia principal es la velocidad en la que el programa puede acceder a los datos. La memoria ram, al ser una memoria volátil es muchísimo más rápida que nuestro almacenamiento principal en la computadora. Así que al tener los datos en la memoria (RAM) estos datos pueden ser accedidos por el CPU de manera más eficaz. Entonces podemos resumir esto como

- La información en memoria esta pensada para ser escrita rápida pero reemplazada rápida.
- La información almacenada en disco puede ser almacenada durante mucho mas tiempo pero es mucho mas lento escribir y leer en ellos.

💡 Que son buffers y streams? Aparte de que un buffer es un montón de datos y un stream es un proceso donde pasan un montón de datos.

[better-understanding-of-buffer-in-node-js](https://medium.com/free-code-camp/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8)

## Buffers

Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal. Los Buffers usualmente salen de un stream

Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en **bytes** y no se especifica el tipo de dato)

En la consola, **los datos se muestran en formato hexadecimal**.

Para crear un buffer, con 4 espacios por ejemplo, podemos hacerlo con la siguiente sintaxis.

```js
let buffer = Buffer.alloc(4);
// Utilizamos Buffer. que nos da distintos métodos a los que podemos acceder
console.log(buffer);
// Output:
//<Buffer 00 00 00 00>
```

## Streams

Las **Streams** son colecciones de datos, como matrices o cadenas. La diferencia es que las transmisiones pueden no estar disponibles de una vez y no tienen que caber en la memoria. Esto hace que las transmisiones sean realmente poderosas cuando se trabaja con grandes cantidades de datos, o datos que provienen de una fuente externa o un fragmento a la vez.

```js
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);

// Another example in CodeSandbox
// https://codesandbox.io/s/node-js-forked-5qiff?file=/src/index.js

// Platzi Class Code
const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

//createReadStream me permite generar un stream de lectura
//en este caso estoy tomando un archivo de texto cualquiera como input
let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream irá recibiendo los paquetes o chunks en formato de buffer
// y en este caso los estoy parceando a utf8
// chunk es como se llama a cada paquete o fragmento de datos que iré leyendo
readableStream.setEncoding('UTF8');

//   readableStream.on('data'...) inicia una escucha de evento en la que escucharé
//   cuando reciba la información del archivo a leer
//   luego iré añadiendo los chunks a mi variable data declarada previamente
// readableStream.on('data', function (chunk) {
//     data += chunk;
// });

//   readableStream.on('end'...) escucha a cuando se termina de recibir datos del archivo
//   de texto. en ese momento hago un consol.log y muestro el total de la data
// readableStream.on('end', function() {
//     console.log(data);
// });

//   Aquí estoy escribiendo en el buffer de la salida del sistema
//   es el ejemplo mas sencillo de stream de escritura
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

// Ya vimos stream de lectura y de escritura ahora veremos la forma media en la que
// leemos la secuencia la transformamos y volvemos a escribir

// lo que se hace aquí es crear una constante que va a contener la clase Transform,
// pero… que es lo que hace Transform?.
// transforma la secuencia de entrada para que la secuencia de salida sea una diferente.
const Transform = stream.Transform;

// en esta función será donde ejecutaras la transformación. al colocar Tranform.call(this)
// estas iniciando el llamado a la tranformacion de tu secuencia datos
// y al colocar this estas diciendo que se hará dentro del método Mayus
function Mayus() {
    Transform.call(this);
}

// util.inherits(Mayus,Transform); es crear una instancia de la clase Transform
// y estableciéndolo como prototipo a la función Mayus, tambien adjuntando el EventEmmitter.
// es decir el Transform.Call(this).
// de modo que cada vez que se crea una instancia de la funcion Mayus se ejecutara el fichero.
// en pocas palabras para el que sepa PHP o JAVA . es como llamar al metodo super()
util.inherits(Mayus, Transform);

// le agrego una funcion personalizada a mayus (paquete, codificacion, callback)
Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

// aqui es donde comienzo a hacer la trnasformacion, lo anterior era
// la configuracion o codigo necesario
let mayus = new Mayus();

readableStream // entrada
    .pipe(mayus) // transformacion
    .pipe(process.stdout); //salida

    // pipe() limita el almacenamiento en el buffer para que no haya una
    // sobresaturacion a la hora se pasar la secuencia de los datos
```

Cuando un cliente solicita ese archivo grande, lo transmitimos un fragmento a la vez, lo que significa que no lo almacenamos en la memoria intermedia.

[Streams and Buffers - YouTube Video](https://www.youtube.com/watch?v=GlybFFMXXmQ)

# Tips & Tricks

## Benchmarking (console time y timeEnd)

La función **console.time(‘nombre’)** inicia un temporizador que se puede usar para rastrear cuánto tiempo dura una operación. El temporizador sera identificado por el *nombre* dado a la consola. Ese mismo nombre se utilizara cuando se llame a **console.timeEnd(_‘nombre’_)** para detener el temporizador y obtener el tiempo demorado durante el proceso.

```js
console.time("Temporizador");
for (var i = 0; i < 10000; i++) {
  // Nuestro codigo entre los temporizadores puede ser cualquier cosa.
}
console.timeEnd("Temporizador");
```

## Debugger

Node.js viene integrado con un modo de debug para poder conectarnos desde cualquier herramienta de inspección de código a nuestro código de node.js.

Podemos utilizar en la terminal el flag de `--inspect` con **nodemon**

```bash
npx nodemon --inspect http.js
```

Para poder acceder a debugger de chrome vamos a la url **_chrome://inspect/#devices_** y le dan a *inspect* en el remote target que quieres inspeccionar.

## Error First Callbacks

Un patrón que se sigue siempre en cualquier lenguaje y programa de devs es **Error First Callbacks**, esto quiere decir que siempre que tengamos un callback el primer parámetro debería ser el error.

> 😭 Esto se usa por la convención de que todo puede fallar.

Otro patrón típico es tener el callback como la última función que se pasa. Aunque depende del caso.

[Errors | Node.js v17.0.1 Documentation](https://nodejs.org/api/errors.html#errors_error_first_callbacks)

```jsx
function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + w;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

asincrona((err, dato) => {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);
    return false;

    // throw err no va a funcionar en func async porque al ser async sale del main thread
    // Por lo cual la comprobación la tenemos que realizar nosotros dentro de la func async.
  }

  console.log(`Todo ha ido bien, mi dato es ${dato}`);
});
```

# Manejar herramientas con Node

## Scraping

En esta clase usan Puppeteer para el scraping.

Web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicación.

Con Puppeteer no solo podemos leer la informacion de la pagina, tambien podemos lazar eventos de click para editar o ejecutar acciones en dicha pagina, una ves lo utilice para cargar una pagina, buscar un boton y clickearlo, para despues agarrar un texto que aparecia en pantalla la cual era una token y utilizar esta en mis request.Aparte con Puppeteer podemos crear PDFs a patir de HTML, entre otras cosas!

[Puppeteer](https://www.npmjs.com/package/puppeteer) es hecho por google, recuerdo haber visto el directo cuando lo presentron, dele un ojo a su npm, es muy util el poder saber todas las posibilidades de ese, asi tienen mas maneras de solucionar sus problemas!

[Wikipedia: Web Scraping](https://es.wikipedia.org/wiki/Web_scraping)

````jsx
const puppeteer = require("puppeteer");

(async () => {
  console.log("lanzamos navegador");
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto("https://es.wikipedia.org/wiki/Node.js");

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(titulo1);
  console.log("Cerramos navegador");
  browser.close();
  console.log("Navegardor cerrado");
})();

// Código comentado

/*
  Entendiendo web scrapping con puppeteer...
  Funciona de forma asincrona
*/
const puppeteer = require("puppeteer");

// Funcion autoejecutable
(async () => {
  console.log("Lanzar el navegador");
  // const browser = await puppeteer.launch();
  /*
    {headless: false} lo que hace es que el navegador no
    se lance en segundo plano
  */
  const browser = await puppeteer.launch({ headless: false });
  // Abrir una pagina en el navegador
  const page = await browser.newPage();
  // Ir a una pagina
  await page.goto("https://wikipedia.org/wiki/Node.js");
  /*
    Ejecutar un script, con page.evaluate,
    lo que hace es evaluar lo que le digamos dentro de la pagina y
    devolver el resultado
  */
  const titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    return h1.innerHTML;
  });
  console.log(titulo1);
  // Usamos browser.close para cerrar el navegador despues de haber extraido los datos;
  console.log("Cerrando el navegador");
  browser.close();
  console.log("Navegador cerrado");
})();
```/*
  Entendiendo web scrapping con puppeteer...
  Funciona de forma asincrona
*/
const puppeteer = require('puppeteer');

// Funcion autoejecutable
(async () => {
  console.log('Lanzar el navegador');
  // const browser = await puppeteer.launch();
  /*
    {headless: false} lo que hace es que el navegador no
    se lance en segundo plano
  */
  const browser = await puppeteer.launch({headless: false});
  // Abrir una pagina en el navegador
  const page = await browser.newPage();
  // Ir a una pagina
  await page.goto('https://wikipedia.org/wiki/Node.js');
  /*
    Ejecutar un script, con page.evaluate,
    lo que hace es evaluar lo que le digamos dentro de la pagina y
    devolver el resultado
  */
  const titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1.innerHTML;
  });
  console.log(titulo1);
  // Usamos browser.close para cerrar el navegador despues de haber extraido los datos;
  console.log('Cerrando el navegador');
  browser.close();
  console.log('Navegador cerrado');

})();```;
````

‘Scraper’ que trae los comentarios de cualquier blogpost de Platzi.

```jsx
const puppeteer = require('puppeteer');
const link = 'https://platzi.com/blog/que-es-platzi-master/';

(asyncfunctionbrowser() {
    console.log('Abrimos chromium')
const browser =await puppeteer.launch({headless:false})//lanzamos el navegador

const page =await browser.newPage()
await page.goto(link)

const commentsText =await page.evaluate(() => {
const comments = document.querySelectorAll('.CommentContent-text p')
const listOfComments = []
        comments.forEach(comment => {
            listOfComments.push(comment.innerHTML)
        })
return listOfComments
    })

    browser.close()

    console.log(commentsText)
})()

```

[Windows Puppeteer Solution](https://www.notion.so/Windows-Puppeteer-Solution-2d6faa3ff3ca4d4fabade96f1d7ba993)

## Automatización de procesos

**GulpsJS**

**Que es gulp.js?** 📖🖥💥

Es una herramienta de construcción en JavaScript construida sobre flujos de nodos . Estos flujos facilitan la conexión de operaciones de archivos a través de canalizaciones . Gulp lee el sistema de archivos y canaliza los datos disponibles de un complemento de un solo propósito a otro a través del .pipe() operador, haciendo una tarea a la vez. Los archivos originales no se ven afectados hasta que se procesan todos los complementos. Se puede configurar para modificar los archivos originales o para crear nuevos. Esto otorga la capacidad de realizar tareas complejas mediante la vinculación de sus numerosos complementos. Los usuarios también pueden escribir sus propios complementos para definir sus propias tareas. [Wikipedia](https://en.wikipedia.org/wiki/Gulp.js).

👉 [Empezando con Gulp.js](https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js)👉 [Automatiza tu flujo de trabajo con GulpJS](https://platzi.com/blog/automatizacion-gulp-js/)

[Gulp Dependency Fix Platzi](https://www.notion.so/Gulp-Dependency-Fix-Platzi-48367788e644422c918ca579a4e9bafd)

[WSL Error](https://www.notion.so/WSL-Error-a6abb17a722e4af896b5a0a033ca1bbe)

## Aplicaciones de escritorio

💨⚡ **Electron** 💥💻 (conocido anteriormente como Atom Shell1)

Es un **framework de código abierto** creado por **Cheng Zhao**, y ahora desarrollado por GitHub. Permite el desarrollo de aplicaciones gráficas de escritorio usando componentes del lado del cliente y del servidor originalmente desarrolladas para aplicaciones web: **Node.js** del lado del servidor y **Chromium** como interfaz. Electron es el framework gráfico detrás de muchos proyectos de código abierto importantes, incluyendo a Atom de GitHub y Microsoft Visual Studio Code. [Wikipedia](<https://es.wikipedia.org/wiki/Electron_(software)>)

**Aplicaciones que usan Electron:** 💪 Visual Studio Code, Atom, Slack, WhatsApp, Skype, Twich, Signal, Github desktop.

👉 [Desarrollando aplicaciones de escritorio con Electron.js](https://platzi.com/blog/aplicaciones-escritorio-electron-js/)

Para los que estén usando WSL:

WSL no admite interfaces gráficas. La solución mas simple que encontré es configurar este script que lo que hace es instalar electron pero con los archivos binarios para Windows en lugar de los de UNIX, de esta manera al ejecutar la aplicación usará la interfaz grafica de Windows

```
"scripts": {
    "test": "echo \"Error:notest specified\" && exit 1",
    "start": "electron .",
	//here
    "install-wsl": "npm install && npm uninstall electron && export npm_config_platform=win32 && npm install electron && unset npm_config_platform"
  }

```

Luego ejecutan:

```
npm run install-wsl

```

Y les debería arrancar

Fuente:

[https://github.com/electron-userland/electron-prebuilt/issues/260](https://github.com/electron-userland/electron-prebuilt/issues/260)

## Apps de escritorio

[electron JS](https://www.electronjs.org/)

[Electron Platzi blog](https://platzi.com/blog/aplicaciones-escritorio-electron-js/)

[Electron curso Platzi](https://platzi.com/cursos/electron/)

Para los que estén usando WSL:

WSL no admite interfaces gráficas. La solución mas simple que encontré es configurar este script que lo que hace es instalar electron pero con los archivos binarios para Windows en lugar de los de UNIX, de esta manera al ejecutar la aplicación usará la interfaz grafica de Windows

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron .",
	//here
    "install-wsl": "npm install && npm uninstall electron && export npm_config_platform=win32 && npm install electron && unset npm_config_platform"
  }
```

Luego ejecutan:

```bash
npm run install-wsl
```

Y les debería arrancar

Fuente:
[Github issue](https://github.com/electron-userland/electron-prebuilt/issues/260)
