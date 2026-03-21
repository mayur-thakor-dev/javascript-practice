// Guess the Number Game 🎯 using do-while loop
let prompt = require("prompt-sync")();

let secretNumber = 62;
let userInput;

do {
    userInput = parseInt(prompt("Enter number from 1 to 100: "));

    if (isNaN(userInput)) {
        console.log("invalid input, please try again!");
    } else if (userInput > secretNumber) {
        console.log("Too high! try again.");
    } else if (userInput < secretNumber) {
        console.log("Too low! try again.");
    }
} while (userInput != secretNumber)
console.log("Correct 🎉 You guessed the number!");