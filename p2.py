#Start with an array of strings and combine them all into a single string.
 # For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

arrays = ['volleyball', 'basketball', 'badminton']
string = ''
i = 0 

while i < len(arrays): 
  array = arrays[i]
  string = string + array
  i += 1
print(string)



