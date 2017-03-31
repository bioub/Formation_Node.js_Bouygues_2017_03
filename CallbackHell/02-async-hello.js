const fs = require('fs');
const path = require('path');
const async = require('async');

const filePath = path.resolve(__dirname, 'logs', 'app.log');

async.series([
    callback => fs.appendFile(filePath, 'Ligne 1\n', callback),
    callback => fs.appendFile(filePath, 'Ligne 2\n', callback),
    callback => fs.appendFile(filePath, 'Ligne 3\n', callback),
],
(err, results) => {
    if (err) {
        return console.log('Error');
    }
    console.log('3 logs done');
});
