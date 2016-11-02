/*jshint esversion: 6 */

// ES6:

var gameGenres = new Map([
  ['Zelda', 'ActionRpg'],
  ['Metroid', 'Platformer']
]);

gameGenres.set('Skyrim', 'Rpg');

gameGenres.get('Zelda'); // ActionRpg

gameGenres.has('Zelda'); // true

gameGenres.delete('Metroid'); // true

gameGenres.has('Metroid'); // false

var Castlevania = {name: 'Castlevania', hero: 'Simon'};

gameGenres.set(Castlevania, 'Metroidvania');

// #############################################################################

var foo = new Map([
  ['a', 1],
  ['b', 2],
  ['foo', 7]
]);

var values = [...foo.values()]; // [1, 2, 7]
var keys = [...foo.keys()]; // ['a', 'b', 'foo']
var entries = [...foo.entries()]; // [['a', 1], ['b', 2], ['foo', 7]]
