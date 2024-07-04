const EventEmitter = require('node:events');

const emitter = new EventEmitter();

const observer1 = () => {
    console.log('Observer 1 received an event1 event!');
}

emitter.on('event1', observer1);

emitter.on('event1', () => {
    console.log('Observer 2 received an event1 event!');
});

emitter.on('event1', () => {
    console.log('Observer 3 received an event1 event!');
});

emitter.on('event2', () => {
    console.log('Observer 4 received an event2 event!');
});

emitter.emit('event1');
emitter.removeListener('event1', observer1);
emitter.removeAllListeners();
emitter.emit('event1');
