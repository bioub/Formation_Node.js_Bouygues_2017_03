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
  res.render('contacts/list', { contacts: contacts });
});

/* Afficher un contact */
router.get('/:id', function(req, res, next) {
    // TODO
});

module.exports = router;
