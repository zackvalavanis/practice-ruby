// Start with an array of numbers and create a new array with each number times 3.

// While loop 

var array = [1, 2, 3, 4, 5];
var new_array = [];
var i = 0;

while(i < array.length) { 
  var arra = array[i];
  new_array.push(arra * 3);
  i += 1;
}
console.log(new_array);

// each loop 

var array1 = [1, 2, 3, 4, 5];
var new_array1 = [];

array1.forEach( function (number) { 
  new_array1.push(number * 3);
})
console.log(new_array1);


