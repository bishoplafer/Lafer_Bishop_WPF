// Bishop Lafer
// Conditionals_Industry
// July 25, 2013

// I want to improve upon my pawn script by verifying user input for the trans (transaction type) variable
var trans = prompt("Is this a Pawn or a Buy?\nPlease type 'Pawn' or 'Buy'.","Buy"); // ask user is this a pawn or buy
// if user does not input pawn or buy then alert that it was not a recognized input and ask again
if(trans.toUpperCase() != "PAWN" && trans.toUpperCase() != "BUY"){
    alert("I'm sorry " + trans + " was not recognized.");
    trans = prompt("Please type 'Pawn' or 'Buy'","Buy");
// else if user input is converted to all uppercase letter is PAWN
}else if(trans.toUpperCase() === "PAWN"){
    // alert this is a pawn and print to console
    alert("The transaction is a Pawn.");
    console.log("The transaction is a Pawn.");
// else if user input is converted to all uppercase letters is BUY
}else if(trans.toUpperCase() === "BUY"){
    // alert this is a pawn and print to console
    alert("The transaction is a Buy.");
    console.log("The transaction is a Buy.");
}