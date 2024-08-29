# Start with an array of numbers and create a new array with each number times 3.

arrays = [1, 2, 3, 4, 5]
new_array = []
index = 0 

#While 
while index < arrays.length 
  array = arrays[index]
  new_array << array * 3
  index += 1
end 

pp new_array

# each 
array1 = [1, 2, 3, 4, 5]
array2 = []

arrays.each do |element|
  array2 << element * 3
end

p array2

# times method 

array4 = [1, 2, 3, 4, 5]
array3 = []

array4.length.times do |element|
  array3 << array4[element] * 3
end
pp array3
