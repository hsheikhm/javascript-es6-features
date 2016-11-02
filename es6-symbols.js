/*jshint esversion: 6 */

// ES6:

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

console.log(sym2 === sym3); // false
