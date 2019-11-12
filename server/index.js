const faker = require('faker');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const ticker = io.of('/simpleValue').on('connection', function(socket) {
    x = 0;
    setInterval(() => {
        const msg = {
            value: Math.cos(x++ / 10) + 1,
        };
        socket.emit('message', msg);
    }, 100);
});

http.listen(4000, function() {
    console.log('listening on *:4000');
});
