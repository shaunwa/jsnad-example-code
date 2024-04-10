const { Observable } = require('rxjs');

const observable = new Observable(subscriber => {
    console.log('Starting observable!');
    let count = 0;
    const interval = setInterval(() => {
        subscriber.next(count);
        count++;

        if (count === 3) {
            subscriber.error(new Error('I do not like the number three!'));
        }

        if (count > 5) {
            clearInterval(interval);
            subscriber.complete();
        }
    }, 1000);
});

observable.subscribe({
    next: value => {
        console.log('[S1]: ' + value);
    },
    complete: () => {
        console.log('S1 complete!');
    },
    error: err => {
        console.log('S1 has had an accident!');
    }
});

setTimeout(() => {
    observable.subscribe({
        next: value => {
            console.log('[S2]: ' + value);
        },
        complete: () => {
            console.log('S2 complete!');
        },
        error: err => {
            console.log('S2 has also had accident!');
        }
    });
}, 3000);