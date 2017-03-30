const express = require('express');
const morgan = require('morgan');

const contacts = [{
    prenom: 'John',
    nom: 'Doe',
    id: 123
},{
    prenom: 'Eric',
    nom: 'Martin',
    id: 987
}];

const app = express();

// Middleware de log
app.use(morgan('dev'));
/*
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
*/

app.get('/api/contacts', (req, res, next) => {
    res.json(contacts);
});

// Retourner en JSON le contact reçu dans l'URL
// Array.prototype.find (ES6)
app.get('/api/contacts/:id', (req, res, next) => {
    let id = req.params.id; // type string

    let contact = contacts.find(contact => contact.id === Number(id));

    if (!contact) {
        next();
    }

    res.json(contact);
});

// Supprimer du tableau le contact reçu en entrée
// Faire une réponse vide res.end()
// Avec un status Code 204
// Array.prototype.findIndex (ES6)
// Array.prototype.splice
app.delete('/api/contacts/:id', (req, res, next) => {
    let id = req.params.id; // type string

    let i = contacts.findIndex(contact => contact.id === Number(id));

    if (i === -1) {
        req.errMsg = 'Contact Not Found';
        next();
    }

    contacts.splice(i, 1);

    res.statusCode = 204;
    res.end();
});

app.use('/api', (req, res, next) => {
    res.statusCode = 404;
    return res.json({
        err: req.errMsg || 'Not Found'
    });
});

app.use((req, res, next) => {
    res.statusCode = 404;
    return res.send('<h2>Page not found</h2>');
});

app.listen(8080, () => {
    console.log('Server started');
});
