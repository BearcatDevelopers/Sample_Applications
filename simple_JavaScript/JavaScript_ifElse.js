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
