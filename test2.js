let numbers = [1, 2,  4];

// Example 1: Sum of all numbers
let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator / currentValue;
}, 10);

console.log(sum); // Output: 15