const assert = require('node:assert');
const { double, Counter, reverse } = require('./assertions');

assert(double(2) === 4);
assert(double(3) === 6);
assert(double(100) === 200);

const counter = new Counter(0);
counter.increment();
counter.increment();
counter.increment();
assert(counter.getCount() === 3);

const counter2 = new Counter(99);
assert(counter2.getCount() === 99);

const arr = [1, 2, 3, 4, 5];
assert.deepStrictEqual(reverse(arr), [5, 4, 3, 2, 1]);