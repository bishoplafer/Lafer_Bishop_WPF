// Ternaries
// Decision making on one line

if(condition){
	do if true;
}else{
	do if false;
}

(condition) ? do if true : do if false;

var gpa = 48;

//if the gpa is over the min 2.0 score, the student can graduate
if(gpa > 2.0){
	console.log("You can graduate!");
}else{
	console.log("GPA is too low!");
}

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");

var age = 11;
var book;

//if the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
if(age < 10){
	book = "Green Eggs and Ham";
}else{
	book = "The Time Machine";
]
console.log(book);

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);





