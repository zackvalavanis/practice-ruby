var vowels = 'aeiou'

function getCount(str) {
  var sum = 0
  var i = 0 
  while(i < str.length){ 
    var letter = str[i]
    if (vowels.includes(letter)){ 
      sum ++
    }
    i++
  }
  return sum 
}


console.log(getCount('aaaaa'))