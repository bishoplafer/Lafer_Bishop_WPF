// JavaScript
// Variables of Different Types, Numbers, Booleans and Strings
// declaring and defining variables
// storage container (declares a variable) = variable data (defines the variable)

var age = 24; // Number Variable
// age (storage container) = 24 (variable data)

var isStudent = false; // Boolean Variable

var firstName = "Bishop"; // String Variable

// Arrays

var muppetNames = ["Kermit","Miss Piggy","Gonzo","Rizzo"]; //0,1,2,3

console.log(muppetNames[0]); // lets me see whats in index #0

muppetNames[1] = "Rizzo"; // change index #1 to Rizzo

var num = 1;

console.log(muppetNames[num]; // lets me see whats in the index #1

// Expressions

var a = 2; // sets up our variable a and defines it with 2
var b;
b = a + 3; // add 3 to a and assign it to variable b

// Expressions - Age Example

var yearBorn = 1988;
var age = 2013 - yearBorn;
console.log(age);

// Expressions - Arithmetic Operators

// are of the triangle is half of the width times the height
var width = 4;
var height = 5;
var area = width * height / 2;
console.log(area);

// Expressions - Modulo Operator

var remainder = 32 % 2;
console.log(remainder);

// Expressions - PEMDAS - The Order of Operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// the average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4) / 4;
console.log(average);

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter);

// Expressions - Expressions with Arrays

var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);

// Expressions - Concatenating Strings

var firstName = "Bishop";
var lastName = "Lafer";
var fullName = firstName + " " + lastName;
console.log(fullName);

var a = "6";
var b = "7";

var result = a + b;
console.log(result);

// Expressions - Assignment Operators (+=, -=, *=, /=, ++, --)

var a = 3;
a ++; // (a += 1) = (a = a + 1)
console.log(a);

// Prompt and Alert

var userinput = prompt("Enter your year of birth:");

var width = prompt("We are calculating the area of a rectangle. \nPlease enter the width");
var height = prompt("Please enter the height.");
var area = width * height; // calculates with that info
console.log(area); // prints it out to console

alert("The area of your rectangle is " + area + " sq feet");




