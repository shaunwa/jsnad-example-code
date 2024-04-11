const { fork } = require('node:child_process');

const datasets = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
];

datasets.forEach(dataset => {
    const cp = fork('./calculate-sum.js');

    cp.on('message', result => {
        console.log(`Received the result ${result} from the child process!`);
        cp.kill();
    });

    cp.send(dataset);
});