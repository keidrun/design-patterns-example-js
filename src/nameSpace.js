// Especially on browser
var com = com || {};
com.keidrun = com.keidrun || {};
com.keidrun.pattern = com.keidrun.pattern || {};
com.keidrun.pattern.namespace = com.keidrun.pattern.namespace || {};

com.keidrun.pattern.namespace.greetWorld = {
  message: 'Hello',
  greet: function(name) {
    return this.message + ' ' + name;
  }
};

console.log(com.keidrun.pattern.namespace.greetWorld.greet('Keid'));
