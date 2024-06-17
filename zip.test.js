const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { zip } = require('./zip');

describe('The zip function', () => {
    it('Combines the arrays into an object when arrays are equal size', () => {
        const arr1 = ['a', 'b', 'c'];
        const arr2 = [1, 2, 3];
        assert.deepEqual(zip(arr1, arr2), { a: 1, b: 2, c: 3 });
    });

    it('Throws an error when the first array is smaller than the second', () => {
        const arr1 = ['a', 'b'];
        const arr2 = [1, 2, 3];
        assert.throws(() => zip(arr1, arr2), TypeError);
    });

    it('Fills the extra values as null when the second array is smaller than the first', () => {
        const arr1 = ['a', 'b', 'c'];
        const arr2 = [1];
        assert.deepEqual(zip(arr1, arr2), { a: 1, b: null, c: null });
    });
});