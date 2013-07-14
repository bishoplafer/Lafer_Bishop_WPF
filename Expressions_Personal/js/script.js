// Bishop Lafer
// July 13, 2013
// Expressions Personal

// Determining Loan/Purchase Value of an item based on new retail price
var itemMan = prompt("Please input item Manufacturer"); // declare itemMan variable and prompt user to input manufacturer
console.log(itemMan);
var itemMod = prompt("Please input item Model"); // declare itemMod variable and prompt user to input model
console.log(itemMod);
var retailPrice = prompt("Please input new Retail Price"); // declare retailPrice variable and define it
console.log(retailPrice);
// Determine Resale Price by multiplying retailPrice by .65 (65%)
var resalePrice;
resalePrice = parseInt(retailPrice) * .65; // calculate resalePrice
console.log(resalePrice); // show resalePrice

// Based on Resale Price determine Loan/Purchase value
// I want to buy the item at a price that leaves me enough room to resell it at the resalePrice (65% retailPrice) and make at least 32% profit
// Resale Price / 1.68 = Loan/Purchase Value

var purchasePrice = resalePrice / 1.68;  // determine purchasePrice
console.log(purchasePrice); // show purchasePrice

alert("The Resale Value for the " + itemMan + " " + itemMod + " is $" + resalePrice);
alert("The Purchase Price for the " + itemMan + " " + itemMod + " is $" + purchasePrice);