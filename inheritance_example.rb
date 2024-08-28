class Directions
  def initialize
    @speed = 0
    @direction = 'north'
  end

  def brake
    @speed = 0
  end

  def accelerate
    @speed += 10
  end

  def turn(new_direction)
    @direction = new_direction
  end
end

class Car < Directions
  def honk_horn
    puts "Beeeeeeep!"
  end
end

class Bike < Directions
  def ring_bell
    puts "Ring ring!"
  end
end

bikes = Bike.new
cars = Car.new

puts cars.accelerate
puts cars.honk_horn
puts bikes.accelerate
puts bikes.ring_bell
