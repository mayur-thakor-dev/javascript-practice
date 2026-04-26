// write a program to check given string is palidrome or not


let checkPalidrome = (str) => {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    if (str === newStr) {
        return `${str} is palidrome string.`
    } else {
        return `${str} is not palidrome string.`
    }
}

console.log(checkPalidrome("racecar"));