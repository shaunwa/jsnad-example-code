const fs = require('fs').promises;
const path = require('path');

async function start() {
    const dirName = 'directory-files-challenge';
    const fileNames = await fs.readdir(dirName);

    for (const fileName of fileNames) {
        const contents = await fs.readFile(path.join(dirName, fileName), 'utf8');
        console.log('Contents of ' + fileName + ': ');
        console.log(contents);
    }
}

start();