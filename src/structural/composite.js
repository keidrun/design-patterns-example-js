// function CompositeController(a) {
//   this.a = a;
// }
// CompositeController.prototype.action = function(act) {
//   let args = Array.prototype.slice.call(arguments);
//   args.shift();
//   for (let item in this.a) {
//     this.a[item][act].apply(this.a[item], args);
//   }
// };

// _cc = new CompositeController(_aCircle);

// function tint(clr) {
//   _cc.action('color', clr);
// }

// function move(left, top) {
//   _cc.action('move', left, top);
// }
