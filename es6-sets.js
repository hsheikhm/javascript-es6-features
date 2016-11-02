/*jshint esversion: 6 */

// ES6:

let nums = new Set([1, 2, 3, 4, 5, 6, 6, 6]);

console.log([...nums]); // [1, 2, 3, 4, 5, 6]

nums.add(1);
nums.add(7);

console.log([...nums]); // [1, 2, 3, 4, 5, 6, 7]

nums.has(3); // true

nums.delete(2);
nums.has(2); // false

nums.clear();
console.log([...nums]); // []

nums.add(1).add(2).add(3);

for(let x of nums) {
  console.log(`value: ${x}`);
}
// value: 1
// value: 2
// value: 3
