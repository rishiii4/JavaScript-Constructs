const prompt = require("prompt-sync")(); 
let a = parseInt(prompt("Enter 1st Number:"))
let b = parseInt(prompt("Enter 2nd Number:"))
let c = parseInt(prompt("Enter 3rd Number:"))

// Miltiple if else-if statements

let operation1 = a + b / c;
let operation2 = a % b + c;
let operation3 = c + a / b; 
let operation4 = a * b + c;

// if else to get maximum
if(operation1 > operation2 && operation1 > operation3 && operation1 > operation4){
    console.log(operation1)
}else if (operation2 > operation3 && operation2 > operation4){
    console.log(operation2)
}else if (operation3 > operation4){
    console.log(operation3)
}else{
    console.log(operation4)
}

// if else to get minimum
if(operation1 < operation2 && operation1 < operation3 && operation1 < operation4){
    console.log(operation1)
}else if (operation2 < operation3 && operation2 < operation4){
    console.log(operation2)
}else if (operation3 < operation4){
    console.log(operation3)
}else{
    console.log(operation4)
}
