const fs = require('fs').promises;
const path = require('path');

async function run() {
    const fileNames = await fs.readdir('.');

    for (const fileName of fileNames) {
        const stats = await fs.stat(fileName);
        console.log(fileName + ' - ' + stats.size + ' bytes - ' + (stats.isFile() ? 'file' : 'directory'));
    }
}

run();