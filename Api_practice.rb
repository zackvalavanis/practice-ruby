require 'HTTP'
response = HTTP.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json")
data = response.parse

data.each do |element|
  puts element["job_titles"]
  puts element["annual_salary"]
end