// Take input from the user
let year = parseInt(prompt("Enter a year:"));

// Check if the year is a leap year
let isLeap = false;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeap = true;
}

// Print the result
if (isLeap) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is not a Leap Year");
}
