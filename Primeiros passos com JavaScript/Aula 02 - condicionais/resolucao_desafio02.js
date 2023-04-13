/* Faça um programa para calcular o valor de uma viagem.
 
 Você terá cinco variáveis:
 -Preço do etanol;
 -Preço da Gasolina;
 -O tipo de combustível que está em seu carro;
 -Gasto médio de combustível do carro por KM;
 -Distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar essa viagem. */

const valorEtanol = 4.54;
const valorGasolina = 6.89;
const tipoCombustivel = 'Etanol';
const consumoMedioKm = 12;
const distanciaPercorridaKm = 430;

const consumoCombustivel = distanciaPercorridaKm / consumoMedioKm;


if (tipoCombustivel === 'Etanol'){
    let gastocombustivel = consumoCombustivel * valorEtanol;
    console.log('O valor gasto de Etanol será: '+gastocombustivel.toFixed(2))
} else {
    let gastocombustivel = consumoCombustivel * valorGasolina;
    console.log('O valor gasto de Gasolina será: '+ gastocombustivel.toFixed(2))
}
