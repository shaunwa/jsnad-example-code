const assert = require('node:assert');
const { test, mock } = require('node:test');
const { doSomething, db } = require('./mocking');

// test('deleteAllUsers - basic functionality', () => {
//     db.deleteDB = mock.fn(() => console.log('This is just a harmless mock, no users have been deleted!'));
//     deleteAllUsers();

//     assert(db.deleteDB.mock.calls.length === 1);
// }

test('doSomething - basic functionality', () => {
    db.load = mock.fn(() => [{ name: 'user 1' }]);
    db.create = mock.fn(() => console.log('Mocking creating a user'));
    db.delete = mock.fn(() => console.log('Mocking deleting a user'));

    doSomething();

    assert(db.load.mock.calls.length === 1);
    assert(db.create.mock.calls.length === 1);
    assert(db.delete.mock.calls.length === 1);
});