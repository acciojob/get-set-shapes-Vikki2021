// Complete this code
class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers");
    }
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer");
    }
    super(side, side); // Call Rectangle constructor with same side
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width; // or this._width
  }
}

// const rect = new Rectangle(5, 10);
// console.log(rect.getArea()); // 50

// const sq = new Square(7);
// console.log(sq.getArea()); // 49
// console.log(sq.getPerimeter()); // 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
