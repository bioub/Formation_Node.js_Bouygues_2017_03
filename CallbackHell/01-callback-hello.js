const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'logs', 'app.log');

fs.appendFile(filePath, 'Ligne 1\n', (err) => {
    if (err) {
        return console.log('Error');
    }
    fs.appendFile(filePath, 'Ligne 2\n', (err) => {
        if (err) {
            return console.log('Error');
        }
        fs.appendFile(filePath, 'Ligne 3\n', (err) => {
            if (err) {
                return console.log('Error');
            }
            console.log('3 logs done');
        });
    });
});