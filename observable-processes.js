const { Observable, map } = require('rxjs');
const { fork } = require('node:child_process');

function process(filepath, data) {
    return new Observable(subscriber => {
        const cp = fork(filepath);

        cp.on('message', data => {
            subscriber.next(data);
        });

        cp.on('error', err => {
            subscriber.error(err);
        });

        cp.on('disconnect', () => {
            subscriber.complete();
        });

        if (data) {
            cp.send(data);
        }
    });
}

process('./observable-processes-child.js', 10)
    .pipe(map(x => x * 2))
    .subscribe({
        next: data => { console.log(`Received data: ${data}`); },
        error: err => { console.error(`An error occurred: ${err}`); },
        complete: () => { console.log(`The process is done`); },
    });