// Bishop Lafer
// Functions_Personal
// July 27, 2013

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
	sex = prompt("Is the customer Male or Female?","M or F");
	race = prompt("What is the Customer's Race?\n(W)White, (B)Black, (H)Hispanic, (A)Asian, (O)Other","");
	heightFeet = prompt("How many feet tall is the customer?","");
	heightInches = prompt("How many inches?","");
	height = heightFeet + "'" + heightInches + '"';
	phone = prompt("What is the Customer's Phone Number?", "(XXX) XXX-XXXX");
	email = prompt("What is the Customer's Email Address?", "@");
	address = prompt("What is the Customer's Street Address?", "");
	city = prompt("What City?", "City");
	state = prompt("What State?", "State");
	zip = prompt("What is the zipcode?", "Zip");
	customerAddress = new Array(address, city, state, zip);
	var customer = new Array(firstName, lastName, birthDay.getMonth()+"/"+birthDay.getDate()+"/"+birthDay.getFullYear(), sex, race, height, phone, email, customerAddress);
	console.log(customer);
	return customer;
}

a = newCustomer();
console.log(a);