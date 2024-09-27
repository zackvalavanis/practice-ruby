# Start with an array of numbers and compute the sum of all the numbers.
# For example, [5, 10, 8, 3] becomes 26.

numbers = [1, 2, 3, 4, 5]
sum = 0 
i = 0 

while i < len(numbers): 
  number = numbers[i]
  sum += number
  i += 1
print(sum)
