const fs = require('fs').promises;

async function start() {
    try {
        const file1 = await fs.readFile('some-text-file.txt', 'utf8')
        const file2 = await fs.readFile('another-text-file.txt', 'utf8');
        console.log(file1 + ' ' + file2); 

        await fs.unlink('some-text-file.txt');
        await fs.unlink('another-text-file.txt');

        console.log('Success!');
    } catch (err) {
        console.log('In "catch" block...');
        console.error(err);
    }
}

start();
