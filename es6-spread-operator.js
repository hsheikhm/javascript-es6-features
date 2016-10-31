/*jshint esversion: 6 */

// ES5:

var vals = [1, 2];

function add(a, b) {
  return a + b;
}

add.apply(undefined, vals); // 3

// #############################################################################

// ES6:

var vals = [1, 2];

function add(a, b) {
  return a + b;
}

add(...vals); // 3
