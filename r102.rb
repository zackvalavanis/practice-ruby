# // // Start with an array of numbers and create a new array with only the even numbers.
# // For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

numbers = [2, 4, 5, 1, 8, 9, 7]
new_array = []

numbers.each do |number|
  if number % 2 == 0 
    new_array << number
  end 
end 

p new_array