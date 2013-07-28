// Bishop Lafer
// Functions_worksheet
// July 27, 2013

// Circumference
// C = 2PIr

var calcCircumference = function(r){
    var pi = Math.PI;
    var circumference = 2 * pi * r;
    return circumference;
}
var a = calcCircumference(5);
console.log("The circumference of the circle is " + a);

// Stung!
var calcDeath = function(lbs){
	beeStings = 8.666666667;
	deathStings = lbs / beeStings;
	return deathStings;
}
weight = 175;
b = calcDeath(weight);
console.log("It takes " + b + " beestings to kill a person who weighs " + weight + " lbs.");
