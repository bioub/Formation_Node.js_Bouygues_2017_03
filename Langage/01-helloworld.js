console.log('Hello, world !');

/**
 * Additionne 2 paramètres
 * @param {number} a Le premier nombre
 * @param {number} b Le 2e nombre
 * @returns {number} La somme des 2 nombres
 */
const addition = function (a, b) {
    return Number(a) + Number(b);
};

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(addition(i, i));
    }
}
