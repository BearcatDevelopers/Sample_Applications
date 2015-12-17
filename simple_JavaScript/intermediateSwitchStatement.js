var answer = prompt("Do you like coding? Enter Y or N");
answer = String(answer);
answer = answer.toLowerCase();

switch(answer){
	case "y":
		alert("Good! Me too!");
		break;
	case "n":
		alert("That's unfortunate...");
		break;
	default: 
		alert("You didn't pick Y or N!")
}
