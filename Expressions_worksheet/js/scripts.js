// Bishop Lafer
// July 12, 2013
// Expressions Worksheet

// Dog Years
// Dogs age seven times faster than humans. If Sparky is 4 years old in human years how old is he in dog years?
var humanYears = 4; // declare humanYears variable and define it as 4 (This is Sparky's age in human years
var dogYears = humanYears * 7; // declare dogYears variable and define it as 7 times humanYears (This is Sparky's age in dog years)
console.log("Sparky is " + humanYears + " years old, which is " + dogYears + " in dog years");

// Slice of Pie part 1
var pizzaSlices = 8; // declare pizzaSlices variable and define it as 8 (there are 8 slices per pizza)
var guests = 15; // declare guests variable and define it as 15 (there are 15 guests at the party)
var pizzaOrdered = 4; // declare pizzaOrdered variable and define it as 4 (4 pizzas were ordered)
// The number of slices per person = the number of slices per pizza times the number of pizzas ordered divided by the number of party guests)
var slicesEaten = pizzaOrdered * pizzaSlices / guests;
console.log("Each person ate " + slicesEaten + " slices of pizza at the party.");

// Slice of Pie part 2
var sparkySlices = (pizzaOrdered * pizzaSlices) % guests; // Sparky gets the remaining slices after the pizza has been evenly divided up among guests.
console.log("Sparky got " + sparkySlices + " slices of pizza.");

// Average Shopping Bill
var groceryExpenses = [121, 87, 165, 210, 116]; // declare groceryExpenses array and define it with 5 weekly totals
// Total Grocery Expenses for 5 weeks = weekly totals added up
// declare groceryTotal variable and define it as weekly expenses added up
var groceryTotal = groceryExpenses[0] + groceryExpenses[1] + groceryExpenses [2] + groceryExpenses[3] + groceryExpenses[4];
// Average Grocery Expenses = Total divided by number of expenses (in this case 5)
// declare groceryAverage and set it equal to groceryTotal divided by 5
var groceryAverage = groceryTotal / 5;
console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks. That is an average of $" + groceryAverage + " per week.");

// Discounts
var price = 650; // declare price variable and define it as 650
var discount = 20; // declare discount variable and define it as 20
var percentage = discount / 100; // declare percentage variable and define it as discount divided by 100
var item = "Black iPad Mini 64GB with At&t Service"; // declare item variable and define it as iPad Mini
var newPrice = price - price * percentage; // declare newPrice variable and define it as the original price - 20% of the original price
var tax = .07; // declare tax variable and define it as 7% (sales tax in Florida)
var afterTax = newPrice + newPrice * tax; // declare afterTax variable and define it as newPrice plus newPrice times tax
console.log("Your " + item + " was originally $" + price + ", but after a " + discount + "% discount, it is now $" + newPrice + " without tax, and $" + afterTax + " with tax.");
