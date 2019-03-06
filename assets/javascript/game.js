//array of letters
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//inital declaration of vars for wins, losses, remaining guesses, guesses so far
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var guessesSoFar = "";
var randomLetter = letters[Math.floor(Math.random()*letters.length)];
console.log(randomLetter);

//functions used to update the page
function updateRandLetter() {
    randomLetter = letters[Math.floor(Math.random()*letters.length)];
    console.log(randomLetter);
}

function updateGuessesSoFar() {
    document.querySelector("#guesses-so-far").innerHTML = "Guesses so far: " + guessesSoFar;
}

function updateRemainingGuesses() {
    document.querySelector("#guesses-left").innerHTML = "Guesses left: " + remainingGuesses;
  }

function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

//write info to the page
updateWins();
updateLosses();
updateRemainingGuesses();
updateGuessesSoFar();

document.onkeyup = function(event) {
    
    var userInput = event.key.toUpperCase();
    if (userInput === randomLetter) {
        updateRandLetter();
        wins++;
        remainingGuesses = 9;
        guessesSoFar = "";
      }
     
      //as long as they have 1 guess left
      else if (remainingGuesses > 1){
        remainingGuesses--;
        guessesSoFar += userInput + ", ";
      }

      //if they run out of guesses left
      else {
        updateRandLetter();
        losses++;
        remainingGuesses = 9;
        guessesSoFar = "";
      }

    //display current wins, losses, remaining guesses, guesses so far
    updateWins();
    updateLosses();
    updateRemainingGuesses();
    updateGuessesSoFar();
}

