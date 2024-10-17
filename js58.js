// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

var strings = ["do", "or", "do", "not", 'steve', 'do']

new_hash = {}

for( i = 0; i < strings.length; i++) { 
  string = strings[i];
    if (new_hash[string] === undefined ){ 
      new_hash[string] = 0
    } 
    new_hash[string] += 1
  // console.log(string)
  // new_hash[string] = i;
}

console.log(new_hash)