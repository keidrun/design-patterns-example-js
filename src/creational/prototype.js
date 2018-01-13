// Objects
class Figure {
  constructor(name, numOfCorners) {
    this._name = name;
    this._numOfCorners = numOfCorners;
    this._color = 'white';
  }
  get() {
    return this;
  }
  name() {
    return this._name;
  }
  numOfCorners() {
    return this._numOfCorners;
  }
  color() {
    return this._color;
  }
  changeColor(color) {
    this._color = color;
  }
}

// Prototype
const copyAttr = (src, out) => {
  Object.getOwnPropertyNames(src.prototype)
    .filter(attr => attr !== 'constructor')
    .forEach(attr => {
      out.prototype[attr] = src.prototype[attr];
    });
};

// Test
class Square {
  constructor() {
    this._name = 'Square';
    this._numOfCorners = 4;
    this._color = 'white';
  }
}
copyAttr(Figure, Square);
console.log(Object.getOwnPropertyNames(Square.prototype));

const square = new Square();
console.log(square);
