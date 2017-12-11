var greetModule = (function() {
  var message = 'Hello';

  function greet(name) {
    return message + ', ' + name + '.';
  }

  return {
    introduce: function() {
      console.log(greet('Keid') + " I'm the God of JS.");
    }
  };
})();

greetModule.introduce();
