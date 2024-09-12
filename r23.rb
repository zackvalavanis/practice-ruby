

arrays = [2, 32, 80, 18, 12, 3]
new_array = []
i = 0 

while i < arrays.length 
  array = arrays[i]
  if array < 20 
    new_array << array 
  end 
  i += 1
end 

pp new_array 

## each method 

arrays = [2, 32, 80, 18, 12, 3]
new_array = []

arrays.each do |element|
  if element < 20 
    new_array << element
  end 
end 

pp new_array 

# maps method


arrays = [2, 32, 80, 18, 12, 3]
new_array = []

new_array = arrays.map { |element| element if element < 20 }.compact
pp new_array

#select method 

arrays = [2, 32, 80, 18, 12, 3]
new_array = []


new_array = arrays.select { |element| element < 20 }

pp new_array