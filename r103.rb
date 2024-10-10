# Start with an array of numbers and create a new array with only the odd numbers.
# For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

numbers = [2, 4, 5, 1, 8, 9, 7]
new_array = []


new_array = numbers.filter{|number| number %2 != 0}

pp new_array


numbers = [2, 4, 5, 1, 8, 9, 7]
new_array = []

numbers.each do |number|
  if number %2 != 0
    new_array << number
  end 
end 

pp new_array
