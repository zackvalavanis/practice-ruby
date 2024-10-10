// # Use a nested loop to find the largest product of any two different numbers within a given array.
// # For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

var numbers = [5, -2, 1, -9, -7, 2, 6];
var maxProduct = numbers[0] * numbers[1]
index1 = 0 

while(index1 < numbers.length) { 
  var currentNumber = numbers[index1];
  var index2 = 0 
    while(index2 < numbers.length) { 
      if (index1 != index2) { 
        otherNumber = numbers[index2]
        var product = currentNumber * otherNumber;
        if( product > maxProduct ){
          maxProduct = product
        }
      }
      index2++
    }
  index1++
}

console.log(maxProduct)
