// Creating variables to store billing values for each state
const fatSP = 67836.43;
const fatRJ = 36678.66;
const fatMG = 29229.88;
const fatES = 27165.48;
const fatOthers = 19849.53;

// Calculating total billing for states and storing in a variable
const fatTotal = fatSP + fatRJ + fatMG + fatES + fatOthers;

// Calculating the percentage of participation of each state
const percentSP = (fatSP / fatTotal) * 100;
const percentRJ = (fatRJ / fatTotal) * 100;
const percentMG = (fatMG / fatTotal) * 100;
const percentES = (fatES / fatTotal) * 100;
const percentOthers = (fatOthers / fatTotal) * 100;

// Printing the percentage of participation of each state 
console.log(`Percentage of representation of monthly billing of the distributor in SP: ${percentSP.toFixed(2)}%`);
console.log(`Percentage of representation of monthly billing of the distributor in RJ: ${percentRJ.toFixed(2)}%`);
console.log(`Percentage of representation of monthly billing of the distributor in MG: ${percentMG.toFixed(2)}%`);
console.log(`Percentage of representation of monthly billing of the distributor in ES: ${percentES.toFixed(2)}%`);
console.log(`Percentage of representation of monthly revenues of the distributor in the other states: ${percentOthers.toFixed(2)}%`);