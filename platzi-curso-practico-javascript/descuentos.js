// const precioOriginal = 120;
// const descuento = 18;

// cupones de descuento
var cupones = ["25%", "30%", "25%"];

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

  switch (couponValue) {
    case coupons[0]:
      descuento = 15;
      break;
    case coupons[1]:
      descuento = 30;
      break;
    case coupons[2]:
      descuento = 25;
      break;
    default:
      resultP.innerText = "Cupong no valido!";
      break;
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
