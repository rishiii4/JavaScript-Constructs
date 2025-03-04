// Converting 42 inches in feet
console.log("1 feet = 12 inches");
console.log("42 inches = "+(42/12)+" feet");

// Define dimensions in feet
const lengthFeet = 60;
const widthFeet = 40;
const totalPlots = 25;

// Convert feet to meters
const lengthMeters = lengthFeet * 0.3048;
const widthMeters = widthFeet * 0.3048;

// Calculate area of one plot in square meters
const totalAreaMeters = lengthMeters * widthMeters * totalPlots;


// Convert square meters to acres (1 acre = 4046.86 square meters)
const totalAreaAcres = totalAreaMeters / 4046.86;

// Display the result
console.log(`Total area of 25 plots in acres: ${totalAreaAcres.toFixed(4)} acres`);

