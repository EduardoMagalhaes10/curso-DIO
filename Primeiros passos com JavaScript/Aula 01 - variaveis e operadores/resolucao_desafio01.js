/*Faça um programa para calcular o valor de uma viagem.
 
 Você terá três variáveis:
 -Preço do combustível;
 -Gasto médio de combustível do carro por KM;
 -Distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar essa viagem.   */

const precoCombustivel = 6.00;
const gastoMedioKm = 12
const distanciaPercKm = 450

const consumoCombLt = distanciaPercKm / gastoMedioKm;
const gastoCombViagem = consumoCombLt * precoCombustivel;

console.log("Irá ser gasto: "+ gastoCombViagem);