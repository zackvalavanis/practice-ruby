# Use a nested loop to find the largest product of any two different numbers within a given array.
# For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

numbers = [5, -2, 1, -9, -7, 2, 6]
max_product = numbers[0] * numbers[1]
index1 = 0 

while index1 < numbers.length 
  current_number = numbers[index1]
  index2 = 0 
  while index2 < numbers.length 
    if index1 != index2
      other_number = numbers[index2]
      product = current_number * other_number
      if product > max_product
        max_product = product
      end
    end
    index2 += 1
  end 
  index1 += 1
end 
p max_product




