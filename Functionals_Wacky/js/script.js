// Bishop Lafer
// Functionals_Wacky
// July 28, 2013

// layaway predictions based on total price plus tax and desired monthly payment
var price = prompt("What is the price of the item?","$"); // get item price
var total = price * 1.07+2; // price + sales tax .07 in Florida plus a 2 dollar layaway fee
var months = parseInt(total/100); // 1 month per $100 in total price
(months <= 6) ? months : months = 6; // maximum of 6 months for layaway
var desiredPayment = prompt("Does the Customer have a desired monthly payment?(Y or N)", "N"); // does the customer have a desired monthly payment?
if(desiredPayment.toUpperCase() === "Y"){ // if customer does have desired monthly payment:
	var monthlyPayment = prompt("What is the desired monthly payment?","$"); // what is desired amount?
	var downPayment = total-monthlyPayment*months; // determine downPayment required for desired monthly Payment amount
}else{if(desiredPayment.toUpperCase() === "N"){ // if customer does not have desired monthly payment
		var downPayment = total*.1; // default down payment is 10% of layaway total
		}
	}
// determine layAway based on total, downpayment and how many months	
var LayAway = function(total, downPayment, months){
	var monthTotal = (total-downPayment)/months; // monthly payment = (total - downpayment)/months
	var lay = new Array(total.toFixed(2), downPayment.toFixed(2), monthTotal.toFixed(2), months); // store info in Array
	return lay; // return Array
}

var prediction = LayAway(total, downPayment, months); // call LayAway function
console.log(prediction); // print prediction to console
// organize information in console logically with explanations
console.log("Total with tax and $2 LayAway Fee: $" + prediction[0]);
console.log("Down Payment: $" + prediction[1]);
console.log("Monthly Payment: $" + prediction[2]);
console.log("Number of Payments: " + prediction[3]);

var start = new Date(); // today's date
var firstPayment = new Date(); 
firstPayment.setDate(start.getDate() + 30); // first payment is due in 30 days
console.log("First Payment Due: " + firstPayment.toDateString()); // print first payment to console
var lastPayment = new Date();
lastPayment.setDate(start.getDate() + prediction[3]*30); // last payment is due 30 days * months the item is in layaway
console.log("Last Payment Due: " + lastPayment.toDateString()); // print last payment to console