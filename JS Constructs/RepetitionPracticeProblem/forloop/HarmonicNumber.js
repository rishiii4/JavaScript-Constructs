const prompt = require("prompt-sync")(); 
let number = parseInt(prompt("Enter a Number:"))

let harmonic = 0;

// for loop
for(let i=1;i<=number;i++){
    harmonic += 1/i;
}
console.log(harmonic)
console.log(`Harmonic Number H(${number}) = ${harmonic.toFixed(4)}`);