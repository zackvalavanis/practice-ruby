// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.


var strings = 'bookkeeper';
var letterFrequencies = {};
var i = 0;

while( i < strings.length) {
  var letter = strings[i];
  if(letterFrequencies[letter] === undefined) { 
    letterFrequencies[letter] = 0;
  }
    letterFrequencies[letter] += 1;
    i += 1;
}

console.log(letterFrequencies);

