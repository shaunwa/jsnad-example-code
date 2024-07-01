const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8000 });

server.on('connection', ws => {
    console.log('Received a new connection!');

    setTimeout(() => {
        ws.send('Hello from the server!');
        // ws.close(1000, 'Closing after initial message');
    }, 3000);

    ws.on('message', data => { });

    ws.on('close', () => {
        console.log('The connection was terminated');
    });
});

console.log('Websocket server is listening on port 8000');