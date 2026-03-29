let calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid option";
    }
}
console.log(calculator(0, 30, '/'));
console.log(calculator(3, 30, '*'));
console.log(calculator(90, 30, '+'));
console.log(calculator(67, 30, '-'));