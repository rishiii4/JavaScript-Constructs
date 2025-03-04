const prompt = require("prompt-sync")();

// Function to check if numbers are palindrome
function isPalindrome(num) {
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

// Calling function to check
function checkPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both palindromes.`);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a palindrome, but ${num2} is not.`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a palindrome, but ${num1} is not.`);
    } else {
        console.log(`${num1} and ${num2} are not palindromes.`);
    }
}
let num1 = parseInt(prompt("Enter 1st Number:"))
let num2 = parseInt(prompt("Enter 2nd Number:"))

// Calling function
checkPalindromes(num1, num2); 


