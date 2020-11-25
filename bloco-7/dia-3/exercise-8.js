const assert = require('assert');

function wordLengths(arr) {
  const array = [];

  for (let i in arr) {
    array.push(arr[i].length);
  }

  return array;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
