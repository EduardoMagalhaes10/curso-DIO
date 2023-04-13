/* 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua 
classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

const nota01 = 6.4;
const nota02 = 5.9;
const nota03 = 8.8;

const media = (nota01 + nota02 + nota03) /3;

if (media <5){
    console.log('Sua média é: '+ media.toFixed(2) + ' Reprovado');
}
else if (media  >=5 && media <= 7){  // A sigla && signfica duas condições na mesma pergunta.
    console.log('Sua média é: '+media.toFixed(2) + ' Recuperação');
}else{
    console.log('Sua média é: '+media.toFixed(2) + ' Aprovado!');
}