// map() → transforms every item
// filter() → selects some items
// 🧠 Simple Rule to Remember
// If you're saying:
// 👉 “I want to change every element” → use map()
// If you're saying:
// 👉 “I want to keep only some elements” → use filter()


// !Example 2: Filtering Products by Price
// Filter products with a price less than or equal to 500

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Smartwatch", price: 150 },
];

let newProducts = products.filter((currElm) => {
    return currElm.price <= 500;
});

console.log(newProducts);