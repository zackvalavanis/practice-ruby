# Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:
# If the age is 12 years old or younger, the ticket price is $5.
# If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
# If the customer is 60 years old or older, the ticket price is $7.

def get_input(prompt) # Define method that allows me to quit the program at any time. 
  p prompt
  input = gets.chomp 
  exit if input == "q"
  input
end
p 'Click q to quit program'

while true 
  customers_age = get_input("How old are you?").to_i

  movie_time = get_input("What time is the movie?").to_i

  if customers_age <= 12
    ticket_price = "$5"
  elsif customers_age > 12 && customers_age < 60 && movie_time < 6
    ticket_price = "$7"
  elsif customers_age > 12 && customers_age < 60 && movie_time > 6
    ticket_price = "$10"
  else
    ticket_price = "$7" 
  end
  p ticket_price
end