// Generate a random number (0 or 1)
let randomNumber = Math.random();

// If the number is less than 0.5, it's Heads; otherwise, it's Tails
let result;

if (randomNumber < 0.5) {
    result = "Heads";
} else {
    result = "Tails";
}

// Print the result
console.log("Coin flip result:", result);
