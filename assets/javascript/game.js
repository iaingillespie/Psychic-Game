

var posibleChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var guessedLetters = [];
var userGuess = 0;
var randomLetter = posibleChoices[Math.floor(Math.random() * posibleChoices.length)];


function reset() {
    remainingGuesses = 9;
    randomLetter = posibleChoices[Math.floor(Math.random() * posibleChoices.length)];
    guessedLetters = []
}


document.onkeyup = function (event) {

    var userGuess = event.key;

    if (posibleChoices.indexOf(userGuess) >= 0) {

        if (guessedLetters.includes(userGuess)) {
            alert("You already tried that one");
            remainingGuesses++;
        }

        if ((userGuess === randomLetter)) {
            wins++;
            guessedLetters.push(userGuess);
            reset();
        }

        if ((userGuess !== randomLetter)) {
            remainingGuesses--;
            guessedLetters.push(userGuess);
        }

        if ((remainingGuesses === 0)) {
            losses++;
            guessedLetters.push(userGuess);
            reset();
        }

        var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Remaining: " + remainingGuesses + "</p>" +
            "<p>Choices so far: " + guessedLetters + " " + "</p>";

        document.querySelector("#game").innerHTML = html;


    }

}

