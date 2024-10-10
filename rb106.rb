# Use a nested loop to convert an array of number pairs into a single flattened array.
# For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

numbers = [[1, 3], [8, 9], [2, 16]]
index = 0 
number = numbers[0][0]
new_array = []

while index < numbers.length
  number1 = numbers[index]
  index2 = 0 
    while index2 < number1.length
      num = number1[index2]
      new_array << num
      index2 += 1
    end
  index += 1
end 
  
p new_array