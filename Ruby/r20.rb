# Start with an array of strings and create a new array with each string upcased.
# For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

# while
strings = ['hello', 'goodbye']
new_array = []
i = 0 

while i < strings.length
  string = strings[i]
  new_array << string.upcase
  i += 1
end
p new_array


# each 
strings1 = ['hello', 'goodbye']
new_array1 = []

strings1.each do |string|
  new_array1 << string.upcase
end 

p new_array


# times 
strings2 = ['hello', 'goodbye']
new_array2 = []

strings2.length.times do |i|
  string = strings2[i]
  new_array2 << string.upcase
end
p new_array2

# map 

strings4 = ['hello', 'goodbye']
new_array4 = []

new_array4 = strings4.map { |string| string.upcase }
p new_array4