/*jshint esversion: 6 */

// ES5:

function Numberwang(wang) {
  this.multiplier = wang;
}

Numberwang.prototype.wang = function(numbers) {
  var _this = this;

  var result = Math.floor(numbers.reduce(function(i, j) {
    return i + j * _this.multiplier;
  }, 0));
  console.log(result);
  return result;
};

var wanger = new Numberwang(2);
wanger.wang([1, 2, 3]); // 12

// #############################################################################

// ES6:

function Numberwang(wang) {
  this.multiplier = wang;
}

Numberwang.prototype.wang = function(numbers) {
  let result = Math.floor(numbers.reduce((i, j) => i + j * this.multiplier, 0));
  console.log(result);
  return result;
};

var wanger = new Numberwang(2);
wanger.wang([1, 2, 3]); // 12
