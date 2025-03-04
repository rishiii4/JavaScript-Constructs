const prompt = require("prompt-sync")(); 
// Initializing count of heads and tails to 0
let headsCount = 0;
let tailsCount = 0;

console.log("Flipping the coin until either Heads or Tails wins 11 times...\n");

while (headsCount < 11 && tailsCount < 11) {
    // 50% chance for each
    let flip = Math.random() < 0.5 ? "Heads" : "Tails"; 
    console.log(`Coin Flip: ${flip}`);

    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Heads: ${headsCount}, Tails: ${tailsCount}\n`);
}

console.log(`${headsCount === 11 ? "Heads" : "Tails"} wins the game!`);
