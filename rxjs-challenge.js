const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('rxjs-challenge.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    //
});

rl.on('close', () => {
    //
});

rl.on('error', (error) => {
    //
});

readLines('rxjs-challenge.txt').subscribe({
  next: line => console.log('Read line:', line),
  error: err => console.error('Error reading file:', err),
  complete: () => console.log('Finished reading file')
});