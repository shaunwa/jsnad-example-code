const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello client');
});

const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Received a new connection!');

    setTimeout(() => {
        io.emit('event 1', 'Hello!');
    }, 1000);

    setTimeout(() => {
        io.emit('event 2', 'Hello again!');
    }, 2000);

    setTimeout(() => {
        io.emit('event 3', 'Goodbye!');
    }, 3000);

    socket.on('disconnect', () => {
        console.log('Client disconnected!');
    });
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});