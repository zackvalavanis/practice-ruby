require 'http'
response = HTTP.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json")
data = response.parse

=begin
data.each do |element|
  puts element["annual_salary"]
end
=end
index = 0
max = 0 

while index < data.length 
  element = data[index]
  if max < element["annual_salary"].to_f
     max = element["annual_salary"].to_f
  end
  index += 1
end

pp max

data.each do |element|
  if element["annual_salary"].to_f == max
    puts element["job_titles"]
  end 
end

