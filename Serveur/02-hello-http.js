const http = require('http');

/*
GET / HTTP/1.1
Host: localhost

*/

const server = http.createServer((req, res) => {
    console.log('Request received');
    console.log(req.url);
    res.end('Coucou');
});

server.listen(8080, () => {
    console.log('Server started');
});
