const readline = require('readline');

function* add() {
    let sum = 0;

    for (let i = 0; i < 3; i++) {
        const nextNumber = yield `Enter number ${i + 1}: `;
        sum += nextNumber;
    }

    return sum;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const addG = add();

let isDone = false;
let value;

while (!isDone) {
    const result = addG.next(10);
    value = result.value;
    isDone = result.done;
}

console.log(value);

// rl.question(addG.next().value, (x) => {
//     rl.question(addG.next(Number(x)).value, (y) => {
//         rl.question(addG.next(Number(y)).value, (z) => {
//             console.log('The sum is: ' + addG.next(Number(z)).value);
//             rl.close();
//         });
//     });
// });
