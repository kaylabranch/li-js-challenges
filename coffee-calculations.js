// Given an array of orders (ints) where each value is greater than zero, calculate total price
// Return `The total bill is ${total}`
let orderPrice = 1.25;

function getTotalPrice(ordersPerPerson) {
    return `The total bill is ${ordersPerPerson.reduce((acc, cur) => acc + cur) * orderPrice}`;
}