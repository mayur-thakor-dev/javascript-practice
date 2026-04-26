// factorial of n number

let findFactorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

let factorial = findFactorial(5);
console.log(factorial);
