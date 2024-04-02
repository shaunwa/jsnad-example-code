const fs = require('fs').promises;

async function exec() {
    const results = await Promise.allSettled([
        fs.readFile('some-text-file.txt', 'utf8'),
        fs.readFile('another-text-file.txt', 'utf8'),
    ])

    const file1 = results[0].value;
    const file2 = results[1].value;

    console.log(file1 + ' ' + file2);

    await Promise.allSettled([
        fs.unlink('some-text-file.txt'),
        fs.unlink('another-text-file.txt'),
    ]);

    console.log('Done!');
}

exec();