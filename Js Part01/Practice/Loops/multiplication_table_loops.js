let prompt = require("prompt-sync")();

let number = Number(prompt("Enter number for write table of it: "));

if (isNaN(number) || number < 0) {
    console.log("Invalid number.");
} else {

    let choices = prompt("Enter loop type (while, do-while, for-loop): ").toLowerCase();

    switch (choices) {

        case "while":
            let i = 1;
            while (i <= 10) {
                console.log(`${number} * ${i} = ${number * i}`);
                i++;
            }
            break;

        case "do-while":
            let j = 1;
            do {
                console.log(`${number} * ${j} = ${number * j}`);
                j++;
            } while (j <= 10);
            break;

        case "for-loop":
            for (let k = 1; k <= 10; k++) {
                console.log(`${number} * ${k} = ${number * k}`);
            }
            break;

        default:
            console.log("Invalid loop choice.");
    }
}