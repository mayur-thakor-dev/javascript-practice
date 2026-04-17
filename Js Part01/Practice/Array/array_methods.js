// push, pop, unshift, shift

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

console.log("Push method");
fruits.push("watermelon");
console.log(fruits);

console.log("Pop method");
fruits.pop();
console.log(fruits);

console.log("Unshift method");
fruits.unshift("Graps");
console.log(fruits);

console.log("Shift method");
fruits.shift();
console.log(fruits);

console.log("Slice Method");
fruits.splice(2,3, "cherry", "tometos");
console.log(fruits);


