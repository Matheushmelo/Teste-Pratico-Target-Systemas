// Creating a daily billing vector. Considering a 30-day month
// I put the 0 representing every Saturday and Sunday of the month and also a fictitious holiday
const dailyBilling = [
    1000, 1800, 1300, 2000, 1550, 
    0, 0, 1700, 2800, 2300, 
    2150, 0, 0, 0, 1900, 
    2700, 1350, 2400, 1100, 0, 
    0, 1800, 2400, 2600, 2250, 
    1950, 0, 0, 2750, 2450
];

// Calculating the lowest billing value present in the vector
const lowestBilling = Math.min(...dailyBilling);
console.log(`The lowest billing amount occurred on a day of the month was R$ ${lowestBilling.toFixed(2)}.`);

// Calculating the highest billing value present in the vector
const highestBilling = Math.max(...dailyBilling);
console.log(`The highest billing value occurred on a day of the month was R$ ${highestBilling.toFixed(2)}.`);

// Calculating the average monthly revenue
let amountBilling = 0;
let workingDays = 0;
for (let i = 0; i < dailyBilling.length; i++) {
  if (dailyBilling[i] > 0) { // Using validation not to consider in the calculation, the days that did not have billing
    amountBilling += dailyBilling[i];
    workingDays++;
  }
}
const measuredMonthly = amountBilling / workingDays;

console.log(`The average monthly turnover was R$ ${measuredMonthly.toFixed(2)}.`);

// Checking which days had a higher turnover than the monthly average
// Running the vector and comparing each position with the average monthly revenue
let daysAboveAverage = 0;
for (let i = 0; i < dailyBilling.length; i++) {
  if (dailyBilling[i] > measuredMonthly) {
    daysAboveAverage++;
  }
}

console.log(`The number of days in the month in which the daily billing value was higher than the monthly average was ${daysAboveAverage}.`);