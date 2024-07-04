const EventEmitter = require('node:events');

class Timer extends EventEmitter {
    constructor(delayMs = 1000) {
        super();
        this.delayMs = delayMs;
    }

    start() {
        const interval = setInterval(() => {
            this.emit('tick');
        }, this.delayMs);
        this.interval = interval;
    }

    stop() {
        clearInterval(this.interval);
    }
}

const timer1 = new Timer(2000);
const timer2 = new Timer(500);

timer1.on('tick', () => {
    console.log('Timer 1!');
});

timer2.on('tick', () => {
    console.log('Timer 2!');
});

timer1.start();
timer2.start();

setTimeout(() => {
    timer1.stop();
    timer2.stop();
}, 5000);