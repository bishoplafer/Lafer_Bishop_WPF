// Bishop Lafer
// Conditionals_Personal
// July 25, 2013

// Hot list Item for my Pawn Script from last week
// if the item is on the hot list multiply the new retail price by .80 (80%) for the resale and buy/loan price calculation

// var hotList = prompt("Is item on Hot List? Please Enter Y or N","N");
// (hotList.toUpperCase() === "Y") ?  resalePrice = retailPrice * .8 : resalePrice = retailPrice * .65;

// Get the Date for Loan terms
// months Array containing the names of the months to be printed later
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

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

//I work full time at a Pawn Shop so I decided to use Expressions to do the calculations required for being a succesful pawn broker.
// Determining Loan/Purchase Value of an item based on new retail price
var itemMan = prompt("Please input item Manufacturer"); // declare itemMan variable and prompt user to input manufacturer
console.log("Manufacturer = " + itemMan);
var itemMod = prompt("Please input item Model"); // declare itemMod variable and prompt user to input model
console.log("Model = " + itemMod);
var retailPrice = prompt("Please input New Retail Price"); // declare retailPrice variable and define it
console.log("Retail Price = $" + retailPrice);
var resalePrice;
var hotList = prompt("Is item on Hot List? Please Enter Y or N","N");
(hotList.toUpperCase() === "Y") ?  resalePrice = retailPrice * .8 : resalePrice = retailPrice * .65;
// Determine Resale Price by multiplying retailPrice by .65 (65%)
//var resalePrice = (retailPrice) * .65; // calculate resalePrice
console.log("Resale Price = $" + resalePrice.toFixed(2)); // show resalePrice rounded to 2 decimal places
// Based on Resale Price determine Loan or Purchase value
// I want to buy the item at a price that leaves me enough room to resell it at the resalePrice (65% retailPrice) and make at least 32% profit (of course the lower you buy it the more money you make)
// Resale Price / 1.68 = Loan or Purchase Value
var purchasePrice = resalePrice / 1.68;  // determine purchasePrice
// round number to the nearest multiple of 5
x_rounded = 5 * Math.round(purchasePrice/5);
console.log(purchasePrice + " Rounded to the nearest multiple of 5 is " + x_rounded);
purchasePrice = x_rounded;
var trans = prompt("Is this a Pawn or a Buy?\nPlease type 'Pawn' or 'Buy'.","Buy");
if(trans.toUpperCase() != "PAWN" && trans.toUpperCase() != "BUY"){
    alert("I'm sorry " + trans + " was not recognized.");
    trans = prompt("Please type 'Pawn' or 'Buy'","Buy");

}else if(trans.toUpperCase() === "BUY"){
    console.log("Purchase Price = $" + purchasePrice.toFixed(2)); // show purchasePrice
    alert("The Purchase Price for the " + itemMan + " " + itemMod + " is $" + purchasePrice.toFixed(2));
}else if(trans.toUpperCase() === "PAWN"){
    var loanStart = new Date(); // declare loanStart variable and define it as today's date
    loanStart.setDate(loanStart.getDate()+30);
// var dateThirtyDays = loanStart.setDate(loanStart.getDate() + 30); // declare thirtyDays variable and define it as loanStart + 30 (30 days from start of loan)
    var yearThirtyDays = loanStart.getFullYear(); // declare yearThirtyDays variable and define it as the year 30 days from loanStart
    var monthThirtyDays = months[loanStart.getMonth()]; // declare monthThirtyDays variable and define it as the month 30 days from loanStart (get Month name using months Array)
    var dayThirtyDays = loanStart.getDate(); // declare dayThirtyDays and define it as the day 30 days from loanStart
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
    var dateThirty = monthThirtyDays + " " + dayThirtyDays + dayThirtySuffix + ", " + yearThirtyDays;
    console.log("30 Days from Loan Start is " + monthThirtyDays + " " + dayThirtyDays + dayThirtySuffix + ", " + yearThirtyDays);

    var dateSixtyDays = new Date();
    dateSixtyDays.setDate(dateSixtyDays.getDate()+60);  //declare sixtyDays variable and define it as the date 60 days from loanStart
    var yearSixtyDays = dateSixtyDays.getFullYear(); // declare yearSixtyDays and define it as the year 60 days from loanStart
    var monthSixtyDays = months[dateSixtyDays.getMonth()]; // declare monthSixtyDays and define it as the month 60 days from loanStart (get month name using months Array)
    var daySixtyDays = dateSixtyDays.getDate(); // declare daySixtyDays and define it as the day 60 days from loanStart
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
    var dateSixty = monthSixtyDays + " " + daySixtyDays + daySixtySuffix + ", " + yearSixtyDays;
    console.log("60 Days from Loan Start is " + monthSixtyDays + " " + daySixtyDays + daySixtySuffix + ", " + yearSixtyDays);

    var loanPrice = parseInt(purchasePrice); // declare loanPrice and define it as parseInt(purchasePrice) (for now)
    console.log("Loan Price = $" + loanPrice); //show loanPrice
    var loanInterest = .25 * loanPrice; // Pawn law in Florida is 25% interest every 30 days. Default loan period = 60 Days
    var pickUpPrice = loanPrice + loanInterest; // Customers pay the original loan + 25% interest (per 30 days) to get their items back
    var thirtyDays = pickUpPrice; // declare thirtyDays and define it as the loanPrice + interest (one interest charge for initial 30 days)
    var sixtyDays = loanPrice + loanInterest * 2; // declare and define it as the loanPrice + two interest charges (one for first and second 30 days)
    console.log("$" + thirtyDays.toFixed(2) + " to pick up in the first 30 days or $" + sixtyDays.toFixed(2) + " in the second 30 days.");
    alert("The Pawn Loan value of the " + itemMan + " " + itemMod + " is $" + loanPrice + "\nFor a loan of $" + loanPrice + " on the " + itemMan + " " + itemMod + ":\nIt will be $" + thirtyDays.toFixed(2) + " to pick up by " + dateThirty + ". \nOr $" + sixtyDays.toFixed(2) + " to pick up by " + dateSixty + ".");

}
