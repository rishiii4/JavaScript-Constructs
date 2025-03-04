const prompt = require("prompt-sync")(); 
let n = parseInt(prompt("Enter a Number:"))

let product;
// Using for loop
for(let i = 1;i<=n;i++){
    product = Math.pow(2,i)
}
// Printing output
console.log(product)
