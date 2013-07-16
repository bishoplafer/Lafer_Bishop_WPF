// Bishop Lafer
// July 16, 2013
// Expressions_Industry

// Calculate how many pixels square an image resolution is based on dpi, width and height
var dpi = prompt("Please input the image dpi"); // declare dpi variable and define it as user input
var width = prompt("Please input the image width"); // declare width variable and define it as user input
var height = prompt("Please input the image height"); // declare height variable and define it as user input

var pixelSq = width * height / dpi; // declare pixelSq and set it equal to the width * height / dpi
console.log("The image is " + pixelSq + " pixels squared."); // write to console how many pixelSq the image is


