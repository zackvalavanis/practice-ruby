// //Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

var hash = {"a": 1, "b": 2, "c": 3, "d": 4};

var array = [];

Object.entries(hash).forEach(([key, value]) => { 
  array.push(key);
  array.push(value);
})

console.log(array)