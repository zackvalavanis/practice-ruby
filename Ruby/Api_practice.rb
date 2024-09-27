require 'HTTP'
response = HTTP.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json")
data = response.parse

sum_of_salaries = 0

data.each do |element|
  element["job_titles"]
  element["annual_salary"]
  sum_of_salaries += element['annual_salary'].to_i
end

total_amount_jobs = data.count { |element| element["Job_titles"].to_i}

average_salary = sum_of_salaries / total_amount_jobs

pp average_salary

