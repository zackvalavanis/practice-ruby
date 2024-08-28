require 'HTTP'
response = HTTP.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json")
data = response.parse
p data


=begin
data.each do |element|
  puts element["job_title"]
  puts element["annual_salary"]
end
=eng