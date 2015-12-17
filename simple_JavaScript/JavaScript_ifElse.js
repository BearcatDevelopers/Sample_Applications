
// If/Else functions test if a condition is met and then takes a course of action based on that condition.
// For example:
var age = 21;

// If you are trying to make a condition equal to something, use "==". If you want it to not equal something, use "!="
// Other conditions include ">, <, >=, <="
// Here are a few examples:


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
