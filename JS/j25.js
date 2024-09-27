// Start with an array of strings and create a new array with each string upcased.
//For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var strings = ['hello', 'goodbye'];

new_array = strings.map( (word) => word.toUpperCase());

console.log(new_array);


//foreach 

new_array1 = [];
strings.forEach( (word) => { 
  new_array1.push(word.toUpperCase());
});
console.log(new_array1)
