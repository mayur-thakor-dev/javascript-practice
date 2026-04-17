// acending and descending order in js (for number and string)

// for string

let names = ["mayur", "antrral", "rohit", "om", "karan", "anil", "prakash"];

console.log(names.sort());

// for numbers (ascending order)

let numbers1 = [21, 43, 24, 65, 76, 34, 58, 87, 4];

console.log(numbers1.sort((a, b) => {
    return a - b
}))

// for numbers (decending order)

let numbers2 = [21, 43, 24, 65, 76, 34, 58, 87, 4];

console.log(numbers2.sort((a, b) => {
    return b - a;
}))

// write a program for add to number        
        