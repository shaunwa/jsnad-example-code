function delay(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, ms)
    })
}

const userIds = [1, 2, 3, 4, 5, 6, 7, 8];

function* loadUsers(userIds) {
    
}

async function run() {
    const result = await delay(3000, 'Done!');
    console.log(result);
}

run();