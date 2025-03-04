const prompt = require("prompt-sync")(); 
let n = parseInt(prompt("Enter a Number:"))

if(n == 1){
    console.log("Prime")
    return
}

let counter = 0;

for(let i=1;i<=n;i++){
    if(n%i == 0){
        counter++;
    }
    
}

if(counter == 2){
    console.log("Prime")
    
}else{
    console.log("Not Prime")
}

