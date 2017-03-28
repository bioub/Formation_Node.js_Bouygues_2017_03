// Fonction constructeur avec Closure

var Contact = function(firstName) {
  this.hello = function() {
      return 'Bonjour je suis ' + firstName;
  };
};

var romain = new Contact('Romain');
console.log(romain.hello());

var eric = new Contact('Eric');
console.log(eric.hello());
console.log(romain.hello === eric.hello); // false


// Fonction constructeur avec Prototype

var Contact = function(firstName) {
    this._firstName = firstName;
};

Contact.prototype.hello = function() {
    return 'Bonjour je suis ' + this._firstName;
};

var romain = new Contact('Romain');
console.log(romain.hello());

var eric = new Contact('Eric');
console.log(eric.hello());
console.log(romain.hello === eric.hello); // true

for (var prop in romain) {
    if (romain.hasOwnProperty(prop)) {
        console.log(prop); // '_firstName'
        console.log(romain[prop]); // 'Romain'
    }
}

console.log(romain.lastName); // undefined
