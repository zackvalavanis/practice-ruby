// # Use a nested loop to convert an array of number pairs into a single flattened array.
// # For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

var numbers = [[1, 3], [8, 9], [2, 16]];
var index1 = 0
var new_array = [];

while(index1 < numbers.length) { 
  var index2 = 0;
  var numberArray = numbers[index1];
    while(index2 < numberArray.length) { 
      secondNumber=numberArray[index2]
      new_array.push(secondNumber);
    index2 += 1
  }
  index1 += 1
} 

console.log(new_array)