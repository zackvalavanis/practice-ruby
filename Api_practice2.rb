require 'HTTP'
response = HTTP.get("")
data = response.parse

