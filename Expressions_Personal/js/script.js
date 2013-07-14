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
// months Array containing the names of the months to be printed later
var months = ["January","February","March","April","May","June","July","August","September","November","December"];

var dateNow = new Date(); // declare dateNow variable and set it equal to current date (from browser)
var yearNow = dateNow.getFullYear(); // declare yearNow variable and set it equal to current year
var monthNow = months[dateNow.getMonth()]; // declare monthNow variable and set it equal to current month (get name of Month using months Array)
var dayNow = dateNow.getDate(); // declare dayNow variable and set it equal to the current Day
var daySuffix;  // declare daySuffix variable and use a switch statement to provide different suffixes determined by the day of the month

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

console.log(monthNow + " " + dayNow + daySuffix + ", " + yearNow); // show me today's date

var loanStart = dateNow.getDate(); // declare loanStart variable and define it as today's date
var thirtyDays = dateNow.setDate(loanStart + 30); // declare thirtyDays variable and define it as loanStart + 30 (30 days from start of loan)
var yearThirtyDays = dateNow.getFullYear(loanStart + 30); // declare yearThirtyDays variable and define it as the year 30 days from loanStart
var monthThirtyDays = months[dateNow.getMonth(loanStart + 30)]; // declare monthThirtyDays variable and define it as the month 30 days from loanStart (get Month name using months Array)
var dayThirtyDays = dateNow.getDate(loanStart + 30); // declare dayThirtyDays and define it as the day 30 days from loanStart
switch (dayThirtyDays) // use switch statement to get suffix for the day 30 days from loanStart
{
    case 1:
    case 21:
    case 31:
        dayThirtySuffix = "st";
        break;
    case 2:
    case 22:
        dayThirtySuffix = "nd";
        break;
    case 3:
    case 23:
        dayThirtySuffix = "rd";
        break;
    default:
        dayThirtySuffix = "th";
        break;
}
console.log("30 Days from Loan Start is " + monthThirtyDays + " " + dayThirtyDays + dayThirtySuffix + ", " + yearThirtyDays);

var sixtyDays = dateNow.setDate(loanStart + 60);  //declare sixtyDays variable and define it as the date 60 days from loanStart
var yearSixtyDays = dateNow.getFullYear(loanStart + 60); // declare yearSixtyDays and define it as the year 60 days from loanStart
var monthSixtyDays = months[dateNow.getMonth(loanStart + 60)]; // declare monthSixtyDays and define it as the month 60 days from loanStart (get month name using months Array)
var daySixtyDays = dateNow.getDate(loanStart + 60); // declare daySixtyDays and define it as the day 60 days from loanStart
switch (daySixtyDays) // use switch statement to get suffix for the day 60 days from loanStart
{
    case 1:
    case 21:
    case 31:
        daySixtySuffix = "st";
        break;
    case 2:
    case 22:
        daySixtySuffix = "nd";
        break;
    case 3:
    case 23:
        daySixtySuffix = "rd";
        break;
    default:
        daySixtySuffix = "th";
        break;
}
console.log("60 Days from Loan Start is " + monthSixtyDays + " " + daySixtyDays + daySixtySuffix + ", " + yearSixtyDays);

var loanPrice = parseInt(purchasePrice); // declare loanPrice and define it as parseInt(purchasePrice) (for now)
console.log("Loan Price = $" + loanPrice); //show loanPrice
var loanInterest = .25 * loanPrice; // Pawn law in Florida is 25% interest every 30 days. Default loan period = 60 Days
var pickUpPrice = loanPrice + loanInterest; // Customers pay the original loan + 25% interest (per 30 days) to get their items back
var thirtyDays = pickUpPrice; // declare thirtyDays and define it as the loanPrice + interest (one interest charge for initial 30 days)
var sixtyDays = loanPrice + loanInterest * 2; // declare and define it as the loanPrice + two interest charges (one for first and second 30 days)
console.log("$" + thirtyDays.toFixed(2) + " to pick up in the first 30 days or $" + sixtyDays.toFixed(2) + " in the second 30 days.");

alert("The Resale Value for the " + itemMan + " " + itemMod + " is $" + resalePrice.toFixed(2));
alert("The Purchase Price for the " + itemMan + " " + itemMod + " is $" + purchasePrice.toFixed(2));
alert("$" + thirtyDays.toFixed(2) + " to pick up in the first 30 days or $" + sixtyDays.toFixed(2) + " in the second 30 days.");