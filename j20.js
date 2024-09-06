//# Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

// while method
var numbers = [1, 2, 3, 4, 5];
var i = 0;
var sum = 0;

while(i < numbers.length) { 
  var number = numbers[i];
  sum += number;
  i += 1; 
}

console.log(sum);

// each method
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function (number){ 
  sum += number;
});
console.log(sum)

// map method

