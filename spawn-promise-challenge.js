const { spawn } = require('node:child_process');

function lsl() {
    return new Promise((resolve, reject) => {
        const child = spawn('ls', ['-l']);

        let collectedData = '';
        
        child.stdout.on('data', data => {
            collectedData += data;
        });

        child.stderr.on('data', data => {
            if (err) {
                reject(err);
                return;
            }
        });

        child.on('close', () => {
            resolve(collectedData);
        });
    });
}

lsl().then(results => {
    console.log(results);
});