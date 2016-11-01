/*jshint esversion: 6 */

// ES5:

function foo(options) {
  var count = options.count;
  var msg = options.msg;

  for(var i = 0; i < count; i++) {
    console.log((i + 1) + '. ' + msg);
  }
}

foo({count: 3, msg: 'something', junk: 88});
// 1. something
// 2. something
// 3. something

// #############################################################################

// ES6:

function foo(options) {
  let {count, msg} = options;

  for(let i = 0; i < count; i++) {
    console.log((i + 1) + '. ' + msg);
  }
}

// OR:

function foo(options) {
  let {count: max, msg} = options;

  for(let i = 0; i < max; i++) {
    console.log((i + 1) + '. ' + msg);
  }
}

foo({count: 3, msg: 'something', junk: 88});
// 1. something
// 2. something
// 3. something
