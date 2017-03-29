'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1 - Remplacer les function declaration
// par des function expression dans des constantes
const getRandom = function () {
    return Math.random();
};

const getRandomArbitrary = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
class Jeu {
    constructor({min = 0, max = 100} = {}) {
        this._min = min;
        this._max = max;
        this._entierAlea = getRandomIntInclusive(this._min, this._max);
        this._essais = [];
    }

    jouer() {
        if (this._essais.length) {
            // 4 - Utiliser une template string
            console.log(`Vous avez déjà joué : ${this._essais.join(', ')}`);
        }

        // 5 - Utiliser une arrow function et remplacer that par this
        rl.question('Quel est le nombre ? ', reponse => {

            // 6 - Remplacer parseInt et isNaN par Number.parseInt...
            const entierSaisi = Number.parseInt(reponse);

            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : il faut saisir un nombre');
                return this.jouer();
            }

            this._essais.push(entierSaisi);

            if (entierSaisi < this._entierAlea) {
                console.log('Trop petit');
                return this.jouer();
            }

            if (entierSaisi > this._entierAlea) {
                console.log('Trop grand');
                return this.jouer();
            }

            console.log('Gagné');
            rl.close();
        });
    }
}

// Ex : Séparer en 3 fichiers
// random.js (qui exporte un objet et toutes les fonctions random)
// jeu.js (qui exporte la classe Jeu)
// index.js (qui contient les lignes suivantes)
const jeu = new Jeu({
    min: 10,
    max: 20
});
jeu.jouer();












