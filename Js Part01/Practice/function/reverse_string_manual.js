// write a function to reverse a given string  without using built-in function


let reversefunction = (str) => {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reversefunction("Dr. kirit Vadhel"));