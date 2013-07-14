// Bishop Lafer
// July 13, 2013
// Expressions Personal

//I work full time at a Pawn Shop so I decided to use Expressions to do the calculations required for being a succesful pawn broker.
// Determining Loan/Purchase Value of an item based on new retail price
var itemMan = prompt("Please input item Manufacturer"); // declare itemMan variable and prompt user to input manufacturer
console.log("Manufacturer = " + itemMan);
var itemMod = prompt("Please input item Model"); // declare itemMod variable and prompt user to input model
console.log("Model = " + itemMod);
var retailPrice = prompt("Please input New Retail Price"); // declare retailPrice variable and define it
console.log("Retail Price = $" + retailPrice);
// Determine Resale Price by multiplying retailPrice by .65 (65%)
var resalePrice = (retailPrice) * .65; // calculate resalePrice
console.log("Resale Price = $" + resalePrice.toFixed(2)); // show resalePrice rounded to 2 decimal places

// Based on Resale Price determine Loan or Purchase value
// I want to buy the item at a price that leaves me enough room to resell it at the resalePrice (65% retailPrice) and make at least 32% profit (of course the lower you buy it the more money you make)
// Resale Price / 1.68 = Loan or Purchase Value

var purchasePrice = resalePrice / 1.68;  // determine purchasePrice
console.log("Purchase Price = $" + purchasePrice.toFixed(2)); // show purchasePrice

// Get the Date for Loan terms
var months = ["January","February","March","April","May","June","July","August","September","November","December"];

var dateNow = new Date();
var yearNow = dateNow.getFullYear();
var monthNow = months[dateNow.getMonth()];
var dayNow = dateNow.getDate();
var daySuffix;

switch (dayNow)
{
    case 1:
    case 21:
    case 31:
        daySuffix = "st";
        break;
    case 2:
    case 22:
        daySuffix = "nd";
        break;
    case 3:
    case 23:
        daySuffix = "rd";
        break;
    default:
        daySuffix = "th";
        break;
}

console.log(monthNow + " " + dayNow + daySuffix + " " + yearNow);

var loanStart = dateNow.getDate();
var thirtyDays = dateNow.setDate(loanStart + 30);
var sixtyDays = dateNow.setDate(loanStart + 60);

var loanInterest = .25 * purchasePrice; // Pawn law in Florida is 25% interest every 30 days. Default loan period = 60 Days
var pickUpPrice = purchasePrice + loanInterest; // Customers pay the original loan + 25% interest to get their items back
var thirtyDays = pickUpPrice;
var sixtyDays = purchasePrice + loanInterest * 2;
console.log("$" + thirtyDays.toFixed(2) + " to pick up in the first 30 days or $" + sixtyDays.toFixed(2) + " in the second 30 days.");

alert("The Resale Value for the " + itemMan + " " + itemMod + " is $" + resalePrice.toFixed(2));
alert("The Purchase Price for the " + itemMan + " " + itemMod + " is $" + purchasePrice.toFixed(2));
alert("$" + thirtyDays.toFixed(2) + " to pick up in the first 30 days or $" + sixtyDays.toFixed(2) + " in the second 30 days.");