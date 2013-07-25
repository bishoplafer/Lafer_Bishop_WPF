// Bishop Lafer
// Conditionals_Personal
// July 25, 2013

// Hot list Item for my Pawn Script from last week
// if the item is on the hot list multiply the new retail price by .80 (80%) for the resale and buy/loan price calculation

var hotList = prompt("Is item on Hot List? Please Enter Y or N","N");
(hotList === "Y") ?  resalePrice = retailPrice * .8 : resalePrice = retailPrice * .65;
