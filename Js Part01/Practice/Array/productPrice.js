// Calculate the total price of all products in an array using reduce().

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
const totalPrice = products.reduce( (acc, currElm) => {
       return acc + currElm.price;
}, 0);

console.log(totalPrice);