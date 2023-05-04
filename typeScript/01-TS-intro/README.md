# 03 Configurado nuestro proyecto
<div class="Resources-description"><p><strong>No</strong> vamos a <strong>instalar</strong> TypeScript de manera <strong>global</strong>, sino solo para el proyecto, ya que normalmente así se hace en mundo real. Se trabaja por proyecto.</p>
<p>Realicemos los siguientes pasos:</p>
<ol>
<li>Creamos una carpeta para nuestro proyecto (el nombre que desees) e ingresamos a la misma. Mediante la terminal sería lo siguiente:</li>
</ol>
<pre><code class="language-bash">mkdir ts-project
<span class="hljs-built_in">cd</span> tsc --version
</code></pre>
<ol start="2">
<li>Abrimos nuestro editor de código desde la ubicación de la carpeta del proyecto. Si usas Visual Studio Code, usando la terminal es así:</li>
</ol>
<pre><code class="language-bash">code .
</code></pre>
<ol start="3">
<li>Crearemos los siguientes archivos:</li>
</ol>
<ul>
<li>Un archivo <em>.gitignore</em> en el editor o desde la terminal. Para su contenido, podemos utilizar la página <a href="https://www.toptal.com/developers/gitignore/" target="_blank" rel=" noopener">gitignore.io</a>. En nuestro programa necesitaremos las siguientes especificaciones:<br>
</li>
</ul>
<p>Luego copiamos lo que nos genera la web y lo pegamos en nuestro gitignore desde nuestro editor de código.</p>
<ul>
<li>Un archivo <code>.editorconfig</code> (opcional), si estás usando Visual Studio Code, con el fin de dar una configuración simple y sencilla a la hora de ejecutar código. Aquí copia y pega lo siguiente:</li>
</ul>
<pre><code><span class="hljs-comment"># Editor configuration, see <a href="https://editorconfig.org" target="_blank" rel=" noopener">https://editorconfig.org</a></span>
<span class="hljs-attr">root</span> = <span class="hljs-literal">true</span>
<span class="hljs-section">
[*]</span>
<span class="hljs-attr">charset</span> = utf-<span class="hljs-number">8</span>
<span class="hljs-attr">indent_style</span> = space
<span class="hljs-attr">indent_size</span> = <span class="hljs-number">2</span>
<span class="hljs-attr">insert_final_newline</span> = <span class="hljs-literal">true</span>
<span class="hljs-attr">trim_trailing_whitespace</span> = <span class="hljs-literal">true</span>
<span class="hljs-section">
[*.ts]</span>
<span class="hljs-attr">quote_type</span> = single
<span class="hljs-section">
[*.md]</span>
<span class="hljs-attr">max_line_length</span> = <span class="hljs-literal">off</span>
<span class="hljs-attr">trim_trailing_whitespace</span> = <span class="hljs-literal">false</span>

</code></pre>
<p>Para que funcione esta configuración debes tener instalado la siguiente extensión en tu Visual Studio Code:<br>
<a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel=" noopener">EditorConfig for VS Code</a>
</p>
<ol start="4">
<li>Necistaremos también tener creado una carpeta de nombre <em>src</em> dentro de nuestro proyecto</li>
<li>Ahora crearemos nuestro archivo <em>package.json</em> de manera simple desde la terminal y dentro de la ruta del proyecto:</li>
</ol>
<pre><code class="language-shell"><span class="hljs-built_in">npm</span> init -y
</code></pre>
<p>Así debería estar quedando conformado nuestro proyecto previo al último paso<br>
<img src="https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/ctf-7.jfif" alt="Archivos de configuración"></p>
<ol start="6">
<li>Finalmente, instalemos TypeScript 😊. Desde la terminal y dentro de la ruta del proyecto, ejecuta:</li>
</ol>
<pre><code class="language-shell"><span class="hljs-title">npm</span> install typescript <span class="hljs-comment">--save-dev</span>
</code></pre>
<p>Para verificar la versión instalada:</p>
<pre><code class="language-shell">npx tsc <span class="hljs-comment">--version</span>
</code></pre>
<p><em>Contribución creada por: Martín Álvarez.</em></p>
</div>

# 04 Atrapando bugs

<div class="Resources-description"><p>El análisis de código estático nos ayudará a detectar fallas en nuestro programa durante su desarrollo.</p>
<p>En la carpeta <code>src</code> del proyecto de <a href="https://platzi.com/cursos/typescript/" target="_blank" rel=" noopener">curso</a>, vamos a crear un archivo JavaScript llamado <code>demo.js</code>. El código base es el siguiente:</p>
<pre><code class="language-js">(()=&gt; {
  <span class="hljs-keyword">const</span> myCart = [];
  <span class="hljs-keyword">const</span> products = [];
  <span class="hljs-keyword">const</span> limit = <span class="hljs-number">2</span>;

  <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getProducts</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">const</span> rta = <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">'http://api.escuelajs.co/api/v1/products'</span>, {
      mehtod: <span class="hljs-string">'GET'</span>
    });
    <span class="hljs-keyword">const</span> data = <span class="hljs-keyword">await</span> rta.parseJson();
    products.concat(data);
  }
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTotal</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">const</span> total = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> i = <span class="hljs-number">0</span>; i &lt; products.length(); i++) {
      total += products[i].prize;
    }
    <span class="hljs-keyword">return</span> total;
  }
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addProduct</span>(<span class="hljs-params">index</span>) </span>{
    <span class="hljs-keyword">if</span> (getTotal &lt;= limit) {
      myCart.push(products[index]);
    }
  }

  <span class="hljs-keyword">await</span> getProducts();
  addProducto(<span class="hljs-number">1</span>);
  addProducto(<span class="hljs-number">2</span>);
  <span class="hljs-keyword">const</span> total = getTotal();
  <span class="hljs-built_in">console</span>.log(total);
  <span class="hljs-keyword">const</span> person = {
    name: <span class="hljs-string">'Nicolas'</span>,
    lastName: <span class="hljs-string">'Molina'</span>
  }
  <span class="hljs-keyword">const</span> rta = person +  limit;
  <span class="hljs-built_in">console</span>.log(rta);
});
</code></pre>
<p>Al analizarlo nos damos cuenta de que tiene unos errores que podrían pasar desapercibidos al no ver advertencias. Es hasta que lo ejecutamos en un navegador web o entornos como NodeJS que los bugs saldrán a relucir. Por lo que, nosotros como desarrolladores, esto no es conveniente, pues queremos feedback lo más pronto posible.</p>
<h2>Activando poderes de TypeScript en JavaScript 🧐</h2>
<p>Si estás en Visual Studio Code, puedes activar el analizador de código estático de TypeScript sobre un archivo JavaScript. Para esto, en la primera línea del archivo debe ir lo siguiente:</p>
<pre><code class="language-js"><span class="hljs-comment">//@ts-check</span>
</code></pre>
<p><em>Contribución creada por: Martín Álvarez.</em></p>
</div>

# 05 El compilador de TypeScript

<div class="Resources-description"><p>Este compilador lo que realmente hace es transpilar, pues ni el navegador ni Node.js (a abril de 2022) pueden leer nativamente archivos TypeScript, por lo que realiza un proceso de traducción en la que su código lo convierte a JavaScript.<br>
<h2>Compilación de archivos TypeScript desde Node.js</h2>
<p>Para realizar el proceso de transpilación en Node.js, ejecutemos lo siguiente en la terminal:</p>
<pre><code class="language-shell">npx tsc archivo_typescript<span class="hljs-selector-class">.ts</span>
</code></pre>
<p>Tras esto, se creará un archivo JavaScript dentro de la misma carpeta donde este tu archivo TypeScript y con el mismo nombre. Por ejemplo, en nuestro proyecto realizamos esa operación dentro de la carpeta <em>src</em> con el archivo <em>01-hello.ts</em>, dando como resultado:<br>
<h3>Compilación a una versión específica</h3>
<p>Podemos hacer que nuestro archivo TypesSript sea transpilado a un archivo JavaScript, por ejemplo, con el estándar ECMAScript 6. Para ello ejecutemos:</p>
<pre><code class="language-shell"><span class="hljs-title">npx</span> tsc archivo_typescript.ts <span class="hljs-comment">--target es6</span>
</code></pre>
<h3>Enviando compilación a una carpeta</h3>
<p>Si deseas que los archivos transpilados no se generen en la misma carpeta donde están tus archivos TypeScript, puedes indicarle al compilador hacia donde quieres que vayan:</p>
<pre><code class="language-bash">npx tsc archivo_typescript.ts --target es6 --outDir carpeta_destino
</code></pre>
<p>También podrías indicar que deseas aplicar la anterior operación a <strong>todos</strong> los archivos con extensión TypeScript:</p>
<pre><code class="language-bash">npx tsc *.ts --target es6 --outDir carpeta_destino
</code></pre>
<h2>Deno: un entorno nativo para ambos lenguajes</h2>
<p><a href="https://deno.land/" target="_blank" rel=" noopener">Deno</a>, del mismo creador de Node.js, es un nuevo entorno de ejecución para JavaScript que puede correr también nativamente TypeScript. Sin embargo, aún no tiene la madurez en el ecosistema de Node.js</p>
<p><em>Contribución creada por: Martín Álvarez.</em></p>
</div>
