var express = require('express');
var router = express.Router();

const contacts = [{
    prenom: 'John',
    nom: 'Doe',
    id: 123
},{
    prenom: 'Eric',
    nom: 'Martin',
    id: 987
}];

/* Liste des contacts (balise table ou ul) */
router.get('/', function(req, res, next) {
  res.render('contacts/list', {contacts});
});

/* Afficher un contact */
router.get('/:id', function(req, res, next) {
    const id = req.params.id;

    const contact = contacts.find(contact => contact.id === Number(id));

    if (!contact) {
        return next();
    }

    res.render('contacts/show', {contact});
});

module.exports = router;
