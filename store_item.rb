# Rewrite your store items using a class instead of a hash.
# Choose which attributes should have “reader” methods and which attributes should have “writer” methods.
# Create an instance from your store item class. Use puts statements to print the 3 attributes individually to the terminal.
# Use the attr_writer method to change a value


class Store
  attr_reader :name, :color, :price
  attr_writer :name, :color
    def initialize(name, color, price)
      @name = name 
      @color = color
      @price = price
    end
    def change_name(new_name)
        @name = new_name
    end
    def change_color(new_color)
      @color = new_color
    end 

end 

pp stores(:name)
pp stores


stores = Store.new('gum', 'red', 3)
pp stores.change_name('pizza')
stores.change_color('blue')
pp stores
