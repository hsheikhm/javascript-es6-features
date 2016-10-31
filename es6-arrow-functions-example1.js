/*jshint esversion: 6 */

// ES5:

var addOne = function addOne(a) {
  return a + 1;
};
addOne(1); // 2

var add = function add(a, b) {
  return a + b;
};
add(1, 2); // 3

var addLogged = function addLogged(a, b) {
  var c = a + b;
  console.log(a, '+', b, '=', c);
  return c;
};
addLogged(1, 2); // 1 + 2 = 3 (return 3)

// #############################################################################

// ES6:

var addOne = a => a + 1;
addOne(1); // 2

var add = (a, b) => a + b;
add(1, 2); // 3

var addLogged = (a, b) => {
  let c = a + b;
  console.log(a, '+', b, '=', c);
  return c;
};
addLogged(1, 2); // 1 + 2 = 3 (return 3)
