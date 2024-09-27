// Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

while (true) { 
  var word = prompt('enter a word');
  if (word.length <= 5) { 
    console.log('Try again')
  } else { 
    console.log('you entered a word that has more than 5 characters', word);
    break;
  }
}
