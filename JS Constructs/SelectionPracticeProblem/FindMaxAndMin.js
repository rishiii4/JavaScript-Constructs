// Create an empty array
let numbers = [];

// Generate 5 random numbers between 100 and 999
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 900) + 100;
    numbers.push(randomNumber);
}

// Find minimum and maximum values manually
let minValue = numbers[0];
let maxValue = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i];
    }
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

// Print results
console.log("Generated numbers:", numbers);
console.log("Minimum value:", minValue);
console.log("Maximum value:", maxValue);

