// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var arrays = [2, 32, 80, 18, 12, 3]
var new_array = []
var i = 0 

while(i < arrays.length) { 
  var array = arrays[i];
  if( array < 20 ) { 
    new_array.push(array);
  }
  i += 1
}

console.log(new_array)


// Each method 

