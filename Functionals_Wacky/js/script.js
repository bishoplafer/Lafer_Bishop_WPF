// Bishop Lafer
// Functionals_Wacky
// July 28, 2013

// layaway predictions based on total price plus tax and desired monthly payment
var price = prompt("What is the price of the item?","$");
var total = price * 1.07+2; // price + sales tax .07 in Florida plus a 2 dollar layaway fee
var months = parseInt(total/100); // 1 month per $100 in total price
(months <= 6) ? months : months = 6; // maximum of 6 months for layaway
var desiredPayment = prompt("Does the Customer have a desired monthly payment?(Y or N)", "N");
if(desiredPayment.toUpperCase() === "Y"){
	var monthlyPayment = prompt("What is the desired monthly payment?","$");
	var downPayment = total-monthlyPayment*months;
}else{if(desiredPayment.toUpperCase() === "N"){
		var downPayment = total*.1;
		}
	}
	
var LayAway = function(total, downPayment, months){
	var monthTotal = (total-downPayment)/months;
	var lay = new Array(total.toFixed(2), downPayment.toFixed(2), monthTotal.toFixed(2), months);
	return lay;
}

var prediction = LayAway(total, downPayment, months);
console.log(prediction);
console.log("Total with tax and $2 LayAway Fee: $" + prediction[0]);
console.log("Down Payment: $" + prediction[1]);
console.log("Monthly Payment: $" + prediction[2]);
console.log("Number of Payments: " + prediction[3]);

var start = new Date();
var firstPayment = new Date();
firstPayment.setDate(start.getDate() + 30);
console.log("First Payment Due: " + firstPayment.toDateString());
var lastPayment = new Date();
lastPayment.setDate(start.getDate() + prediction[3]*30);
console.log("Last Payment Due: " + lastPayment.toDateString()); 