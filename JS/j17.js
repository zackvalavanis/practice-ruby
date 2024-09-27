// Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

while(true) { 
  var input = window.prompt("Please enter a word");
  if (input == 'stop') {
    break;
  }
}

