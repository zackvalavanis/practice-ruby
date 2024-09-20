// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var hashes = [
  {name: "Alice", age: 27}, 
  {name: "Blane", age: 16}
];

var strings = [];

var strings = hashes.map( (hash) => hash.name );

console.log(strings);



// forEach 

var ha = [
  {name: "Alice", age: 27}, 
  {name: "Blane", age: 16}
];
var string = [];
ha.forEach ( (hash) => {
  string.push(hash.name);
});

console.log(string);