# Start with an array of numbers and compute the sum of all the numbers.
# For example, [5, 10, 8, 3] becomes 26.

#while 

# numbers = [1, 2, 3, 4, 5]
# new_array = []
# sum = 0 
# i = 0 

# while i < numbers.length 
#   number = numbers[i]
#   sum += number 
#   i += 1
# end 
# pp sum 

# map method 
numbers = [1, 2, 3, 4, 5]
sum = 0 
numbers.map { |element| sum += element }
pp sum 


# each method 

# numbers = [1, 2, 3, 4, 5]
# sum = 0

# numbers.each do |element| 
#   sum += element 
# end 
# pp sum 
