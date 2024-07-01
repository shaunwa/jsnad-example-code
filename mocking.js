function deleteAllUsers() {
    db.deleteDB();
}

function doSomething() {
    const users = db.load();

    // ...
    if (!users) {
        throw new Error('No users!');
    }

    db.create();

    // ...

    db.delete();
}

const db = {
    create() {
        console.log('Creating something...');
    },
    load() {
        return [{
            name: 'user 1',
        }, {
            name: 'user 2',
        }, {
            name: 'user 3',
        }]
    },
    delete() {
        console.log('Deleting something...');
    }
}

module.exports = {
    doSomething,
    deleteAllUsers,
    db,
}