const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8000 });

server.on('connection', ws => {
    console.log('Received a new connection!');

    ws.on('message', dataRaw => {
        const data = dataRaw.toString();

        if (data.toString() === 'DONE') {
            ws.close(1000, 'Client requested an end to the connection');
        }

        if (data.startsWith('ALL - ')) {
            const [_, message] = data.split(' - ');
            server.clients.forEach(client => {
                client.send(message);
            });
        }

        if (data.startsWith('OTHERS - ')) {
            const [_, message] = data.split(' - ');
            server.clients.forEach(client => {
                if (client !== ws) {
                    client.send(message);
                }
            });
        }
    });

    ws.on('close', () => {
        console.log('The connection was terminated');
    });
});

console.log('Websocket server is listening on port 8000');