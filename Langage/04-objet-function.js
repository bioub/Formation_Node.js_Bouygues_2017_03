
var contact = {
  firstName: 'Romain'
};

global.firstName = 'Eric';
this.firstName = 'Jean';

console.log(firstName); // 'Eric';


const hello = function(p1, p2) {
  return `Bonjour ${p1}, bonjour ${p2} je suis ${this.firstName}`;
};

console.log(hello('Toto', 'Titi')); // Bonjour je suis Eric
console.log(hello.call(this, 'Toto', 'Titi')); // Bonjour je suis Jean
console.log(hello.call(contact, 'Toto', 'Titi')); // Bonjour je suis Romain
console.log(hello.apply(contact, ['Toto', 'Titi'])); // Bonjour je suis Romain
console.log(hello.call(contact, ...['Toto', 'Titi'])); // Bonjour je suis Romain
const helloContact = hello.bind(contact);
console.log(helloContact('Toto', 'Titi')); // Bonjour je suis Romain
