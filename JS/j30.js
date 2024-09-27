// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.


var numbers = [5, 10, 8, 3];
var sum = 0;

var number = numbers.map((number) => sum += number );

console.log(sum);

var numbers = [5, 10, 8, 3];
var i = 0;
var sum = 0;

while(i < numbers.length) { 
  var number = numbers[i];
  sum += number ;
  i += 1;
}

console.log(sum);