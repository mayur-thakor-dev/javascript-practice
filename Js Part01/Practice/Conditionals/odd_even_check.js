// Write program to check number is odd or even 
let prompt = require("prompt-sync")();

let number = Number(prompt("Enter number: "));

if (isNaN(number)) {
    console.log("Invalid Input.");

} else {
    if (number > 0) {

        if (number % 2 == 0) {
            console.log(`${number} is even.`);
        } else {
            console.log(`${number} is odd.`);
        }
    } else {
        console.log(`${number} should be positive.`);
    }
}