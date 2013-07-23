//  Logical Operators
// compare two TRUE or FALSE values
// they compare pairs of relational expressions.
// the comparison results in TRUE or FALSE

// And &&
// Or ||
// Exclusive Or(XOR) ^
// Not !

// And Operator
// requires both in the pair to be true. 
// TRUE && TRUE = TRUE
// TRUE && FALSE = FALSE
// FALSE && TRUE = FALSE
// FALSE && FALSE = FALSE

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

// if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you!!");
}

// OR Operator
// requires at least one of the pair to be true for the whole table to be true.
// TRUE || TRUE = TRUE
// TRUE || FALSE = TRUE
// FALSE || TRUE = TRUE
// FALSE || FALSE = FALSE

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

// if the price of the phone is less than our budget OR if we won the lottery
if(iPhonePrice < budget && wonLottery){
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you!!");
}

// Not Operator
// flips a value
// TRUE becomes FALSE
// FALSE becomes TRUE
// a!=b the same as !(a===b)
// a<b the ame as !(a<b)

// common misconceptions
// a === b === c (incorrect)
// a === b && b === c (correct)

// Remember
// Relational Operators go in between PAIRS of objects
// Logical Operators go in between Relational Expressions or Boolean values.
// Always work in pairs.