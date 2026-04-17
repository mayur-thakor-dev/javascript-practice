//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor

// let fruits = new Array("Mango", "Banana", "Apple");
// console.log(fruits);

//? Using array literal

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

//? we can also create an empty array

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// let colors = ["red","violate","yellow","blue"];

// for(let element of colors){
//     console.log(element);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// let colors = ["red","violate","yellow","blue"];

// for(let element in colors){
//     console.log(element);
// }

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
// let colors = ["red", "violate", "yellow", "blue"];

// colors.forEach((currElm, index, arr) => {
//     console.log(`${currElm}`);
// })

// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

let colors = ["red", "violate", "yellow", "blue"];

let newColorArr = colors.map((currElm, index, arr) => {
    return currElm;
})
console.log(newColorArr);
//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// forEach -  Performs an action on each element
// map -  Creates a new array with transformed elements

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

//? 1: push(): Method that adds one or more elements to the end of an array.
//? 2: pop(): Method that removes the last element from an array.
//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
//? 4: shift(): Method that removes the first element from an array.

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
let fruits = ["apple", "orange", "banana", "mango"];

//! what if you want to add the element at the end
fruits.splice(fruits.length, 0, "Gauva");
console.log(fruits);


//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//? 3: The includes method checks whether an array includes a certain element, returning true or false.

// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)

//todo Challenge time
// const months = ["Jan", "march", "April", "June", "July"];
// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: Update march to March (update)?
// 4: Delete June from an array?

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// Practice time
// !Example 2: Filtering Products by Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];
// Filter products with a price less than or equal to 500

// //! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//? Map(), Reduce(), Filter()
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

// Using map to square each number and create a new array

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.


// ================================================================================

// # 📌 JavaScript Sorting, Map, Filter — Quick Notes

// ## 🔹 1. map()

// 👉 Use when: **You want to transform every element**

// * Returns: **New array (same length)**
// * Changes values

// ### Example:

// ```js
// [1, 2, 3].map(n => n * 2)
// // [2, 4, 6]
// ```

// 💡 Rule:
// “I want to change each item” → use `map()`

// ---

// ## 🔹 2. filter()

// 👉 Use when: **You want to select some elements**

// * Returns: **Subset of array**
// * Keeps only true conditions

// ### Example:

// ```js
// [1, 2, 3, 4].filter(n => n % 2 === 0)
// // [2, 4]
// ```

// 💡 Rule:
// “I want to keep only some items” → use `filter()`

// ---

// ## 🔹 3. Unique Values

// ### Remove duplicates:

// ```js
// const unique = [...new Set(arr)];
// ```

// ### Only values that appear once:

// ```js
// arr.filter(
//   (val, _, self) =>
//     self.indexOf(val) === self.lastIndexOf(val)
// );
// ```

// ---

// ## 🔹 4. sort() Basics

// 👉 `sort()` arranges elements in order

// ⚠️ Default behavior:

// * Converts values to **strings**
// * Can give wrong result for numbers

// ```js
// [10, 2, 5].sort()
// // [10, 2, 5] ❌
// ```

// ---

// ## 🔹 5. Compare Function (MOST IMPORTANT)

// ```js
// arr.sort((a, b) => a - b);
// ```

// ### How it works:

// | Return value | Meaning         |
// | ------------ | --------------- |
// | negative     | `a` comes first |
// | positive     | `b` comes first |
// | 0            | no change       |

// ---

// ## 🔹 6. Sorting Numbers

// ### Ascending:

// ```js
// arr.sort((a, b) => a - b);
// ```

// 👉 Small → Big

// ---

// ### Descending:

// ```js
// arr.sort((a, b) => b - a);
// ```

// 👉 Big → Small

// ---

// ## 🔹 7. Sorting Strings

// ```js
// arr.sort((a, b) => a.localeCompare(b));
// ```

// ---

// ## 🔹 8. Sorting Objects

// ### By number:

// ```js
// users.sort((a, b) => a.age - b.age);
// ```

// ### By string:

// ```js
// users.sort((a, b) => a.name.localeCompare(b.name));
// ```

// ---

// ## 🔹 9. Important Points

// ❗ `sort()` modifies original array

// To avoid mutation:

// ```js
// const sorted = [...arr].sort((a, b) => a - b);
// ```

// ---

// ## 🔹 10. Simple Memory Rules

// * map → transform

// * filter → select

// * sort → arrange

// * `a - b` → ascending

// * `b - a` → descending

// ---

// ## 🔹 11. Best Practice (Real-world)

// ```js
// data
//   .filter(...)
//   .sort(...)
//   .map(...)
// ```

// 👉 First filter → then sort → then map

// ---

// # 🧠 Self-Testing Questions

// 1. Why does `[10, 2].sort()` fail?
// 2. What does `(a, b) => a - b` return?
// 3. Difference between map and filter?
// 4. How to get unique values?
// 5. How to sort objects by name?

// ---

// # 🎯 One-Line Summary

// 👉 map = change
// 👉 filter = keep
// 👉 sort = arrange
// 👉 compare = decide order
