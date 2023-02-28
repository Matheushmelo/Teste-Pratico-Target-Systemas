//Criando variáveis para armazenar os valores de faturamento de cada estado
const fatSP = 67836.43;
const fatRJ = 36678.66;
const fatMG = 29229.88;
const fatES = 27165.48;
const fatOutros = 19849.53;

//Calculando o faturamento total dos estados e armazenando em uma variável
const fatTotal = fatSP + fatRJ + fatMG + fatES + fatOutros;

//Calculando o percentual de participação de cada estado
const percentSP = (fatSP / fatTotal) * 100;
const percentRJ = (fatRJ / fatTotal) * 100;
const percentMG = (fatMG / fatTotal) * 100;
const percentES = (fatES / fatTotal) * 100;
const percentOutros = (fatOutros / fatTotal) * 100;

//Imprimindo o percentual de participação de cada estado 
console.log(`Percentual de representação de faturamento mensal da distribuidora em SP: ${percentSP.toFixed(2)}%`);
console.log(`Percentual de representação de faturamento mensal da distribuidora no RJ: ${percentRJ.toFixed(2)}%`);
console.log(`Percentual de representação de faturamento mensal da distribuidora em MG: ${percentMG.toFixed(2)}%`);
console.log(`Percentual de representação de faturamento mensal da distribuidora no ES: ${percentES.toFixed(2)}%`);
console.log(`Percentual de representação de faturamento mensal da distribuidora nos demais estados: ${percentOutros.toFixed(2)}%`);
