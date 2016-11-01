/*jshint esversion: 6 */

// ES5:

var arr = [1, 2, 3];

var x = arr[0],
    y = arr[1],
    z = arr[2];

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

// #############################################################################

// ES6:

let ary = [1, 2, 3];

let [a, b, c] = ary;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
