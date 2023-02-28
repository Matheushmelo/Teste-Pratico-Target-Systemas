// Capturing a number informed by the user to be verified
let num = parseInt(prompt("Enter a number to check: "));

// Variables to store sequence values
let a = 0;
let b = 1;
let c = 0;

// Flag to check if the number belongs to the sequence
let belong = false;

// Verifying the Fibonacci sequence to the number informed by the user
while (c < num) {
  c = a + b; // c will receive the sum of the two previous values
  a = b; // a will receive the previous value of b
  b = c; // b will receive the value of c

  // Verifying if the number belongs to the Fibonacci sequence
  if (c === num) {
    belong = true;
    break;
  }
}

// Printing the result
if (belong) {
  alert(`${num} belongs to the Fibonacci sequence`);
} else {
  alert(`${num} does not belong to the Fibonacci sequence`);
}