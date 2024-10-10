// # Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// # For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

var letters = ["a", "b", "c", "d"];
let new_array = [];
let index1 = 0;

while(index1 < letters.length) { 
  var index2 = 0 
    while(index2 < letters.length) { 
    if(index1 !== index2) { 
     new_array.push(letters[index1] + letters[index2]);
    }
    index2++;
  }
  index1++;
}

console.log(new_array);