/*
// Booleans are a simple form of Algebra where every value is either TRUE or FALSE.
// Here's how to declare a boolean:
/*
var Boolean = TRUE;
var not_a_Boolean = FALSE;
*/
// Booleans are used as a condition against which other things are tested.

// If/Else functions test if a condition is met and then takes a course of action based on that condition.
// For example:

//var go_bearcats = 2015;


// If you are trying to make a condition equal to something, use "==". If you want it to not equal something, use "!="
// Other conditions include ">, <, >=, <="
// Here are a few examples:

var age = 21;
function ifFunction() {
  if (age < 65) {
      // You can even put an IF statement inside another IF statement!
      if (age > 18) {
      // This is called a cascading function.
        if (age == 21) {
          document.getElementById("i").innerHTML = "Drink Up";
        } else {
            document.getElementById("i").innerHTML = "You are not a minor! Go become informed and vote for something you believe in!";
        }
      } else {
          document.getElementById("i").innerHTML = "You are a minor. Stay off my lawn!"
      }
  }
  else {
    document.getElementById("i").innerHTML = "You are a senior citizen. Your wisdom is invaluable. Thank you.";
  }
}
