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
// du fichier avec String.prototype.replace() MDN et Date.now().getTime()
// les urls par des urls se terminant par ?325236243623
// 5 - Utiliser webpack en JS plutot qu'en ligne de commande (voir doc webpack)

try {
    let data = fs.readFileSync('index.html');
    fs.writeFileSync('dist/index.html', data.toString());
    console.log('indexs.html copied');
}
catch (err) {
    console.log(err);
}
