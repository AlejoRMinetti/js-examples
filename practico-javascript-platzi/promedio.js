
function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function promedioPonderado(valores, pesos) {
  var sumaPonderada = 0;
  for (let i = 0; i < valores.length; i++) {
        sumaPonderada += valores[i]*pesos[i];
  }
  return sumaPonderada / valores.length
}