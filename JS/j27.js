// Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].


var array = [
  {name: "Alice", age: 27}, 
  {name: "Blane", age: 16}
];

var new_array = array.map( (age) => age.age * 2 );

console.log(new_array);


