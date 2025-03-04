// Take input from the user
let day = parseInt(prompt("Enter the day:"));
let month = parseInt(prompt("Enter the month:"));

// Check if the date is between March 20 and June 20
let isBetween = false;

if ((month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20)) {
    isBetween = true;
}

// Print the result
console.log(isBetween);
