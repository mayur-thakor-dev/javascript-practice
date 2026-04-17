// practice forEach and Map method in js

const students = [
    { name: "Mayur", marks: [80, 75, 90] },
    { name: "Rahul", marks: [60, 70, 65] },
    { name: "Amit", marks: [95, 92, 88] }
];

// console.log(students[0].marks[1]);

// Use map() to create a new array where:
// Each student has:
// name
// averageMarks
console.log("Name Array");
let nameArr = students.map((currElm) => {
    // console.log(currElm);
    return currElm.name;
})
console.log(nameArr);

console.log("Avg arr");
let avgArr = students.map((currElm) => {
    let sum = 0;
    let count = 0;
    for (let item of currElm.marks) {
        sum += item;
        count++;
    }
    let avg = sum / count;
    return avg.toFixed(2);
})
console.log(avgArr);


// Use forEach() to:
// Print grade based on average:
// >= 90 → A
// >= 75 → B
// >= 60 → C
// else → Fail

console.log("Add Grade based on Avg makrs")
students.forEach((currElm, index, arr) => {
    console.log(currElm.marks);
    let sum = 0;
    let count = 0;
    for (let item of currElm.marks) {
        sum += item;
        count++;
    }
    let avg = sum / count;
    console.log(avg.toFixed(2));

    if (avg >= 90) console.log("A")
    else if (avg >= 75 && avg <= 90) console.log("B");
    else if (avg >= 60 && avg <= 75) console.log("c")
    else console.log("fail");
})