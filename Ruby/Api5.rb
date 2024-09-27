require 'HTTP'
response = HTTP.get("https://data.sfgov.org/resource/jjew-r69b.json")
food_truck = response.parse

food_truck.first(5).each do |truck|
  p truck['location']
  p truck['locationdesc']
  p truck['optionaltext']
end

