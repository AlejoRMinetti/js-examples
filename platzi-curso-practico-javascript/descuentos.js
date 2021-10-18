// const precioOriginal = 120;
// const descuento = 18;

// cupones de descuento
const coupons = [
  "JuanDC_es_Batman",
  "pero_no_le_digas_a_nadie",
  "es_un_secreto",
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;
  const resultP = document.getElementById("ResultP");

  if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
  } else if (couponValue === "JuanDC_es_Batman") {
    descuento = 15;
  } else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento = 30;
  } else if (couponValue === "es_un_secreto") {
    descuento = 25;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// Para imprimir un objeto con multiples valores (util para debug)
// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
