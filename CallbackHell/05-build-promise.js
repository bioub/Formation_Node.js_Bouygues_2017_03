const fs = require('fs-promise');
const path = require('path');

const distPath = path.resolve(__dirname, 'dist');
const cssDistPath = path.resolve(__dirname, 'dist', 'css');
const cssSrcPath = path.resolve(__dirname, 'src', 'css');

fs.stat(distPath)
    .catch(err => fs.mkdir(distPath))
    .then(() => fs.stat(cssDistPath))
    .catch(err => fs.mkdir(cssDistPath))
    .then(() => fs.readdir(cssSrcPath))
    .then(cssFiles => cssFiles.map(cssFile => fs.copy(path.resolve(cssSrcPath, cssFile), path.resolve(cssDistPath, cssFile))))
    .then(promises => Promise.all(promises))
    .then(results => console.log(`${results.length} css files copied`))
    .catch(err => console.log(err));

/*
['Romain', 'Eric']
    .map(prenom => prenom.toUpperCase())
    .forEach(prenom => console.log(prenom));
    */