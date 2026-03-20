const prompt = require("prompt-sync")();

let userAge = Number(prompt("Enter user age: "));
let isCitizen = prompt("Enter citizenship status(citizen/non-citizen): ");
let isRegistered = prompt("Enter registration status(yes/no): ");

// Convert to boolean
isCitizen = (isCitizen === "citizen");
isRegistered = (isRegistered === "yes");

console.log(isCitizen);
console.log(isRegistered);
console.log(userAge < 18);
console.log(!isCitizen);
console.log(!isRegistered);
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