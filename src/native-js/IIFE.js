(function(consoleLog) {
  var greetModule = (function() {
    var _message = 'Hello';

    function _greet(name) {
      return _message + ', ' + name + '.';
    }

    function introduce() {
      consoleLog(_greet('Keid') + " I'm the God of JS.");
    }

    return {
      introduce: introduce
    };
  })();

  greetModule.introduce();
})(console.log);
