# Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

while true 
  p 'please enter a word' 
  word = gets.chomp
  if word.downcase == 'stop'
    break 
  end
end