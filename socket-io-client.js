const io = require('socket.io-client');

const socket = io('http://localhost:8000');

socket.on('connect', () => {
    console.log('Connected to the server!');
});

socket.on('event 1', data => {
    console.log('Received an event 1!: ' + data);
});

socket.on('event 2', data => {
    console.log('Received an event 2!: ' + data);
});

socket.on('event 3', data => {
    console.log('Received an event 3!: ' + data);
});