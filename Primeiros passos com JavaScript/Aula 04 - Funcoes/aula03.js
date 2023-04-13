// Exemplo de uma função sem retorno ( procedimentos ).

function sayMyName(nome){
    console.log('Meu nome é: '+nome); //Funções que não tem retorno ( Apenas executa ) são procedimentos.
}

sayMyName('Eduardo Magalhães');

// Exemplo de uma função com return

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;    // O return é utilizado quando desaja reutilizar essa função é mais de uma informado o parâmetro.
}

console.log(incrementarJuros(100,30)); // Neste exemplo foi chamado a função incrementarJuros e atribuídos os dois valores do campo da variável.