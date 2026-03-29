// to check year is leapyear or not

let prompt = require("prompt-sync")();
let year = Number(prompt("Enter year to check is it leapyear or not: "));

if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    console.log(`${year} is leapyear`);

} else {
    console.log(`${year} is not leapyear`);
}