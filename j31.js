// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

var arrays = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
var i = 0;
var new_hash = {};

while( i < arrays.length ) { 
  var keys = arrays[i].id;
  var hash = arrays[i];
  new_hash[keys] = hash;
  i += 1;
}

console.log(new_hash);