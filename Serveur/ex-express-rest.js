const express = require('express');

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

app.get('/api/contacts', (req, res, next) => {
    res.json(contacts);
});

// Retourner en JSON le contact reçu dans l'URL
// Array.prototype.find (ES6)
app.get('/api/contacts/:id', (req, res, next) => {
    let id = req.params.id; // type string

    let contact = contacts.find(contact => contact.id === Number(id));

    if (!contact) {
        res.statusCode = 404;
        return res.json({
            err: 'Contact Not Found'
        });
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
        res.statusCode = 404;
        return res.json({
            err: 'Contact Not Found'
        });
    }

    contacts.splice(i, 1);

    res.statusCode = 204;
    res.end();
});

app.listen(8080, () => {
    console.log('Server started');
});
