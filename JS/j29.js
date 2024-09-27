// Start with an array of strings and combine them all into a single string, separated by dashes.
// For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

var strings = ["volleyball", "basketball", "badminton"];


var string = strings.reduce( (total, string) => { 
  return total + string + "-";
},"-");

console.log(string);

forEach 

var strings = ["volleyball", "basketball", "badminton"];
var single = '-'

strings.forEach( (word) => single += word + '-');

console.log(single);


