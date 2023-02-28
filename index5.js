//Criando uma função que inverta a String
function inverterString(str) {
    let novaString = ''; 
    //Utilizando o for para percorrer a string de trás para frente e adicionando cada caractere a nova string
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
}
  
// Exemplo de utilização
let minhaString = 'Invertendo String';
let novaString = inverterString(minhaString);
console.log(novaString); // gnirtS odnetrevnI