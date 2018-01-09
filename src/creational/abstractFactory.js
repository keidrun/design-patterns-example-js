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
  let types = {};

  const create = type => {
    return new types[type]();
  };

  const register = (type, clazz) => {
    if (new clazz() instanceof Figure) {
      types[type] = clazz;
    }
  };

  return {
    create: create,
    register: register
  };
};

// Test
const factory = FigureFactory();
factory.register('circle', Circle);
factory.register('triangle', Triangle);
factory.register('square', Square);
factory.register('pentagon', Pentagon);

const circle = factory.create('circle');
circle.printName();
const triangle = factory.create('triangle');
triangle.printName();
const square = factory.create('square');
square.printName();
const pentagon = factory.create('pentagon');
pentagon.printName();
