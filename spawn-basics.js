const { exec, spawn } = require('node:child_process');
const fs = require('fs');

// {
//     cwd,
//     env: { SOME_DIRECTORY: './my-directory' },
//     // shell: true,
//     // stdio: ['pipe', 'pipe', 'pipe']
//     // detached: true,
// }

const sumProcess = spawn('node', ['sum.js'])

const writePipe = fs.createWriteStream('/tmp/ipc_example');
const readPipe = fs.createReadStream('/tmp/ipc_example_2');

sumProcess.on('close', (code) => {
    console.log(`Ls process completed with code ${code}`);
});

writePipe.write(JSON.stringify([1, 2, 3, 4]));
writePipe.end();

readPipe.on('data', data => {
    console.log(`Received data from child process: ${data.toString()}`);
})