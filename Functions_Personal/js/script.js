// Bishop Lafer
// Functions_Personal
// July 27, 2013

// determine pickup amount of loan when customer comes back to get item.
// it costs the loan plus the interest for the amount of time the item has been in pawn to get out
// interest is 25% per 30 days
// determine interest by number of days between loanStart date and pickUp date

// Ask the User what day the loan started on.

function LoanStart(){	
	var loanStartMonth = parseInt(prompt("What month did your loan start in?(1-12)","MM"));
	var loanStartDay = parseInt(prompt("What day did your loan start on?(0-31)","DD"));
	var loanStartYear = parseInt(prompt("What Year did your loan start in?","YYYY"));
	var loanStart = new Date(); 
	loanStart.setDate(loanStartDay);
	loanStart.setMonth(loanStartMonth-1);
	loanStart.setFullYear(loanStartYear);
	return loanStart;
}
// Pick Up date is the current date
function PickUp(){
	var pickUp = new Date();
	pickUp.getDate();
	return pickUp;
}
// determine the number of days between when the loan started and the current date
function NumDays(Pickup,LoanStart){
	var timelapse = parseInt((Pickup - LoanStart)/86400000); // time is counted in milliseconds 86400000 is 1 day in milliseconds
	return timelapse;
}
// determine the interest modifier based on number of days between loanstart and pickup
var InterestPeriod = function(numDays){
	var interestPeriod = parseInt(numDays/30) + 1; // parseInt just returns the integer i.e. 0.4 will return 0, also 0.6 (or just over 15 days) will return 0. the default interest period is 1 so I add 1 to the interest modifier
	return interestPeriod;
}
// determine the pickup amount for the loan based on interest modifier
var GetOut = function(interestMod){
	var loan = parseInt(prompt("What was the amount you were loaned?","$"));
	if(interestMod === 0 || interestMod === 1){
		var interest = .25;
	}else{if(interestMod > 1){
			var interest = interestMod * .25;
			}
		}
	console.log("Interest Rate: " + interest);
	var pickUpAmount = loan + interest * loan;
	return pickUpAmount;
}

a = LoanStart();
console.log("Loan Created: " + a.toDateString());
b = PickUp();
console.log("Today's Date: " + b.toDateString());
c = NumDays(b,a);
console.log("Number of days between Loan Start Date and Pick Up Date: " + c);
d = InterestPeriod(c);
console.log("Interest Periods: " + d);
e = GetOut(d);
console.log("It will cost: $" + e + " to Pick Up the Pawn.");




