

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1 - Remplacer les function declaration
// par des function expression dans des constantes
function getRandom() {
    return Math.random();
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1bis / Remplacer tous les var par let ou const
// 1ter / utiliser le mode strict
// 2 / Remplacer Jeu par une classe
// 3 / Remplacer les 3 premières lignes de options par
// un default params
// ex: https://www.sitepoint.com/es6-default-parameters/
// function createElement (tag = 'div', {
//   content = 'Very default',
//       classNames = ['module-text', 'special']
//   } = {}) { }
var Jeu = function(options) {
    options = options || {};
    this._min = options.min || 0;
    this._max = options.max || 100;
    this._entierAlea = getRandomIntInclusive(this._min, this._max);
    this._essais = [];
};

Jeu.prototype.jouer = function() {
    var that = this;

    if (this._essais.length) {
        // 4 - Utiliser une template string
        console.log('Vous avez déjà joué : ' + this._essais.join(', '));
    }

    // 5 - Utiliser une arrow function et remplacer that par this
    rl.question('Quel est le nombre ? ', function answerCb(reponse) {

        // 6 - Remplacer parseInt et isNaN par Number.parseInt...
        var entierSaisi = parseInt(reponse);

        if (isNaN(entierSaisi)) {
            console.log('Erreur : il faut saisir un nombre');
            return that.jouer();
        }

        that._essais.push(entierSaisi);

        if (entierSaisi < that._entierAlea) {
            console.log('Trop petit');
            return that.jouer();
        }

        if (entierSaisi > that._entierAlea) {
            console.log('Trop grand');
            return that.jouer();
        }

        console.log('Gagné');
        rl.close();
    });
};

var jeu = new Jeu({
    min: 10,
    max: 20
});
jeu.jouer();












