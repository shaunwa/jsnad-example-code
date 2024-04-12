const { exec, execFile } = require('node:child_process');

function lsl() {
    return new Promise((resolve, reject) => {
        exec('ls -l', (err, stdout, stderr) => {
            if (err) {
                reject(err);
                return;
            }

            const fileDataObjects = parseLsOutput(stdout);
            resolve(fileDataObjects);
        });
    });
}

function parseLsOutput(output) {
    const splitStrings = output.split('\n');
    const fileDataStrings = splitStrings.slice(1, splitStrings.length - 1);
    const fileDataObjects = fileDataStrings.map(fds => {
        const pieces = fds.split(/\s+/);
        const object = {
            permissions: pieces[0],
            hardLinks: pieces[1],
            owner: pieces[2],
            group: pieces[3],
            size: pieces[4],
            lastModified: `${pieces[5]} ${pieces[6]} ${pieces[7]}`,
            name: pieces[8],
        };
        return object;
    });

    return fileDataObjects;
}

function python(filePath, ...args) {
    return new Promise((resolve, reject) => {
        execFile('python3', [filePath, ...args], (err, stdout, stderr) => {
            if (err) {
                return reject(err);
            }

            resolve(stdout);
        }); 
    })
}

async function start() {
    const sum = await python('sum.py', 1, 2, 3, 4);
    console.log(Number(sum));
}

start();