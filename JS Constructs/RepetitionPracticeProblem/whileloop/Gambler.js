// Initial money
let stake = 100; 
// Goal amount
const goal = 200; 
let bets = 0; 
let wins = 0;

while (stake > 0 && stake < goal) {
    bets++;
    if (Math.random() < 0.5) { 
        stake++; 
        wins++;
    } else {
        stake--;
    }
}

console.log("Total bets made:", bets);
console.log("Total wins:", wins);
console.log(stake === goal ? "Goal reached!" : "Went broke!");
