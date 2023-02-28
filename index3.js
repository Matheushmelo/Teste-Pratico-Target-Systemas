//Criando um vetor de faturamento diário. Considerando um mês de 30 dias
//Coloquei os 0 representando todos os sábados e domingos do mês e também um feriado fictício
const faturamentoDiario = [
    1000, 1800, 1300, 2000, 1550, 
    0, 0, 1700, 2800, 2300, 
    2150, 0, 0, 0, 1900, 
    2700, 1350, 2400, 1100, 0, 
    0, 1800, 2400, 2600, 2250, 
    1950, 0, 0, 2750, 2450
];

//Calculando o menor valor de faturamento presente no vetor
const menorFaturamento = Math.min(...faturamentoDiario);
console.log(`O menor valor de faturamento ocorrido em um dia do mês foi de R$ ${menorFaturamento.toFixed(2)}.`);

//Calculando o maior valor de faturamento presente no vetor
const maiorFaturamento = Math.max(...faturamentoDiario);
console.log(`O maior valor de faturamento ocorrido em um dia do mês foi de R$ ${maiorFaturamento.toFixed(2)}.`);

//Calculando a média mensal de faturamento
let somaFaturamento = 0;
let diasUteis = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > 0) { //Utilizando validação para não considerar no cálculo, os dias que não houveram faturamento
    somaFaturamento += faturamentoDiario[i];
    diasUteis++;
  }
}
const mediaMensal = somaFaturamento / diasUteis;

console.log(`A média mensal de faturamento foi de R$ ${mediaMensal.toFixed(2)}.`);

//Verificando quais dias tiram um faturamento maior do que a média mensal
//Percorrendo o vetor e comparando cada posição com a média do faturamento mensal
let diasAcimaDaMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > mediaMensal) {
    diasAcimaDaMedia++;
  }
}

console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de ${diasAcimaDaMedia}.`);