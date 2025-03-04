const prompt = require("prompt-sync")(); 
let n = parseInt(prompt("Enter the value of n: "));

let power = 1;
let i = 0;

while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    // Multiply by 2 for next power
    power *= 2; 
    i++;
}

