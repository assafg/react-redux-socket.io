## Template project for Reac-Redux-Socket.io

This repo conains an template for a project using react-redux and socket.io.
It also contains a simple socke.io server for reference.

### Running the demo

1. clone this repo
2. run `docker-compose build`
3. run `docker-compose up`

Now that the servers are up we can dempnstrate the messaging mechaniosm:

Open the RabbiMQ admin `http://127.0.0.1:15672/#/queues/%2F/client-events` and client at `http://localhost:3000`

try sending a simple "hello world" message. The message should apear in the client app.
