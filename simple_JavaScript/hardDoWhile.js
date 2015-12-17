var input = prompt("Enter a number 1 - 10!");
input = String(input);
input = input.trim();
checkIfNumber(input);

function checkIfNumber(x) {
	if (x.match(/[a-z]/i)) {
		var newInput = prompt("You didn't enter a number... Try again!");
		newInput = newInput.trim();
		checkIfNumber(newInput);
	} else {
		x = parseInt(x);
		if(x > 10 || x < 1){
			var newInput = prompt("You didn't enter a number between 1 - 10... Try again!");
			newInput = newInput.trim();
			checkIfNumber(newInput);
		} else {
			var i = 1;
			do {
				alert("I'm going to count to " + x + "! ... " + i);
				i++;
			} while(i <= x);
		}
	}
}
