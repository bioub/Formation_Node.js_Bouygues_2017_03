const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, 'logs', 'app.log');

const logPromise = function(msg) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, msg + '\n', (err) => {
            if (err) return reject(err);
            resolve();
        })
    });
};

logPromise('Ligne 1')
    .then(() => logPromise('Ligne 2'))
    .then(() => logPromise('Ligne 3'))
    .catch(err => console.log(err));