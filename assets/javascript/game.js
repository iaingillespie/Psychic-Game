

var posibleChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var guessedLetters = [];
var userGuess = 0;
var randomLetter = posibleChoices[Math.floor(Math.random() * posibleChoices.length)];



function consoleTest() {
    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("guessed Letters: " + guessedLetters);
    console.log("User guess: " + userGuess);
    console.log("Random letter: " + randomLetter);
}

function reset() {
    remainingGuesses = 10;
    randomLetter = posibleChoices[Math.floor(Math.random() * posibleChoices.length)];
}

document.onkeyup = function(event) {

    var userGuess = event.key;


    if ((userGuess === randomLetter)) {
        wins++;
        reset();
    }

    if ((userGuess !== randomLetter)) {
        remainingGuesses--;
    }

    if ((remainingGuesses === 0)) {
        losses++;
        reset();
    }

    var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + randomLetter + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses: " + remainingGuesses + "</p>";

    document.querySelector("#game").innerHTML = html;

    consoleTest()

}


