const fs = require('fs').promises;
const path = require('path');

async function run() {
    try {
        const dirPath = path.join('my-new-dir', 'inner', 'a', 'b', 'c', 'd');
        await fs.mkdir(dirPath, { recursive: true });
        console.log('Done creating directory!');

        const dirContents = await fs.readdir('.');
        console.log(dirContents);

        await fs.rmdir(dirPath);
        await fs.rm('my-new-dir', { recursive: true }); // Be careful!
    } catch (e) {
        console.error(e);
    }
}

run();