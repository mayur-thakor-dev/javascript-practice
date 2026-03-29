// star pattern

let row = 5;

for (let i = 1; row >= i; i++) {
    // console.log(i);
    for (let j = 1; i >= j; j++) {
        // console.log(j);
        process.stdout.write("* ");
    }
    console.log();
}