const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { loadFileCapsCB, loadFileCapsP } = require('./async-test-challenge');

describe('The callbacks version of loadFileCaps', () => {
    it('Loads file contents and converts to caps', (t, done) => {
        loadFileCapsCB('async-test-challenge.txt', (data) => {
            assert.equal(data, 'HELLO ASYNC TESTS!');
            done();
        });
    });
});

describe('The promise version of loadFileCaps', () => {
    it('Loads file contents and converts to caps', () => {
        return loadFileCapsP('async-test-challenge.txt').then((data) => {
            assert.equal(data, 'HELLO ASYNC TESTS!');
        });
    });
});

describe('The promise version of loadFileCaps, tested with async/await', () => {
    it('Loads file contents and converts to caps', async () => {
        const result = await loadFileCapsP('async-test-challenge.txt')
        assert.equal(result, 'HELLO ASYNC TESTS!');
    });
});