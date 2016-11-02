/*jshint esversion: 6 */

// ES6:

class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
    this._eyes = 2;
  }

  get eyes() {
    return this._eyes;
  }

  speak() {
    console.log(`The ${this.name} says ${this.voice}.`);
  }
}

var foo = new Animal('dog', 'woof');
foo.speak(); // The dog says woof.
console.log(`${foo.name} has ${foo.eyes} eyes.`); // dog has 2 eyes.

// #############################################################################

class Dog extends Animal {
  constructor() {
    super('dog', 'woof');
  }
}

class Goldfish extends Animal {
  constructor() {
    super('goldfish', 'glub');
  }

  speak() {
    console.log(`${this.name} does not speak.`);
  }
}

var fido = new Dog();
fido.speak(); // The dog says woof.
var goldie = new Goldfish();
goldie.speak(); // goldfish does not speak.

// #############################################################################

class Foo {
  constructor(a) {
    this.a = a * Foo.modifier;
  }

  static get modifier() { // class method
    return 2;
  }

  static bar(instance) { // class method
    if(instance instanceof Foo) {
      console.log('my baby!');
    }
  }
}

let fooB = new Foo(7);
console.log(fooB.a); // 14
Foo.bar(fooB); // my baby!
