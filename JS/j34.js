// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(width, height) { 
    this.width = width;
    this.height = height;
  }
  area() { 
    return this.width * this.height;
  }
}

var input = new Rectangle(7, 2);
console.log(input.area());
