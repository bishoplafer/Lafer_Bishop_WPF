// Bishop Lafer
// Functions_Industry
// July 28, 2013

// Collect Customer Information
var newCustomer = function(){
	firstName = prompt("Customer's First Name?","First Name");
	lastName = prompt("Customer's Last Name?", "Last Name");
	bMonth = parseInt(prompt("What month were you born in?(1-12)","MM"));
	bDay = parseInt(prompt("What day were you born on?(1-31)","DD"));
	bYear = parseInt(prompt("What year were you born in?","YYYY"));
	birthDay = new Date();
	birthDay.setDate(bDay);
	birthDay.setMonth(bMonth);
	birthDay.setFullYear(bYear);
	customerBirthDay = birthDay.getMonth()+"/"+birthDay.getDate()+"/"+birthDay.getFullYear();
	sex = prompt("Is the customer Male or Female?","M or F");
	race = prompt("What is the Customer's Race?\n(W)White, (B)Black, (H)Hispanic, (A)Asian, (O)Other","");
	heightFeet = prompt("How many feet tall is the customer?","");
	heightInches = prompt("How many inches?","");
	height = heightFeet + "'" + heightInches + '"';
	weight = parseInt(prompt("How much does the Customer weigh?", ""));
	phone = prompt("What is the Customer's Phone Number?", "(XXX) XXX-XXXX");
	email = prompt("What is the Customer's Email Address?", "@");
	address = prompt("What is the Customer's Street Address?", "");
	city = prompt("What City?", "City");
	state = prompt("What State?", "State");
	zip = prompt("What is the zipcode?", "Zip");
	customerAddress = new Array(address, city, state, zip);
	var customer = new Array(firstName, lastName, customerBirthDay, sex, race, height, weight, phone, email, customerAddress);
	console.log(customer);
	return customer;
}

a = newCustomer();
var firstLast = a[0] + " " + a[1];
console.log("Customer: " + firstLast);
var customerBday = a[2];
console.log("Born: " + customerBday);
var customerSex = a[3];
console.log("Sex: " + customerSex);
var customerRace = a[4];
console.log("Race: " + customerRace);
var customerHeight = a[5];
console.log("Height: " + customerHeight);
var customerWeight = a[6];
console.log("Weight: " + customerWeight);
var customerPhone = a[7];
console.log("Phone Number: " + customerPhone);
var customerEmail = a[8];
console.log("Email: " + customerEmail);
var currentAddress = a[9];
console.log("Current Address:\n" + currentAddress[0] + "\n" + currentAddress[1] + ", " + currentAddress[2] + " " + currentAddress[3]);
