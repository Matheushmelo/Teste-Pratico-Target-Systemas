// Creating a function that inverts the String
function invertString(str) {
    let newString = ''; 
    // Using the for to scroll through string back to front and adding each character to new string
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
}
  
// Example of use
let myString = 'Reversing phrase';
let newString = invertString(myString);
console.log(newString); // esarhp gnisreveR