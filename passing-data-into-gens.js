const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function* addG() {
    const x = yield 'x: ';
    const y = yield 'y: ';
    yield x + y;
}

const g = addG();

rl.question(g.next().value, (userInput1) => {
    rl.question(g.next(Number(userInput1)).value, (userInput2) => {
        console.log('x + y = ' + g.next(Number(userInput2)).value);
        rl.close();
    });
});

