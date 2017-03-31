const express = require('express');

const contacts = [{prenom: 'Romain'}];

const app = express();

// Route
app.get('/', (req, res, next) => {
    res.send('<h2>Home</h2>');
});

app.get('/hello', (req, res, next) => {
    res.send('<h2>Hello</h2>');
});

app.get('/redirect', (req, res, next) => {
    res.redirect('/');
});

app.get('/contacts', (req, res, next) => {
    // TODO Moteur de template
});

app.get('/api/contacts', (req, res, next) => {
    res.json(contacts);
});

app.listen(8080, () => {
    console.log('Server started');
});
