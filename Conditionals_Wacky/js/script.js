// Bishop Lafer
// Conditionals_Wacky
// July 25, 2013

var sex = prompt("Are you a boy or a girl?", "boy");  // is the user a boy or a girl?
var shoeSize = prompt("What size shoe do you wear?", "11"); // what size shoe does the user wear?
// if you are a boy and wear a size 8 or less you have small feet
if(sex.toUpperCase() === "BOY" && shoeSize <= 8){
    console.log("You have small feet.");
    // if you are a boy and wear bigger than an 8 but smaller than an 11 you have average size feet
}else if(sex.toUpperCase() === "BOY" && 8 < shoeSize <= 11){
    console.log("You have average size feet.");
    // if you are a boy and wear bigger then an 11 you have big feet
}else if(sex.toUpperCase() === "BOY" && shoeSize > 11){
    console.log("You have large feet.")
    // if you are a girl and wear a size 5 or less you have small feet
}else if(sex.toUpperCase() === "GIRL" && shoeSize <= 5){
    console.log("You have tiny feet.");
    // if you are a girl and wear bigger than an 5 but smaller than an 10 you have average size feet
}else if(sex.toUpperCase() === "GIRL" && 5 < shoeSize <= 10){
    console.log("You have average size feet.");
    // if you are a girl and wear bigger then an 10 you have big feet
}else if(sex.toUpperCase() === "GIRL" && shoeSize > 10){
    console.log("You have large feet.");
}


