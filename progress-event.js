const EventEmitter = require('node:events');

class ProgressEmitter extends EventEmitter {
    constructor() {
        super();
        this.progress = 0;
    }

    start() {
        this.emit('start');

        const interval = setInterval(() => {
            this.progress += 10;
            this.emit('progress', this.progress);

            if (this.progress >= 100) {
                clearInterval(interval);
                this.emit('done');
            }
        }, 250);
    }
}

const process = new ProgressEmitter();

process.on('start', () => {
    console.log('Process started!');
});

process.on('progress', newProgress => {
    console.log('The process is now ' + newProgress + '% complete');
});

process.on('done', () => {
    console.log('Process completed!');
})

process.start();