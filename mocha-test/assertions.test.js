const { double, Counter, reverse } = require('../assertions');
const assert = require('node:assert/strict');

describe('double function', () => {
    it('doubles a number', () => {
        const result = double(5);
        const expected = 10;
        assert.equal(result, expected);
    });

    it('doubles another number', () => {
        const result = double(10);
        const expected = 20;
        assert.equal(result, expected);
    });

    it('doubles zero', () => {
        const result = double(0);
        const expected = 0;
        assert.equal(result, expected);
    });
});

describe('Counter class', () => {
    let counter;

    beforeEach(() => {
        counter = new Counter();
    });

    it('Starts at zero', () => {
        assert.equal(counter.getCount(), 0);
    });

    it('Increments by one each time increment is called', () => {
        counter.increment();
        assert.equal(counter.getCount(), 1);
    });

    it('Increments by one each time increment is called', () => {
        counter.increment();
        counter.increment();
        counter.increment();
        assert.equal(counter.getCount(), 3);
    });
});