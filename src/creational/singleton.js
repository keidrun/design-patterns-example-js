// This might be a singleton object
class Robot {
  constructor(name) {
    this._name = name;
    this._item = 'Roket Punch';
  }
  _sayName() {
    console.log('I am ' + this._name + '!');
  }
  name() {
    return this._name;
  }
  readMind(personName) {
    const goodJudgement = ' are very honest and kind.';
    const badJudgement = ' are liar and criminal!!';
    const message =
      Math.floor(Math.random() * 2) === 0
        ? personName + goodJudgement
        : personName + badJudgement;
    this._sayName();
    console.log('I am reading ' + personName + "'s mind...");
    console.log(message);
  }
  changeItem(item) {
    this._item = item;
  }
  fight() {
    this._sayName();
    console.log('He used ' + this._item + '!!');
    console.log('GGGGGGGGGGGGGGG!!!!!');
  }
}

// Generator for a singleton object
const RobotGeneratorSingleton = (() => {
  let instance;

  function init() {
    let _availableRobots = [];

    function create(name) {
      const robot = new Robot(name);
      return robot;
    }

    function addAvailable(robot) {
      _availableRobots.push(robot);
    }

    function showAvailableRobots() {
      console.log('---- Available Robots ----');
      _availableRobots.forEach(robot => {
        console.log(robot.name());
      });
    }

    return {
      create: create,
      addAvailable: addAvailable,
      showAvailableRobots: showAvailableRobots
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

// Test
const rg = RobotGeneratorSingleton.getInstance();
const robotA = rg.create('Adam');
const robotB = rg.create('Ibu');

robotA.readMind('Tom');
robotA.fight();

robotB.changeItem('Super Beam');
robotB.fight();

rg.addAvailable(robotA);
rg.addAvailable(robotB);
rg.showAvailableRobots();
