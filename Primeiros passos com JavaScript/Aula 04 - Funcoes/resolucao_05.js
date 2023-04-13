
function calculardesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

const precoProdutos = 100;
const formaPagamentos = 1;

if (formaPagamentos === 1) {
    console.log(calculardesconto(precoProdutos, 10));
}
else if (formaPagamentos === 2) {
    console.log(aplicarJuros(precoProdutos, 15));
}
else if (formaPagamentos === 3) {
    console.log(precoProdutos);
} else {
    console.log(aplicarJuros(precoProdutos, 10))
}























