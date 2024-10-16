//Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

var bloop = {"a": 1, "b": 2, "c": 3} 
var flipped = {}

Object.entries(bloop).forEach(([key, value]) => { 
  flipped[value] = key
})

console.log(flipped);