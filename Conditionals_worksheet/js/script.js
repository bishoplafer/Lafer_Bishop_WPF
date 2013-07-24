// Bishop Lafer
// Conditionals_worksheet
// July 23, 2013

// Stuff your face I
// Given Competitor's Weight (I weigh 175 lbs.) 
var compWeight = 175;
var contestMinWeight = 250;

// If the competitor weighs 250 lbs or more they can compete
(compWeight >= contestMinWeight) ? console.log("The competitor qualifies for the heavyweight division.") : console.log("The competitor needs to gain some weight!");

// Group 1: Expressions with Conditionals
// Celsius to Fahrenheit Converter

var degrees = new Array(32, 100, 90); // new array with degrees test data set
var unit = new Array("F", "C", "F"); // new array with temperature scale for degrees
var conversion = new Array(); // new array for temperature conversions
// loopCounter = index of Array 
var loopCounter; // variable loopcounter to allow me to test each element in each array

// for the index(loopCounter) start at 0 and increase by 1 until index(loopCounter) = 2 do these things:
for (loopCounter = 0; loopCounter <= 2; loopCounter++) 
{
	// if var unit at index(loopCounter) is in Fahrenheit, var conversion at index(loopCounter) is var degrees at index(loopCounter) converted to Celsius
	if(unit[loopCounter] === "F"){
		conversion[loopCounter] = 5 / 9 * (degrees[loopCounter] - 32);
		// print the conversion to console
		console.log(degrees[loopCounter] + unit[loopCounter] + " is " + conversion[loopCounter] + "C.");
		// if var unit at index(loopCounter) is Celsius, var conversion at index(loopCounter) is var degrees at index(loopCounter) converted to Fahrenheit
	}else{if(unit[loopCounter] === "C"){
			conversion[loopCounter] = 9 / 5 * degrees[loopCounter] + 32;
			// print the conversion to console
			console.log(degrees[loopCounter] + unit[loopCounter] + " is " + conversion[loopCounter] + "F.");
		}
	}
}

	