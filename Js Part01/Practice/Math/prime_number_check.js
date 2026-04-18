// write program to check number is prime or not

let prompt = require("prompt-sync")();
let number = Number(prompt("Enter number: "));
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            isPrime = false
            break;
        }
    }
}

if (isPrime) {
    console.log(`${number} is prime number`);
} else {
    console.log(`${number} is not prime number`);
}