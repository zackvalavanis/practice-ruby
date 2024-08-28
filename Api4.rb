require 'http'
response = HTTP.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json")
data = response.parse
pp data