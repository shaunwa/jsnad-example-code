const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { add, validatePassword, copy, errorFunc } = require('./more-assertions');

describe('Basic utility functions', () => {
    it('Provides a validatePassword function that works', () => {
        assert.ok(validatePassword('abc123!!!!!'));
        assert.notEqual(validatePassword('abc'), true);
    });

    it('Provides an add function that adds correctly', () => {
        assert.equal(add(5, 6), 11);
        assert.equal(add(10, 8), 18);
        assert.equal(add(100, 3), 103);
    });
});

// const obj1 = { a: 1, b: 2, c: 3 };

// assert.deepEqual(obj1, copy(obj1));
// assert.notEqual(obj1, copy(obj1));

// assert.throws(errorFunc, TypeError);