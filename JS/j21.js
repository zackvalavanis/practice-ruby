//#Start with an array of strings and combine them all into a single string.
// # For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var arrays = ['hello', 'zack', 'valavanis'];
var string = '';
var i = 0;

while(i < arrays.length) { 
  var array = arrays[i];
  string = string + array;
  i += 1;
}
console.log(string)


