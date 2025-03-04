const prompt = require("prompt-sync")(); 
let n = parseInt(prompt("Enter a Number:"))

let result = 1;

// Calculating the factorial on n
for(let i=1;i<=n;i++){
    result *= i;
}
console.log(result)