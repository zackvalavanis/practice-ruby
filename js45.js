// Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

var prices = { 
  item1: { price: 20 },
  item2: { price: 30 },
  item3: { price: 40 }
}
console.log(prices);

prices.item4 = {price: 50};

console.log(prices);