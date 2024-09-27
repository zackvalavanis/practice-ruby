# // Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.


while true
  p 'enter a word'
  word = gets.chomp
  if word.length <= 5
    p 'try again'
  else 
    p 'you did it!'
    break
  end 
end 

