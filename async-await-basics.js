const fs = require('fs');

// fs.readFile('file-1.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// fs.promises.readFile('file-1.txt', 'utf8')
//     .then(data => console.log(data));

// const dataSync = fs.readFileSync('file-1.txt', 'utf8');
// console.log(data);

async function hello() {
    return 'Hello';
}

async function execute() {
    const data = await fs.promises.readFile('file-1.txt', 'utf8');
    console.log(data);
    return 'Hello from the execute function!'
}
