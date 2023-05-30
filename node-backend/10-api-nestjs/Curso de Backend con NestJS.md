# Curso de Backend con NestJS

# Introducción a NestJS

## ¿Qué es NestJS?

NestJS es un framework sobre NodeJS con abstracciones.

Cuando creamos una aplicación Web con Node, con un framework simple como Express, a medida que nuestra aplicación escala, esta simplicidad puede volverse en nuestra contra.

NestJS provee una estructura basada en principios SOLID, TypeScript, Programación Orientada a Objetos, Programación Funcional y Programación Reactiva.

NestJS es un framework con un alto crecimiento desde que nació, debido a que nos brinda de una arquitectura basada en controladores, servicios, modelos y accesores.

## **Crea tu primer proyecto con NestJS**

Para empezar a crear proyectos con Nest primero debemos instalar su CLI, con: 

```bash
# para instalar nest
npm i -g @nestjs/cli

# para obtener la versión de nest
nest --version

# para ver los comandos disponibles
nest --help
```

- Cabe resaltar que es requisito tener Node y NPM instalados.

<aside>
💡 Nest trabaja con muy buenas prácticas. Por ejemplo, un proyecto de Nest trabaja con ESLint y Prettier. Es recomendable instalar las extensiones de estas herramientas y de EditorConfig si estas trabajando en VSCode.

</aside>

Para iniciar un nuevo proyecto:

```bash
nest new <nombre-proyecto>
```

- Escogemos cuál manejador de paquetes queremos usar y dejamos que el proyecto se cree.
- Cuando el proceso termine, el proyecto se encontrará en una carpeta con el nombre del proyecto mismo.

Una vez creado el proyecto podemos iniciarlo con `npm start`. Esto encenderá el servidor. Si accedemos a [localhost:3000](http://localhost:3000) veremos un `Hello World!` en pantalla.

<aside>
💡 Nótese que instalamos Nest como dependencia global del equipo. Para actualizarlo debemos instalarlo de nuevo, pero también podemos usar `nest update` o `nest u`

</aside>

## **Estructura de aplicaciones en NestJS**

En un proyecto de Nest tenemos los siguientes archivos y carpetas, muchos de los cuáles son típicos de una aplicación de Node:

- ***package.json***: aquí se encuentran los scripts para realizar operaciones en el proyecto y una lista con las dependencias, entre otras cosas.
- ***.eslintrc.js***: configuración de ESLint del proyecto.
- ***.prettierrc***: configuración de Prettier del proyecto.
- ***nest-cli.json***: aquí se configura como funcionarán los comandos de nest en el proyecto.
- ***README.md***: aquí se encuentran inicialmente instrucciones para usar el proyecto.
- ***tsconfig.json*** y ***tsconfig.build.json***: configuración de TypeScript del proyecto.
- *src*: aquí se encuentra el código en el que debemos trabajar la mayoría del tiempo.
- ***src/main.ts***: es el archivo principal o punto de entrada de nuestra app, donde tenemos la inicialización del servidor. Aquí podemos cambiar el puerto en el que el servidor correrá.

**Usando Editor Config**

EditorConfig es una extensión que nos permite guardar una configuración de editor en un simple archivo y que esta se aplique sea cuál sea el editor en el que trabajemos.

Nest no trabaja por defecto con EditorConfig, por lo que, si queremos usarlo, debemos crear la configuración manualmente.

Para configurar EditorConfig en nuestro proyecto debemos crear el archivo ***.editorconfig*** y escribir en él la configuración que queramos. Esta es la que se usa en el curso:

```bash
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

Para aplicar esta configuración, si estamos usando VSCode basta con instalar la extensión EditorConfig.

# REST API

## **Introducción a controladores**

Los controladores en una API se encargan de recibir los requests y manipularlos, es decir, validarlos, verificar los permisos, y conectarse a los servicios para obtener los datos.

Los requests son peticiones que se envían desde un cliente usando el protocolo HTTP, y estos pueden tener ciertos métodos como GET, POST, PUT y DELETE.

En Nest, los controladores se representan con clases decoradas, cuyos métodos también están decorados.

Cuando creamos una aplicación con Nest, en el proyecto ya tenemos un controlador por defecto (en el archivo ***src/app.controller.ts***) que es muy simple. Este controlador solo tiene un método que sirve para responder a la petición a `/` con un `Hello World!`

```tsx
// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); // obteniendo el mensaje de un servicio
  }
}
```

- El método `getHello` es el que se ejecuta cuando se hace una petición a la ruta `/` y lo que retorna es lo que se envía al servidor. Podemos reemplazar el llamado al servicio (después explicaremos que es) por un simple string y este será la respuesta al cliente.

<aside>
💡 Si quieres cambiar el código y que el servidor se reinicie automáticamente, debes iniciar el servidor con `npm run start:dev`

</aside>

Cada método de un controlador debe tener un decorador que indica el método que la petición entrante debe tener para que se ejecute el método mismo. Por ejemplo, el método `getHello` se ejecuta si la petición es de tipo GET, ya que usa el decorador `@Get`.

Los decoradores para métodos pueden recibir la ruta a la cuál debe hacerse la petición para que el método se ejecute. Así definiríamos un método para la ruta `/nuevo`

```tsx
// src/app.controller.ts

...

@Controller()
export class AppController {
  ...

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }
}
```

La ruta que recibe el decorador no necesita tener slash. De hecho, Nest también resuelve los trailing slashes (slashes al final). Es decir, las rutas `/nuevo` y `/nuevo/` serían las mismas.

## **GET: recibir parámetros**

En un API podemos tener una ruta dinámica, por ejemplo `tasks/{id}` para acceder a una tarea específica con el id determinado. En este caso `id` es un parámetro.

Para obtener los valores de los parámetros usamos el decorador `@Param` en el primer parámetro del método que maneja la ruta.

```tsx
// src/app.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  ...

  @Get('products/:id')
  getProduct(@Param() params: any) {
    return `product with id ${params.id}`;
  }
}
```

- El primer parámetro `params` recibe un objeto con todos los parámetros.
- Nótese que en la ruta el parámetro debe empezar con `:` y el nombre que se use será el que tendrá en el objeto `params`

Podemos hacer que el parámetro del método reciba directamente un parámetro en particular y no todos, mandándole el nombre del parámetro al decorador `@Param`:

```tsx
// src/app.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  ...

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `product with id ${id}`;
  }
}
```

- Cuando accedemos directamente a un parámetro podemos definir el tipo de dato que este debe tener.

Si en la ruta tenemos varios parámetros (cada uno con su propio nombre), podemos guardar cada uno en su propio parámetro del método:

```tsx
// src/app.controller.ts

...

@Controller()
export class AppController {
  ...

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `product with id ${productId} fromcategory with id ${id}`;
  }
}
```

## **GET: parámetros query**

Los parámetros tipo query sirven para enviar más parámetros opcionales dentro de un endpoint. En la ruta `/products?region=USA&brand=XYZ&sort=asc`, `region`, `brand` y `sort` son los parámetros y `USA`, `XYZ` y `asc` son sus respectivos valores.

Para obtener los parámetros de query usamos el decorador `@Query`, de forma análoga a usar el  parámetro `@Param`. Este es un ejemplo:

```tsx
// src/app.controller.ts

import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  ...

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=${limit} offset=${offset} brand=${brand}`;
  }

  ...
}
```

- Mayormente las query params son opcionales, y en esos casos se puede establecer un valor por defecto en el parámetro correspondiente en el método, ya que cuando estos no se encuentran en la URL, sus valores son `undefined`.

**Un problema con las rutas dinámicas**

Cuando tenemos una ruta dinámica (por ejemplo `/products/:id`), tenemos dos métodos donde el primero maneja esa ruta y el segundo maneja un caso particular de la misma (por ejemplo `/products/filter`), si accedemos al caso particular (a `/products/filter`), se ejecutará el método de la ruta dinámica (el que tiene `/products/:id`), y no el otro como esperaríamos.

Esto sucede porque definimos el método con la ruta dinámica antes que el otro, y solo basta con cambiar el orden, definiendo primero el método que maneja la ruta específica y luego el método que maneja la ruta dinámica.

## Separación de responsabilidades

En el patrón SOLID cada método o clase debe tener una sola responsabilidad. Esto hace el código más mantenible y más testeable.

En una REST API, esto consiste en que cada controlador se ocupe de los endpoints de una sola entidad. Deberíamos tener un controlador para productos, otro para categorías, etc.

Con el CLI de Nest podemos generar piezas específicas (como controladores) para nuestro proyecto.

Por ejemplo, para generar un controlador usamos:

```bash
nest g controller <nombre>
```

- El nombre del controlador debe indicar el tipo de entidad del cuál se hará responsable. Si queremos generar un controlador de productos podríamos usar `products`

Cuando generamos un controlador, en la carpeta *src* se crea automáticamente una carpeta con el nombre usado con los archivos necesarios. Además el archivo ***app.module.ts*** es modificado para incluir a este nuevo controlador.

El comando anterior puede ser ejecutado de otras formas. Por ejemplo:

- `nest g controller controllers/products --flat`: Esto crea los archivos dentro de la carpeta *controllers* (dentro de *src*) y de forma suelta, es decir, sin crear una carpeta *products*

A diferencia del controlador de la app, los controladores que generamos, en su decorador Controller, se estará mandando un string. Este argumento indica el prefijo de las rutas que manejará el controlador.

Por ejemplo, si creamos un controlador llamados `products`, su prefijo será `products`, y las rutas de los métodos del controlador mismo ya no tendrán que empezar con `products`

## **POST: método para crear**

El método POST se usa mayormente para crear recursos.

Para que un método de un controlador maneje peticiones POST, basta con que tenga el decorador `@Post`:

```tsx
import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  ...

  @Post() // 0.0
  create() {
    return {
      message: 'accion de crear',
    };
  }
}
```

- Nótese que en este método retornamos un objeto en lugar de una cadena de texto como hacíamos antes. Debido a esto, en la respuesta obtendremos un JSON. Esto se puede hacer en todos los métodos, no importa el método HTTP de la petición. Además, esta es la mejor forma de enviar respuestas desde una API.

<aside>
❗ Hasta ahora solo hacíamos peticiones desde el navegador ya que este solo hace peticiones GET. Para hacer peticiones POST debemos usar un cliente HTTP como Postman o Insomnia (o Thunder Client de VSCode).

</aside>

Ya que las peticiones POST se usan para crear recursos es normal que estas vengan con información. Esta información suele venir en el cuerpo o body de la petición. Para acceder a este body podemos usar el decorador `@Body`, de forma análoga a como usamos los decoradores `@Params` y `@Query`

```tsx
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  ...

  @Post()
  create(@Body() payload: any) { // obteniendo el body completo en el parámetro payload
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
```

- El body de una petición siempre es un JSON (que en el método sería un objeto), y al igual que con los otros decoradores, podemos especificar que propiedad queremos en el parámetro, especificándolo como argumento al decorador `@Body`. Sin embargo, en un body pueden haber un montón de propiedades, por lo que sacarlas todas de esta forma no es muy conveniente.

## **Métodos PUT y DELETE para editar y eliminar**

Para los métodos PUT y DELETE también tenemos sus correspondientes decoradores. Este es un ejemplo:

```tsx
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  ...

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
```

- Normalmente estos métodos se usan para actualizar o eliminar un recurso en concreto, y por lo tanto siempre van asignados a una ruta dinámica, con el id del recurso como parámetro.

## **Códigos de estado o HTTP response status codes**

Los códigos de estado vienen en cada respuesta y significan ciertas cosas. Por ejemplo 200 significa que se obtuvo la información requerida, 404 significa que no se encontró el recurso.

Puedes ver que significan los otros códigos de estado [aquí](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Cada método tiene un código por defecto en Nest, pero podemos especificar un código de estado diferente para la respuesta. Para ello usamos el decorador `@HttpStatus` de esta forma:

```tsx
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  ...

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED) // usando el codigo 202 (solo como ejemplo)
  getProduct(@Param('id') id: string) {
    return { message: `product with id ${id}` };
  }

  ...
}
```

- El decorador `@HttpCode` debe ser usado del decorador correspondiente al método HTTP y debe recibir el código de estado que se usará en la respuesta.
- Nest nos provee de un enum `HttpStatus` dentro del cuál se encuentran todos los códigos de estado provistos de forma literal. Esto es bueno ya que no tenemos que recordar el significado de todos los códigos de estado.

Otra forma de establecer códigos de estado es creando una respuesta de Express. Nest al ser un framework agnóstico, puede trabajar con otras librerías, entre ellas Express.

Para establecer un código de estado en la respuesta con Express debemos crear una respuesta de Express y establecer el código de estado en ella, de esta forma:

```tsx
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  ...

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('id') id: string) {
    response.status(200).send({ message: `product with id ${id}` });
  }

  ...
}
```

- La respuesta la creamos en un parámetro del método correspondiente usando el parámetro `@Res` que nos da Nest, y asignándole el tipo `Response` de Express.
- Para asignar un código de estado en una respuesta de Express usamos el método `status`, y para enviar la respuesta usamos el método `send`
- Nótese que no fue necesario retornar nada ya que la respuesta de Express se encarga de todo.

# Integridad de datos

## **Introducción a servicios: crea tu primer servicio**

Un servicio en una REST API es lo que se conecta a los Data Model o Data Access.

Mientras los controladores se declaran con clases con un decorador `@Controller`, los servicios se declaran con clases con el decorador `@Injectable`, que significa inyección de dependencias.

Los servicios, al igual que los controladores, se pueden generar con el CLI de Nest, usando `service` o `s` en lugar de controller. Por ejemplo, `nest g s services/products --flat`

Dentro de un servicio podemos implementar la lógica destinada a manejar datos. Este es un ejemplo de un servicio de productos que usa un arreglo simple como base de datos:

```tsx
import { Injectable } from '@nestjs/common';

import { Product } from 'src/entities/product.entity';
/*
export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}
*/

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
```

- Nótese que solo implementamos la lógica para crear, leer todos y leer uno de los productos. La lógica de actualizar y eliminar un producto la puedes hacer tu mismo.
- También nótese que para definir el tipo de dato de un producto se creo una clase extra en una carpeta *entities*, que es lo que mayormente se hace. `Product` sería una entidad.

## **Implementando servicios en tu controlador**

Para conectar un controlador a un servicio basta con definir un atributo extra en el controlador, cuyo tipo sea la clase correspondiente al servicio que queramos inyectarle. En nuestro controlador de productos lo haríamos de esta forma:

```tsx
import { ... } from '@nestjs/common';

import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {} // 0.0

  ...
}
```

- Nótese que solo estamos especificando que habrá una instancia del servicio de productos como atributo del controlador, pero no estamos instanciando nada. La instanciación será responsabilidad de la app, y se hará por debajo.

Ahora, con el servicio implementado, podemos rediseñar los métodos del controlador para que use el servicio.

**Algunas cosas importantes**

- En nuestro controlador de productos, en el método `getProduct` habíamos declarado un parámetro para guardar la respuesta (usando el decorador `@Res`). Al hacer esto, en este método ya no podemos usar `return`, sino que debemos ejecutar el método `send` de la respuesta. Si queremos volver a usar `return`, debemos borrar ese parámetro.
- Los métodos `getProduct`, `update` y `delete` reciben un id como parámetro, y este debe ser un número (y lo tipeamos como tal), pero este aparecerá durante la ejecución de la app como un `string`. Si queremos mandarlo a los métodos del servicio (que lo deben recibir como `number`) debemos hacer una conversión de `string` a `number` primero.

## **Manejo de errores con throw y NotFoundException**

Si en un servicio o en un controlador se arroja un error, el servidor responde, por defecto, con un error 500, Internal Server Error.

Nosotros podemos hacer que dependiendo de la lógica, se generen errores que generen respuestas con otros códigos de estado.

Cuando queremos obtener, actualizar o eliminar un producto, podemos mandar un id que ningún producto tiene. En este caso tendríamos un error 404 Not Found.

Nest nos provee de clases de errores que podemos usar para lanzar esos errores en el servidor. Para ello simplemente usamos `throw` seguido de una instancia de ese error. Así lo haríamos para el error 404 en nuestro servicio de productos:

```tsx
import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  ...

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);

    if (!product) { // si no hay producto
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  ...

  update(id: number, payload: any) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) { // si no hay producto
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    this.products[index] = { ...this.products[index], ...payload };
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) { // si no hay producto
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    this.products.splice(index, 1);
    return true;
  }
}
```

- Cada error que queramos tendrá su clase. Para el error 404 la clase es `NotFoundException`
- Cada clase de error recibe un mensaje que podemos indicar, y este mensaje se verá en la respuesta al cliente.

## **Introducción a pipes: usa tu primer pipe**

Anteriormente vimos que los parámetros que guardan los params de la URL usando el decorador `@Param` siempre van a ser de tipo `string`

Para nuestros ids antes necesitábamos hacer la conversión a number antes de mandarlos a los servicios.

Los pipes nos pueden ayudar a ejecutar ciertos procesos en los parámetros de los métodos de nuestros controladores.

Para el caso de los ids Nest nos provee de un pipe llamado `ParseIntPipe`, que simplemente hace la conversión de `string` a `number`, que es lo que necesitamos.

Para usar un pipe simplemente lo pasamos como segundo argumento del decorador `@Param` del parámetro que queramos convertir, de esta forma:

```tsx
import {
  ...
  ParseIntPipe,
  ...
} from '@nestjs/common';

import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  ...

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) { // usando el pipe
    return this.productsService.findOne(id); // ya no hacemos +id
  }

  ...
}
```

- Esta misma técnica la podemos aplicar a los métodos para actualizar y eliminar productos, ya que ellos también reciben un id.
- El pipe `ParseIntPipe` también se encarga de que el id en la ruta sea un número entero. En caso de que no lo sea, hace que el servidor responda con un error 400 Bad Request

## **Crea tu propio pipe**

Podemos crear nuestros propios pipes si queremos. El pipe anterior lo podemos crear nosotros mismos.

Los pipes se pueden crear con el CLI de Nest, usando:

```bash
nest g pipe <carpeta>/<nombre>

# por ejemplo
nest g pipe common/parse-int
```

- Es muy común tener los pipes en la carpeta *src/common*
- Si el pipe tiene un nombre de más de una sola palabra, este debe escribirse en kebab-case, y en el código aparecerá en PascalCase (como una clase)

Los pipes se declaran con una clase que hereda de `PipeTransform` y tienen el decorador `@Injectable`. Dentro de estas está el método `transform` que se encarga de hacer la operación de transformación, y recibe como primer argumento el valor a transformar, y retorna el valor transformado.

Esta sería nuestra implementación del pipe `ParseIntPipe` que vimos anteriormente:

```tsx
// src/common/parse-int.pipe.ts

import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);

    if (isNaN(val)) {
      throw new BadRequestException(`${value} is not an number`);
    }

    return val;
  }
}
```

Los custom pipes pueden ser usados de la misma forma que los pipes que Nest provee.

## **Data Transfers Objects**

Los Data Transfer Objects, o DTOs, nos ayudan a definir los tipos de los datos que se transfieren de los controladores a los servicios.

En nuestro caso, en los métodos de crear y actualizar, estamos usando `any` en el `payload` que guarda lo que viene en el body de la petición. En lugar de usar any podríamos generar una clase que indique las propiedades que debe tener este payload. Esa clase sería el DTO.

Los DTOs normalmente se declaran dentro de la carpeta *src/dtos*. Estos serían nuestros DTOs para crear y actualizar productos.

```tsx
// src/dtos/product.dto.ts

export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDTO {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
```

- Los DTOs muchas veces se parecen a las entidades, pero es importante tratarlos como cosas diferentes, ya que en la lógica podemos manejar datos que no pertenezcan a las entidades pero que si necesitemos.
- Nótese que el DTO para actualizar es parecido al de crear, solo que los atributos son opcionales.
- Es importante que los DTOs tengan atributos de solo lectura. Esto es para que no puedan ser editados en la lógica de los controladores o servicios.

Estos DTOs se usan como tipos de datos en los parámetros `payload` de los métodos para crear y actualizar de los controladores y servicios, de esta forma:

```tsx
...
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  ...

  @Post()
  create(@Body() payload: CreateProductDTO) { // usando el DTO para crear
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDTO, // usando el DTO para actualizar
  ) {
    return this.productsService.update(id, payload);
  }

  ...
}
```

```tsx
...
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dto';

@Injectable()
export class ProductsService {
  ...

  create(payload: CreateProductDTO) { // usando el DTO para crear
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDTO) { // usando el DTO para actualizar
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    this.products[index] = { ...this.products[index], ...payload };
    return this.products[index];
  }

	...
}
```

## **Validando parámetros con class-validator y mapped-types**

Hasta el momento, los DTOs que agregamos solo nos sirven para manejar los datos correctamente a nivel de desarrollo. Es decir, que al momento de usar los datos dentro de los controladores o servicios, estos tengan los tipados correctos.

Para verificar que el usuario al crear o actualizar productos, en el body de la petición se tenga la información correcta debemos crear validaciones.

Para crear estas validaciones usaremos nuestros DTOs, pero también instalaremos las dependencias class-validator y class-transformer: `npm i class-validator class-transformer`

class-validator es una librería que nos provee de decoradores para convertir a nuestros DTOs en validadores. Cada decorador se agrega a cada atributo del DTO, y le asigna una verificación que debe cumplir para que el servidor permita ese dato.

Este sería nuestro DTO para crear productos, pero con los decoradores de class-validator:

```tsx
// src/dtos/products.dto.ts

import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDTO { ... }
```

- Nótese que se pueden usar más de un decorador en cada atributo del DTO.

Antes de probar las validaciones primero debemos agregar el pipe de validación `ValidationPipe` que Nest ya trae. Este pipe debe activarse de forma global, ya que vamos a necesitar que muchas rutas tengan validación de datos. Para activar este pipe lo hacemos de esta forma:

```tsx
// src/main.ts

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // importamos el pipe
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // lo agregamos a los pipes globales
  await app.listen(3000);
}
bootstrap();
```

Con esto las validaciones ya estarán funcionando. Si tratamos de crear un producto con datos faltantes o incorrectos, el servidor responderá con un error 400 Bad Request indicando que la petición está mal hecha. Además, también nos dirá que nos falta para que la petición esté bien.

Para el DTO de actualizar, como vimos anteriormente, este DTO es parecido al de crear, solo que cada atributo es opcional. Para no copiar los decoradores podemos usar un PartialType. Pero antes debemos instalar la dependencia `@nestjs/mapped-types`

Esta librería nos provee de una función llamada `PartialType`, la cuál recibe un DTO y retorna el mismo pero con cada atributo como opcional, perfecto para nuestro DTO de productos. En nuestro caso lo usaríamos de esta forma:

```tsx
// src/dtos/products.dto.ts

import { ... } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'; // importando

export class CreateProductDTO { ... }

// aplicando el partial type
export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
```

- Recuerda que los DTOs son clases, por lo que para crear el DTO de actualizar usamos herencia.

## **Evitando parámetros incorrectos**

El `ValidatorPipe` que habilitamos globalmente en nuestro servidor puede ser instanciado con algunas opciones. Dos de ellas muy importantes son:

- `whitelist`: solo las propiedades declaradas en el DTO son tomadas en cuenta. Si el usuario envía propiedades extra, simplemente no se toman en cuenta.
- `forbidNonWhitelisted`: igual que la anterior, pero si el usuario envía propiedades extra, el servidor responde con un error.

Esta es la forma de indicar estas opciones:

```tsx
// src/main.ts

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 0.0
      forbidNonWhitelisted: true, // 0.0
    }),
  );

  await app.listen(3000);
}
bootstrap();
```