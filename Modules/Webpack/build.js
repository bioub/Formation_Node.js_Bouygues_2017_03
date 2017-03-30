const fs = require('fs');

// Version Asynchrone
/*
fs.readFile('index.html', (err, data) => {
   fs.writeFile('dist/index.html', data.toString(), err => {
       if (!err) console.log('Build success');
   });
});
*/

// 1 - Vérifier si le dossier dist/css existe avec fs.statSync
// 2 - Créer le dossier dist/css dans un block catch s'il n'existe pas
// fs.mkdirSync
// 3 - Copier le fichier CSS dans dist/css
// 4 - Modifier le script ci dessous pour remplacer dans le contenu
// du fichier avec String.prototype.replace() MDN et Date.now()
// les urls par des urls se terminant par ?325236243623
// 5 - Utiliser webpack en JS plutot qu'en ligne de commande (voir doc webpack)
const path = require('path');

try {
    fs.statSync(path.resolve(__dirname, 'dist/css'));
}
catch(err) {
    fs.mkdirSync(path.resolve(__dirname, 'dist/css'));
}

try {
    let dataCss = fs.readFileSync(path.resolve(__dirname, 'css/style.css'));
    fs.writeFileSync(path.resolve(__dirname, 'dist/css/style.css'), dataCss.toString());

    let data = fs.readFileSync(path.resolve(__dirname, 'index.html'));
    let contenuIndex = data.toString();

    let timestamp = Date.now();
    contenuIndex = contenuIndex.replace('/css/style.css', '/css/style.css?' + timestamp);
    contenuIndex = contenuIndex.replace('/bundle.js', '/bundle.js?' + timestamp);

    fs.writeFileSync(path.resolve(__dirname, 'dist/index.html'), contenuIndex);
    console.log('index.html copied');
}
catch (err) {
    console.log(err);
}

var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var compiler = webpack(webpackConfig);
compiler.run(() => {
    console.log('Webpack done');
});