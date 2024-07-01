const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { loadData, loadDataP } = require('./test-async');

describe('loadData', () => {
    it('returns the data loaded from the server', (t, done) => {
        loadData('www.blahblahblah.com', (err, data) => {
            assert.ifError(err);
            assert.deepEqual(data, { a: 1, b: 2, c: 3 });
            done();
        });
    });

    it('returns an error if the url is too short', (t, done) => {
        loadData('w', (err, data) => {
            assert(err instanceof TypeError);
            done();
        });
    });
});

describe('loadDataP', () => {
    it('returns the data loaded from the server', () => {
        return loadDataP('www.blahblahblah.com')
            .then(data => {
                assert.deepEqual(data, { a: 1, b: 2, c: 3 });
            });
    });

    it('returns an error if the url is too short', () => {
        assert.rejects(() => loadDataP('w'));
    });
});

describe('loadDataP', () => {
    it('returns the data loaded from the server', async () => {
        const response = await loadDataP('www.blahblahblah.com')
        assert.deepEqual(response, { a: 1, b: 2, c: 3 });
    });

    it('returns an error if the url is too short', async () => {
        try {
            await loadDataP('w');
            assert.fail('Should have thrown an error!');
        } catch (e) {
            assert(e instanceof TypeError);
        }
    });
});