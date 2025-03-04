const prompt = require("prompt-sync");

function celsiusToFahrenheit(celsius) {
    if (celsius < 0 || celsius > 100) {
        console.log("Invalid input! Enter a temperature between 0°C and 100°C.");
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    if (fahrenheit < 32 || fahrenheit > 212) {
        console.log("Invalid input! Enter a temperature between 32°F and 212°F.");
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
}

// Ask user for conversion choice
console.log("Choose conversion: \n1. Celsius to Fahrenheit \n2. Fahrenheit to Celsius");
let choice = parseInt(readline.question("Enter 1 or 2: "));

switch (choice) {
    case 1:
        let celsius = parseFloat(readline.question("Enter temperature in Celsius: "));
        celsiusToFahrenheit(celsius);
        break;
    case 2:
        let fahrenheit = parseFloat(readline.question("Enter temperature in Fahrenheit: "));
        fahrenheitToCelsius(fahrenheit);
        break;
    default:
        console.log("Invalid choice! Please enter 1 or 2.");
}
