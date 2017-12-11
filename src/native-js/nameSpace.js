var com = com || {};
com.keidrun = com.keidrun || {};
com.keidrun.pattern = com.keidrun.pattern || {};
com.keidrun.pattern.namespace = com.keidrun.pattern.namespace || {};

com.keidrun.pattern.namespace.greetWorld = {
  message: 'Hello',
  greet: function(name) {
    return this.message + ', ' + name + '.';
  },
  introduce: function() {
    console.log(this.greet('Keid') + " I'm the God of JS.");
  }
};

com.keidrun.pattern.namespace.greetWorld.introduce();
