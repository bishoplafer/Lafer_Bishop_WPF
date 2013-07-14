// Bishop Lafer
// July 13, 2013
// Expressions Personal

//I work full time at a Pawn Shop so I decided to use Expressions to do the calculations required for being a succesful pawn broker.
// Determining Loan/Purchase Value of an item based on new retail price
var itemMan = prompt("Please input item Manufacturer"); // declare itemMan variable and prompt user to input manufacturer
console.log("Manufacturer = " + itemMan);
var itemMod = prompt("Please input item Model"); // declare itemMod variable and prompt user to input model
console.log("Mode = " + itemMod);
var retailPrice = prompt("Please input new Retail Price"); // declare retailPrice variable and define it
console.log("Retail Price = $" + retailPrice);
// Determine Resale Price by multiplying retailPrice by .65 (65%)
var resalePrice;
resalePrice = parseInt(retailPrice) * .65; // calculate resalePrice
console.log("Resale Price = $" + resalePrice); // show resalePrice

// Based on Resale Price determine Loan or Purchase value
// I want to buy the item at a price that leaves me enough room to resell it at the resalePrice (65% retailPrice) and make at least 32% profit (of course the lower you buy it the more money you make)
// Resale Price / 1.68 = Loan or Purchase Value

var purchasePrice = resalePrice / 1.68;  // determine purchasePrice
console.log("Purchase Price = $" + purchasePrice); // show purchasePrice

var loanInterest = .25 * purchasePrice; // Pawn law in Florida is 25% interest every 30 days. Default loan period = 60 Days
var pickUpPrice = purchasePrice + loanInterest; // Customers pay the original loan + 25% interest to get their items back


alert("The Resale Value for the " + itemMan + " " + itemMod + " is $" + resalePrice);
alert("The Purchase Price for the " + itemMan + " " + itemMod + " is $" + purchasePrice);