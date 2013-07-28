// Functions
// modular factories: stuff can go in, stuff can come out
// types of functions:
// functions, procedures, anonymous functions

function functionName(){
	// code the function runs
}
// Functions - Function Execution
function outptMsg(){
	console.log("Hello World!");
}
// function definition
function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}
// function invocation or function call
calcArea();

// Arguments and Parameters
funcName(argument1, argument2);

function funcName(parameter1, parameter2){
	// code the function runs
}

calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	console.log(area);
}

function dogYears(age){
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}
dogYears(4);
dogYears(6);

// Returning Values
// Getting values back from a function

total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area; // function spitting the info out
}
console.log(total);

// Procedures vs. Functions
// Procedures never return values

// Anonymous Functions
// also called closures.

var functionName = function(){
	// code the function runs
}

functionName();

var calcArea = function(width, height){
	var area = width * height;
	return area;
}

var a = calcArea(20, 30);
console.log(a);

