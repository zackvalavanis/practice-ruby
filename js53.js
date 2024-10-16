// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

// {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}



var hash = {'chair': 75, 'book': 15};

var array = [
  {name: "chair", color: "red", weight: 10},
  {name: "book", color: "black", weight: 1}
];


var combined = {};

array.forEach(item => { 
  combined[item.name] = {
    price: hash[item.name], 
    color: item.color, 
    weight: item.weight
  }
})

console.log(combined)

