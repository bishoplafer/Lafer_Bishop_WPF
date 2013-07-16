// Bishop Lafer
// July 16, 2013
// Expressions_Wacky

// How many miles will I be able to drive in my car if I spent x amount on gas.
var milesToGal = prompt("How many miles to the gallon does your vehicle get?"); // declare milesToGal variable and ask user how many miles to the gallon their vehicle gets
var pricePerGal = prompt("How much is gas per gallon at your local Gas Station?"); // declare pricePerGal variable and ask user how much gas costs per gallon at their local gas station
var gasPurch = prompt("How much gas (in dollar amount) did you put in your vehicle?"); // declare gasPurch variable and ask user how much they spent on gas 

var distance = gasPurch / pricePerGal * milesToGal; // declare distance variable and define it as gasPurch / pricePerGal * milesToGal
console.log("Your vehicle will travel " + distance + " miles before needed to pump gas again.");
