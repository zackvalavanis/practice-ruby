// //Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

var array = [[1, 3], [8, 9], [2, 16]];

var hash = {}
i = 0


while (i < array.length) { 
  var keys = array[i][0]
  var values = array[i][1]
  hash[keys] = values;
  i++
}

console.log(hash)

