// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: Update march to March (update)?
// 4: Delete June from an array?

const months = ["Jan", "march", "April", "June", "July"];

console.log("Add Dec at the end of an array")
months.splice(months.length, 0, "Dec");
console.log(months);

console.log("What is the return value of splice method");
console.log(months.splice());

console.log("Update march to March(update)");
let indexUpdate = months.indexOf("march");
months.splice(indexUpdate, 1, "March");
console.log(months);

console.log("delete June from the array");
let indexDelete = months.indexOf("June");
if (indexDelete) {
    months.splice(indexDelete, 1);
    console.log(months);
} else {
    console.log("Given Element is not found in Months array");
}