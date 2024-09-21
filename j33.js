// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

var arrays = [
  {author: "Jeff Smith", title: "Bone"},
  {author: "George Orwell", title: "1984"}, 
  {author: "Jeff Smith", title: "RASL"}
];

var i = 0;
var hash = {}

while(i < arrays.length) {
  var title = arrays[i].title;
  var author = arrays[i].author;
  if(hash[author] === undefined) { 
    hash[author] = [];
  }
  hash[author].push(title);
  i += 1;
}


console.log(hash);


