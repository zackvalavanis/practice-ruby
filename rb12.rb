# Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

puts 'Please enter your name.'
name = gets.chomp 

if name != 'Santa'
  puts "you\'re not Santa."
else puts "You are Santa!"
end 

