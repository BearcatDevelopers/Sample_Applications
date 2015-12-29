#// I declare a variable called date whose value equals the current date as a year, month, and day.
#var date = Date(year, month, day);
#
#//checks if the current date is less than 12/25/2015
#if (date < 2015, 12, 25) {
#  return "It's not Christmas yet, get excited!";
#//checks if the date past 12/25/2015
#} else if (date > 2015, 12, 25){
#  return "Christmas has passed! You're gonna have til next year!";
#//if the date is 12/25/2015
#} else {
#  return "It is Christmas 2015! Merry Christmas!";
#}

#This is the same as the ifElse2.js file!
date = from datetime import timedelta
