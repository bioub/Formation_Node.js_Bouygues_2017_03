const fs = require('fs');

const distPath = path.resolve(__dirname, 'dist');
const distPath = path.resolve(__dirname, 'dist', 'css');

const createCssDir = function() {
    fs.stat(cssPath, (err, stats) => {
        if (err) {
            return fs.mkdir(distPath, (err) => {

            });
        }

    });
};

fs.stat(distPath, (err, stats) => {
    if (err) {
        return fs.mkdir(distPath, (err) => {
            createCssDir();
        });
    }
    createCssDir();
});
