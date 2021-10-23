////////// dynamic import
const button = document.getElementById("btn");

// util para ir cargando modulos segun se necesiten
button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
})