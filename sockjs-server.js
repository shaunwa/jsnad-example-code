const http = require('http');
const sockjs = require('sockjs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello client');
});

const sockjsServer = sockjs.createServer();

let openConnections = [];

function broadcast(message) {
    openConnections.forEach(conn => {
        conn.write(message);
    });
}

sockjsServer.on('connection', conn => {
    console.log('Received a new connection!');
    openConnections.push(conn);

    setTimeout(() => {
        broadcast('Hello from SockJS!');
    }, 10000);

    conn.on('close', () => {
        console.log('Client disconnected!');
        openConnections = openConnections.filter(c => c !== conn);
    });
});

sockjsServer.installHandlers(server, { prefix: '/sockjs' });

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});