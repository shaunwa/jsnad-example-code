const { fork } = require('node:child_process');

console.log('About to start child process...');

const child = fork('./child-process.js');

console.log('Child process started!');

const datasets = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
];

let nextDatasetIndex = 1;

child.send(datasets[0]);

child.on('message', result => {
    console.log(`Received the result ${result} from the child process!`);

    if (datasets[nextDatasetIndex]) {
        child.send(datasets[nextDatasetIndex]);
        nextDatasetIndex += 1;
    } else {
        child.kill();
    }
});