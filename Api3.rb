require 'http'
response = HTTP.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json")
data = response.parse
=begin
data.each do |element|
  job_title = element["job_titles"].to_s 
  annual_salary = element["annual_salary"]
  pp "job_title: #{job_title}"
  pp "Annual_salary: #{annual_salary}"
end
=end
new_hash = {}

data.each do |element|
  job_title = element["job_titles"].to_s
  annual_salary = element["annual_salary"].to_f
  new_hash[job_title] = annual_salary
end 

max = 0 

new_hash.each do |job_title, salary|
  if salary > max 
    max = salary 
  end
end

pp max

new_hash.each do |job_title, salary|
  if salary == max
    puts "Job Title: #{job_title}, Salary: #{salary}"
  end 
end
