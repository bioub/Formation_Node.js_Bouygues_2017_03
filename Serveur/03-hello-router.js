const http = require('http');

const contacts = [{prenom: 'Romain'}];

const server = http.createServer((req, res) => {
    let body = '';
    switch (req.url) {
        case '/':
            res.setHeader('Content-type', 'text/html; charset=UTF-8');
            body = '<h2>Home</h2>';
        break;
        case '/hello':
            res.setHeader('Content-type', 'text/html; charset=UTF-8');
            body = '<h2>Hello</h2>';
        break;
        case '/redirect':
            res.statusCode = 302;
            res.setHeader('Content-type', 'text/html; charset=UTF-8');
            res.setHeader('Location', '/');
            body = '<h2>Redirect</h2>';
            break;
        case '/contacts':
            res.setHeader('Content-type', 'text/html; charset=UTF-8');
            body = '<h2>Contact</h2>';
            body += '<ul>';
            contacts.forEach(contact => body += `<li>${contact.prenom}</li>`);
            body += '</ul>';
            break;
        case '/api/contacts':
            res.setHeader('Content-type', 'application/json; charset=UTF-8');
            body = JSON.stringify(contacts);
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/html; charset=UTF-8');
            body = '<h2>Page not found</h2>';
    }
    res.end(body);
});

server.listen(8080, () => {
    console.log('Server started');
});
