'use strict';

const readline = require('readline');

const random = require('./random');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Jeu {
    constructor({min = 0, max = 100} = {}) {
        this._min = min;
        this._max = max;
        this._entierAlea = random.getIntInclusive(this._min, this._max);
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

module.exports = Jeu;