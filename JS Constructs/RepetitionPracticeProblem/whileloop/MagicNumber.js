const prompt = require("prompt-sync")(); // Importing prompt-sync for input

console.log("Think of a number between 1 and 100 (Don't type it).");
console.log("I will guess your number!");

let low = 1, high = 100, mid;
let found = false;

while (low <= high) {
    // Find the middle value
    mid = Math.floor((low + high) / 2); 
    let response = prompt(`Is your number ${mid}? (yes, higher, lower): `).toLowerCase();

    if (response === "yes") {
        console.log(`Great! Your Magic Number is ${mid}.`);
        found = true;
        break;
    } else if (response === "higher") {
        // Move to the upper half
        low = mid + 1; 
    } else if (response === "lower") {
        // Move to the lower half
        high = mid - 1; 
    } else {
        console.log("Please enter a valid response (yes, higher, lower).");
    }
}

if (!found) {
    console.log("Oops! Something went wrong.");
}
