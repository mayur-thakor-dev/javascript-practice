// "From a list of numbers, keep only even ones, then square each of those even numbers."

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evenSquareNumbers = numbers
    .filter(currElm => {
        return currElm % 2 == 0;
    })
    .map((currElm) => {
        // console.log(currElm);
        return currElm * currElm
    })

console.log(evenSquareNumbers);