// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

var numbers = [5, 10, 8, 3, 9];
var min = ''
number2 = numbers[0];

numbers.forEach((number) => { 
  if (number < number2) { 
    number2 = number
  }
  }
)

console.log(number2)


var nums = [5, 10, 8, 3, 9];
minimum = nums[0];
i = 0 ;

while( i < nums.length) { 
  var num = nums[i];
  if (num < minimum) { 
    minimum = num;
  }
  i++
}

console.log(minimum)
