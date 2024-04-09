const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function* gatherUserInfo() {
    const fields = ['name', 'age', 'hair color'];
    const userInfo = {};

    for (const field of fields) {
        userInfo[field] = yield `Please enter your ${field}: `;
    }

    yield userInfo;
}

const userInfo = gatherUserInfo();

rl.question(userInfo.next().value, (name) => {
    rl.question(userInfo.next(name).value, (age) => {
        rl.question(userInfo.next(Number(age)).value, (hairColor) => {
            console.log('Here is the user data: ' + JSON.stringify(userInfo.next(hairColor).value));
            rl.close();
        });
    });
});
