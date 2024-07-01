const assert = require('node:assert');
const { test, mock } = require('node:test');
const { deleteAllUsers, db } = require('./mocking');

test('deleteAllUsers - basic functionality', () => {
    db.deleteDB = mock.fn(() => console.log('This is just a harmless mock, no users have been deleted!'));
    deleteAllUsers();

    assert(db.deleteDB.mock.calls.length === 1);
}
