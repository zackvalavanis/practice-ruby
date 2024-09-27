// // Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var array = [2, 4, 5, 1, 8, 9, 7];
var newArray = [];

array.forEach((a) => { 
  if(a % 2 === 0) { 
    newArray.push(a);
  }
})

console.log(newArray);