var greetModule = (function() {
  var _message = 'Hello';

  function _greet(name) {
    return _message + ', ' + name + '.';
  }

  function introduce() {
    console.log(_greet('Keid') + " I'm the God of JS.");
  }

  return {
    introduce: introduce
  };
})();

greetModule.introduce();
