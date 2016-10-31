/*jshint esversion: 6 */

// ES6:

function add(a, b, ...more) {
  return a + b + more.reduce((i, j) => i + j, 0);
}

add(1, 2); // 3
add(1, 2, 3, 4); // 10
