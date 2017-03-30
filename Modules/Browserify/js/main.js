const random = require('./random');

const changeBgColor = function() {
    const r = random.getIntInclusive(0, 255);
    const g = random.getIntInclusive(0, 255);
    const b = random.getIntInclusive(0, 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

changeBgColor();
setInterval(changeBgColor, 1000);
