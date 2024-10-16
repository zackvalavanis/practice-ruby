// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

var hash = [
  {author: "Jeff Smith", title: "Bone"}, 
  {author: "George Orwell", title: "1984"}, 
  {author: "Jeff Smith", title: "RASL"}
] 

i = 0;
new_hash = {};

while( i < hash.length ) { 
  var book = hash[i]
  var author = book.author
  var title = book.title
  if(new_hash[author] === undefined){ 
    new_hash[author] = []
  } 
  new_hash[author].push(title);
  i ++
}

console.log(new_hash)


// {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

