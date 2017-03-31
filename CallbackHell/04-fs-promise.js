const fs = require('fs-promise');
const path = require('path');

const filePath = path.resolve(__dirname, 'logs', 'app.log');

fs.appendFile(filePath, 'Ligne 1\n')
    .then(() => fs.appendFile(filePath, 'Ligne 2\n'))
    .then(() => fs.appendFile(filePath, 'Ligne 3\n'))
    .then(() => console.log('3 logs done'))
    .catch(err => console.log(err));

Promise.all([
    fs.appendFile(filePath, 'Ligne 1\n'),
    fs.appendFile(filePath, 'Ligne 2\n'),
    fs.appendFile(filePath, 'Ligne 3\n')
])
    .then((array) => console.log(`${array.length} logs done`))
    .catch(err => console.log(err));