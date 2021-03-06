// Objects
class Figure {
  constructor(name, numOfCorners) {
    this._name = name;
    this._numOfCorners = numOfCorners;
  }
  printName() {
    console.log(this._name);
  }
}

class Circle extends Figure {
  constructor() {
    super('Circle', 0);
  }
}

class Triangle extends Figure {
  constructor() {
    super('Triangle', 3);
  }
}

class Square extends Figure {
  constructor() {
    super('Square', 4);
  }
}

class Pentagon extends Figure {
  constructor() {
    super('Pentagon', 5);
  }
}

// Factory of objects
const FigureFactory = () => {
  const create = numOfCorners => {
    let item = new Figure('Unknown');

    if (numOfCorners === 0) {
      item = new Circle();
    } else if (numOfCorners === 3) {
      item = new Triangle();
    } else if (numOfCorners === 4) {
      item = new Square();
    } else if (numOfCorners === 5) {
      item = new Pentagon();
    }

    return item;
  };

  return {
    create: create
  };
};

// Test
const factory = FigureFactory();
const circle = factory.create(0);
circle.printName();
const triangle = factory.create(3);
triangle.printName();
const square = factory.create(4);
square.printName();
const pentagon = factory.create(5);
pentagon.printName();
