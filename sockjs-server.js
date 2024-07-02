const http = require('http');
const sockjs = require('sockjs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello client');
});

const sockjsServer = sockjs.createServer();

sockjsServer.on('connection', conn => {
    console.log('Received a new connection!');

    setTimeout(() => {
        conn.write('Hello from SockJS!');
    }, 2000);

    conn.on('close', () => {
        console.log('Client disconnected!');
    });
});

sockjsServer.installHandlers(server, { prefix: '/sockjs' });

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});