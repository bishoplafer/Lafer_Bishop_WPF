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
var loopCounter; // variable loopcounter to allow me to test each element in each array

// for the index(loopcounter) 0,1,2 do these things:
for (loopCounter = 0; loopCounter <= 2; loopCounter++) 
{
	// if unit at index is in Fahrenheit convert it to Celsius and print the conversion to the console
	if(unit[loopCounter] === "F"){
		conversion[loopCounter] = 5 / 9 * (degrees[loopCounter] - 32);
		console.log(degrees[loopCounter] + unit[loopCounter] + " is " + conversion[loopCounter] + "C.");
		// if unit at index is Celsius convert it to Fahrenheit and print the conversion to the console
	}else{if(unit[loopCounter] === "C"){
			conversion[loopCounter] = 9 / 5 * degrees[loopCounter] + 32;
			console.log(degrees[loopCounter] + unit[loopCounter] + " is " + conversion[loopCounter] + "F.");
		}
	}
}

	