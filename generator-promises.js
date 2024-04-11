function delay(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, ms)
    });
}

const userIds = [1, 2, 3, 4, 5, 6, 7, 8];

function* loadUsers(userIds) {
    for (let userId of userIds) {
        console.log('About to load user ' + userId);
        yield delay(2000, { id: userId, name: 'Shaun', hairColor: 'brown' });
    }
}

async function run() {
    const users = await Promise.all([...loadUsers(userIds)]);
    console.log(users);
    // for (let userPromise of loadUsers(userIds)) {
    //     const user = await userPromise;
    //     console.log(user);
    // }
}

run();