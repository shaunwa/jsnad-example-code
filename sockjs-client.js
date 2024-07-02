const SockJS = require('sockjs-client');

const sock = new SockJS('http://localhost:8000/sockjs');

sock.onopen = () => {
    console.log('Connected to the server!');
}

sock.onmessage = e => {
    console.log('Received a message: ' + e.data);
}

sock.onclose = () => {
    console.log('Connection closed!');
}
