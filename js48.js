// # Start with an array of numbers and create a new array with only the odd numbers.
// # For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var numbers = [2, 4, 5, 1, 8, 9, 7];
let new_array = [];


new_array = numbers.filter((number) => number % 2 !== 0)

console.log(new_array);
