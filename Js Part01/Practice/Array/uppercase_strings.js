// using map() method, convert string array into string array uppercase letter;

const stringArray = ["hello", "world", "javascript", "array", "practice"];

let upperCaseArray = stringArray.map( (currElm) => {
        return currElm.toUpperCase();
})

console.log(upperCaseArray);