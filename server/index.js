const faker = require('faker');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const initConnection = async () => {
    try {
        const conn = await require('amqplib').connect('amqp://rabbitmq');
        const q = 'client-events';
        console.log('Creating channel');

        const channel = await conn.createChannel();
        console.log('Channle created');

        await channel.assertQueue(q);
        console.log('Connected to Rabbit');

        channel.consume(q, msg => {
            io.of('simpleValue').emit('message', msg.content.toString());
            channel.ack(msg);
        });
    } catch (err) {
        console.log(err);
    }
};

http.listen(4000, function() {
    setTimeout(initConnection, 20000); // Alow for rabbit server to start when running in compose mode

    console.log('listening on *:4000');
});
