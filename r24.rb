#// Start with an array of numbers and create a new array with each number times 3.
#// For example, [1, 2, 3] becomes [3, 6, 9].

arrays = [1,2,3]
new_array = []

new_array << arrays.map { |number| number * 3 }

pp new_array