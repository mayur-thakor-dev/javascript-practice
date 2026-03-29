// To check number is positive, negetive, or zero

let prompt = require("prompt-sync")();
let number = Number(prompt("Enter a number to check(positive/negetive/zero): "));

if (isNaN(number)) {
    console.log("invalid input");
}
else if (number > 0) {
    console.log(`${number} is positive`);
}
else if (number < 0) {
    console.log(`${number} is negetive`);
}else{
    console.log("Given number is zero.");
}