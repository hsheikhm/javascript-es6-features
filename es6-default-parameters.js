/*jshint esversion: 6 */

// ES5:

function add(a, b) {
  b = (!b && b !== 0) ? 1 : b;
  return a + b;
}

// #############################################################################

// ES6:

function add(a, b=1) {
  return a + b;
}
