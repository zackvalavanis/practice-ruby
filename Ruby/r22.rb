#Start with an array of strings and combine them all into a single string.
# For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

arrays = ['hello', 'zack', 'valavanis']
string = ''
i = 0 

while i < arrays.length 
  array = arrays[i]
  string << array
  i += 1
end 

pp string

# each 
arrays = ['hello', 'zack', 'valavanis']
string = ''

arrays.each do |element|
  string << element
end 
pp string 

# map method 
arrays = ['hello', 'zack', 'valavanis']
string = ''

arrays.map { |element| string << element }
pp string