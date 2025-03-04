const prompt = require("prompt-sync")();
// Function to check if number is Palindrome
let isPalindrome = function(num){
    let original = num;
    let reversed = 0;
    
    while (num > 0) {
        // Get last digit
        let digit = num % 10; 
        reversed = reversed * 10 + digit; 
        num = Math.floor(num / 10); 
    }
    
    return original === reversed;
}


// Function to check if number is Prime
let isPrime = function(num){
    let count = 0;

    for(let i=1;i<=num;i++){
        if(num % i == 0){
            count++;
        }
    }
    if(count == 2){
        return true;
    }else{
        return false;
    }
}

// Taking numbers from user
let num1 = parseInt(prompt("Enter a Number to check Palindrome:"))
let num2 = parseInt(prompt("Enter a Number to check Prime:"))

// If else to check Palindrome
if(isPalindrome(num1)){
    console.log(`${num1} is Palindrome!`)
    if(isPrime(num1)){
        console.log(`${num1} is Prime also!`)
    }
}else{
    console.log(`${num1} is Not Palindrome!`)
}

// If else to check Prime
if(isPrime(num2)){
    console.log(`${num2} is Prime!`)
}else{
    console.log(`${num2} is Not Prime!`)
}

