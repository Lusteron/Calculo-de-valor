const precoEtiqueta = 200;

let opcaoPagamento = prompt("Informe a forma de pagameto:");

let valorFinal = 0;

if (opcaoPagamento == 1) {
  let desconto = (precoEtiqueta * 10) / 100;
  console.log(desconto);
  valorFinal = precoEtiqueta - desconto;
  console.log("O valor pago sera de: " + valorFinal);
} else if (opcaoPagamento == 2) {
  desconto = (precoEtiqueta * 15) / 100;
  valorFinal = precoEtiqueta - desconto;
  console.log("O valor pago sera de: " + valorFinal);
} else if (opcaoPagamento == 3) {
  valorFinal = precoEtiqueta;
  console.log("O valor pago sera de: " + valorFinal);
} else if (opcaoPagamento == 4) {
  let acrescimo = (precoEtiqueta * 10) / 100;
  valorFinal = precoEtiqueta + acrescimo;
  console.log("O valor pago sera de: " + valorFinal);
}
