const net = require('net');
const readline = require('readline');

const server = net.createServer((c) => {
    console.log('Client connected');
    c.write('Hello\n');
    const rl = readline.createInterface({
        input: c
    });

    c.on('close', () => {
        console.log('Client disconnected');
    });

    rl.on('line', line => {
        console.log('Client : ' + line);
    });

});

server.listen(1234, () => {
   console.log('Server started');
});