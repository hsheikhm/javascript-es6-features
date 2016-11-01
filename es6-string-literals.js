/*jshint esversion: 6 */

// ES5:

var nouns = ['ape', 'sandwich', 'pencil'];
var adjectives = ['purple', 'slimey', 'strange', 'huge'];
var adverbs = ['slowly'];

function getRandom() {
  var bank = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['word'];
  return bank[Math.floor(Math.random() * bank.length)];
}

var madlib = '\n  Once upon a ' + nouns[0] + ' there was a ' + adjectives[0] +
  ' ' + nouns[1] + '.\n  Its ' + nouns[2] + ' was ' + adverbs[0] + ' turning ' +
  adjectives[1] + '.\n  1 + 2 = ' + (1 + 2) + '. How ' + getRandom(adjectives) +
  '}...\n';

console.log(madlib);

// Once upon a ape there was a purple sandwich.
// Its pencil was slowly turning slimey.
// 1 + 2 = 3. How strange...

// #############################################################################

// ES6:

let nounsB = ['ape', 'sandwich', 'pencil'];
let adjectivesB = ['purple', 'slimey', 'strange', 'huge'];
let adverbsB = ['slowly'];

function getRandom(bank = ['word']) {
  return bank[Math.floor(Math.random() * bank.length)];
}

let madlibB = `
  Once upon a ${nounsB[0]} there was a ${adjectivesB[0]} ${nounsB[1]}.
  Its ${nounsB[2]} was ${adverbsB[0]} turning ${adjectivesB[1]}.
  1 + 2 = ${1 + 2}. How ${getRandom(adjectivesB)}...
`;

console.log(madlibB);

// Once upon a ape there was a purple sandwich.
// Its pencil was slowly turning slimey.
// 1 + 2 = 3. How strange...
