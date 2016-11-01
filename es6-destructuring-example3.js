/*jshint esversion: 6 */

// ES6:

let people = [];

function addPerson({first = 'John', last = 'Doe', middle = 'wait for it...'} = {}) {
  people.push({first, last, middle});
}

function display() {
  for(let {first, middle, last} of people) {
    console.log(first + ' ' + middle + ' ' + last + ' is awesome.');
  }
}

addPerson({first: 'Ben', last: 'Sparks'});
addPerson({first: 'Jane', middle: 'Q', last: 'Public'});
addPerson({middle: 'Q'});
addPerson();

display();

// Ben wait for it... Sparks is awesome.
// Jane Q Public is awesome.
// John Q Doe is awesome.
// John wait for it... Doe is awesome.
