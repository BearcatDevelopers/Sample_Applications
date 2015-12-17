var favMonth = prompt("What is your favorite month?");
favMonth = favMonth.trim();
favMonth = String(favMonth);
favMonth = favMonth.toLowerCase();
checkData(favMonth);

function checkData(x) {
	var number = x.match(/\d+/g);
	if(number != null) {
		var newMonth = prompt("You didn't enter a month. Please enter your favorite month!");
		newMonth = newMonth.trim();
		newMonth = String(newMonth);
		newMonth = newMonth.toLowerCase();
		checkData(newMonth);
	} else {
		monthMatch(x);
	}
}

function monthMatch(x) {
	switch(x){
		case "january":
			alert("January is really cold!");
			break;
		case "february":
			alert("Febraury has Valentine's day in it!");
			break;
		case "march":
			alert("March is the beginning of spring!");
			break;
		case "april":
			alert("April is pretty cool!");
			break;
		case "may":
			alert("May is my favorite month too!");
			break;
		case "june":
			alert("June is the beginning of summer!");
			break;
		case "july":
			alert("July is the middle of summer!");
			break;
		case "august":
			alert("August is really hot!");
			break;
		case "september":
			alert("September is the beginning of fall!");
			break;
		case "october":
			alert("October is the month of Halloween!");
			break;
		case "november":
			alert("November is the month of Thanksgiving!");
			break;
		case "december":
			alert("December is the month of Christmas");
			break;
		default:
			alert("Hmm... never heard of that month before!");
	}
}
