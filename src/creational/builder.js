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

class Triangle extends Figure {
  constructor() {
    super('Triangle', 3);
  }
}

// Builder
class RedTriangleBuilder {
  constructor() {
    this._triangle = new Triangle();
    this.init();
  }
  init() {
    this._triangle.changeColor('red');
  }
  build() {
    return this._triangle;
  }
}

class GreenTriangleBuilder {
  constructor() {
    this._triangle = new Triangle();
    this.init();
  }
  init() {
    this._triangle.changeColor('green');
  }
  build() {
    return this._triangle;
  }
}

// Test
const redTriangleBuilder = new RedTriangleBuilder();
const redTriangle = redTriangleBuilder.build();
console.log(redTriangle);

const greenTriangleBuilder = new GreenTriangleBuilder();
const greenTriangle = greenTriangleBuilder.build();
console.log(greenTriangle);
