var location = 4;
var location = 5;

var guess;
var hits = 0;
var guesses = 0
var isSunk = false;
while (isSunk == false) {
    
    
    guess = prompt("Ready, aim, fire! (enter a number between 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number");
    } else {
        guesses = guesses +1;
    }
  };