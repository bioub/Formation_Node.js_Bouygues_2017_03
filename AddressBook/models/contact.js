var mongoose = require('mongoose');

var Contact = mongoose.model('contacts', {
    prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
                return /@/.test(v);
            },
            message: '{VALUE} is not a valid email!'
        },
    },
    telephone: String
});

module.exports = Contact;
