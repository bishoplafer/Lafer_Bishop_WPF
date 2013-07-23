// Week 2 Conditional Logic

var oldEnough = true;

// if the child is old enough, print to the console "you can ride!"
if(oldEnough){
	// code performed if condition is true
	console.log("You can ride the coaster!");
}
console.log("what comes after");

// Relational Expressions

var kidHeight = 30;
var minHeight = 48;
// if the kid is over 48 inches in height
if(kidHeight > minHeight){
	console.log("You can ride the coaster!");
}

// Conditions with Expressions
var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;
// if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
	console.log("You can ride the coaster!");
}

// If and Else
var kidHeight = 30;
var minHeight = 48;
// if the kid is over 48 inches in height
if(kidHeight > minHeight){
	console.log("You can ride the coaster!");
}else{
	console.log("Sorry kid, you've got some growing to do first!");
}

// elseif{}
var kidHeight = 30;
var minHeight = 48;
var wParentHeight = 45; // the height of the kid with the parent
// if the kid is over 48 inches in height
if(kidHeight > minHeight){
	// you can ride
	console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
	// you can ride with a parent
	console.log("You can ride, but only with a parent present.");
}else{
	// sorry you have growing to do
	console.log("Sorry kid, you've got some growing to do first!");
}

// Relational Operators

