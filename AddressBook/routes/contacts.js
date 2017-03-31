var express = require('express');
var Contact = require('../models/contact');
var router = express.Router();

/* Liste des contacts (balise table ou ul) */
router.get('/', function(req, res, next) {
    Contact.find((err, contacts) => {
        res.render('contacts/list', {contacts});
    });
});

router.get('/ajouter', (req, res, next) => {
    res.render('contacts/add');
});

router.post('/ajouter', (req, res, next) => {
    const contact = new Contact(req.body);
    contact.save((err, contact) => {
        res.redirect('/contacts/' + contact.id);
    });
});

/* Afficher un contact */
router.get('/:id', function(req, res, next) {
    Contact.findById(req.params.id, (err, contact) => {
        if (!contact) {
            return next();
        }

        res.render('contacts/show', {contact});
    });
});


module.exports = router;
