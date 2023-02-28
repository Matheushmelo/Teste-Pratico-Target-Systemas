// Captando um número informado pelo usuário para ser verificado
let num = parseInt(prompt("Informe um número para verificar: "));

// Variáveis para armazenar os valores da sequência
let a = 0;
let b = 1;
let c = 0;

// Flag para verificar se o número pertence à sequência
let pertence = false;

// Verificando a sequência de Fibonacci até o número informado pelo usuário
while (c < num) {
  c = a + b; // c irá receber a soma dos dois valores anteriores
  a = b; // a irá receber o valor anterior de b
  b = c; // b irá receber o valor de c

  // Verificando se o número pertence à sequência de Fibonacci
  if (c === num) {
    pertence = true;
    break;
  }
}

// Imprimindo o resultado
if (pertence) {
  alert(`${num} pertence à sequência de Fibonacci`);
} else {
  alert(`${num} não pertence à sequência de Fibonacci`);
}