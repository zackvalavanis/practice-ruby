// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

var hash = [
  {id: 1, color: "blue", price: 32}, 
  {id: 2, color: "red", price: 12}
] 

new_hash = {};

i = 0 
while (i < hash.length ) { 
  keys = hash[i].id
  values = hash[0]
  // console.log(keys);
  // console.log(values);
  new_hash[keys] = values;
  i ++
}

console.log(new_hash)








// {1 => {id: 1, color: "blue", price: 32}, 
// 2 => {id: 2, color: "red", price: 12}}.