let calculatePrice = (price, discountPercent = 10) => {
    let discount = (price * discountPercent) / 100;
    return price - discount;
}

console.log(calculatePrice(100));      // 90
console.log(calculatePrice(100, 20));  // 80