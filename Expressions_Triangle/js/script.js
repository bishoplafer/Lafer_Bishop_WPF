// Bishop Lafer
// June 17, 2013
// Expressions_Personal

// Determine the distance from my window on the second story of my house to the street at the end of the driveway
var window = prompt("How High up (in feet) is the window?"); // declare window variable and ask the user how high up the window is.
var street = prompt("How far from the street (in feet) is the house?"); // declare street variable and ask the user how far from the street the house is.

var distance;
distance = Math.pow(window,2) + Math.pow(street,2); // assuming the house makes a right angle with the ground the distance from the window to the street is equal to the height of the window squared plus the distance to the street squared divided by 
var sqRtDistance = Math.sqrt(distance);
console.log(sqRtDistance);
