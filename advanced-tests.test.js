const { describe, it, test } = require('node:test');
const assert = require('node:assert/strict');
const { add, validatePassword, copy, errorFunc } = require('./more-assertions');

describe.only('Group 1 - Basic utility functions', () => {
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

describe('Group 2 - Testing functions again', () => {
    it('Provides a validatePassword function that works', (t) => {
        assert.ok(validatePassword('abc123!!!!!'));
        assert.notEqual(validatePassword('abc'), true);
    });

    it('Provides an add function that adds correctly', () => {
        assert.equal(add(5, 6), 11);
        assert.equal(add(10, 8), 18);
        assert.equal(add(100, 3), 103);
    });
});

describe('Group 3 - Testing functions again', () => {
    it('Provides a validatePassword function that works', (t) => {
        assert.ok(validatePassword('abc123!!!!!'));
        assert.notEqual(validatePassword('abc'), true);
    });

    it('Provides an add function that adds correctly', () => {
        assert.equal(add(5, 6), 11);
        assert.equal(add(10, 8), 18);
        assert.equal(add(100, 3), 103);
    });
});