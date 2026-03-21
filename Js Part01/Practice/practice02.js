const prompt = require("prompt-sync")();

let userAge = Number(prompt("Enter user age: "));
let isCitizen = prompt("Enter citizenship status(citizen/non-citizen): ");
let isRegistered = prompt("Enter registration status(yes/no): ");

// Convert to boolean
isCitizen = (isCitizen === "citizen");
isRegistered = (isRegistered === "yes");

// Logic
// if (userAge < 18) {
//     console.log("not eligible due to age.");
// }
// else if (!isCitizen) {
//     console.log("not eligible due to citizenship status.");
// }
// else if (!isRegistered) {
//     console.log("not eligible due to registration status.");
// }
// else {
//     console.log("eligible to vote.");
// }

if (userAge >= 18) {
    if (isCitizen) {
        if (isRegistered) {
            console.log("eligible to vote.");
        } else {
            console.log("not eligible due to registration status.")
        }
    } else {
        console.log("not eligible due to citizenship status.");
    }
} else {
    console.log("You are not eligible for vote(Younger)");

}