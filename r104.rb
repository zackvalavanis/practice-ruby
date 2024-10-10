# Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
# For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].


strings = ["a", "b", "c", "d"];
new_array = [];
index = 0
index2 = 0

while index < strings.length 
  index2 = 0
  while index2 < strings.length 
    if index != index2
      new_array << strings[index] + strings[index2]
    end 
    index2 += 1
  end 
index += 1
end 

p new_array
