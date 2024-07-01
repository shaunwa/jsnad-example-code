const WebSocket = require('ws');

const client = new WebSocket('ws://localhost:8000');

client.on('open', () => {
    console.log('Established a socket connection with the server!');

    setTimeout(() => {
        client.close(1000, 'Client is done');
    }, 3500);
});

client.on('message', data => {
    console.log('Received data from the server: ' + data);
});

client.on('close', () => {
    console.log('The connection to the server was closed');
});