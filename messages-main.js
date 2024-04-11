const { fork } = require('node:child_process');

const cp = fork('./messages-child.js');

cp.on('spawn', () => {
    console.log('The child process has spawned');
});

cp.on('error', err => {
    console.log('Something went wrong with the child process!');
});

cp.on('message', data => {
    console.log(`The child process has sent us a message: ${data}`);
});

cp.on('disconnect', () => {
    console.log('The child process has disconnected');
});

cp.on('exit', (code, signal) => {
    console.log(`The child process has exited with code/signal: ${code || signal}`);
});

cp.on('close', (code, signal) => {
    console.log(`The child process is closing with code/signal: ${code || signal}`);
});

cp.kill();
cp.send('Hello!');