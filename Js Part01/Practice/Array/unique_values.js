// Write a program to only keep unique value(element)

let numbers = [1, 2, 3, 4, 3, 4, 5, 6, 1, 7, 8, 9];

let filterNumbers = numbers.filter((currElm, idx, arr) => {

    // console.log(currElm);
    // console.log(idx);
    // console.log(arr);
    // console.log(arr.indexOf(currElm));

    return arr.indexOf(currElm) == idx;
})

console.log(filterNumbers);