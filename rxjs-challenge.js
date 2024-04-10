const { Observable, map } = require('rxjs');
const readline = require('readline');
const fs = require('fs');

function readLines(filePath) {
    return new Observable(subscriber => {
        const rl = readline.createInterface({
            input: fs.createReadStream(filePath),
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            subscriber.next(line);
        });

        rl.on('close', () => {
            subscriber.complete();
            rl.close();
        });

        rl.on('error', (error) => {
            subscriber.error(error);
            rl.close();
        });
    });
}

readLines('rxjs-challenge.txt').pipe(map(x => x.toUpperCase())).subscribe({
  next: line => console.log('Read line:', line),
  error: err => console.error('Error reading file:', err),
  complete: () => console.log('Finished reading file')
});