/**
 * Ma fonction addition
 * @param {number} a Le premier nb
 * @param {number} b Le 2e nb
 * @returns {number} La somme
 */
var addition = function (a, b) {
  return a + b;
};

console.log(addition(1, 2)); // 3
console.log(addition('1', '2')); // '12'
console.log(addition(1, 2, 3)); // 3
console.log(addition(1)); // NaN

var addition = function (a, b) {
  if (arguments.length !== 2) {
    throw new Error('addition needs 2 params');
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('both params should be number');
  }
  return a + b;
};

try {
  console.log(addition(1, 2)); // 3
  console.log(addition('1', '2')); // '12'
  console.log(addition(1, 2, 3)); // 3
}
catch (e) {
  if (e instanceof TypeError) {
    console.log(e.message);
  }
  else if (e instanceof Error) {
    console.log(e.message);
  }
}


var addition = function (a, b) {
  var somme = Number(a) + Number(b);

  for (var i=2; i<arguments.length; i++) {
    somme += Number(arguments[i]);
  }

  return somme;
};

var addition = function () {
  var somme = 0;

  for (var nb of arguments) {
    somme += Number(nb);
  }

  return somme;
};

var addition = function (a, b, ...c) {
  var somme = Number(a) + Number(b);

  c.forEach(nb => somme += Number(nb));

  return somme;
};

var addition = function (...nbs) {
  return nbs.reduce((nb, acc) => Number(nb) + acc, 0);
};

// reduce : [1, 2, 3]
// 1, 0 = 1
// 2, 1 = 3
// 3, 3 = 6

console.log(addition(1, 2, 3)); // 6

var addition = function (a, b) {
  if (b === undefined) {
    b = 0;
  }
  return a + b;
};

var addition = function (a, b) {
  b = b || 0;
  return a + b;
};

var addition = function (a, b = 0) {
  return a + b;
};

console.log(addition(1)); // 1

// Pour pouvoir parler de closure il faut :
// 1 - Avoir 2 fonctions imbriquées
// 2 - Que la fonction interne soit appellable à l'extérieur
// (parce que la fonction interne est retournée, ou parce que
// la fonction interne est un callback asynchrone)
// Dans ce cas la portée de la fonction externe est sauvegardée
var logClosure = function(msg) {
  return function() {
    console.log(msg);
  };
};

var logHello = logClosure('Hello');
// ...
logHello();
