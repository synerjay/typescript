let character = 'mario';
let age = 30;
let isBlackBelt = false;

age = 31;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(20));

// arrays

let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');

let numbers = [10, 20, 30, 40];

numbers.push(25);
// numbers.push('shaun')
// numbers[1] = 'shaun'

let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// objects

let ninja = {
  name: 'Mario',
  belt: 'black',
  age: 30,
};

ninja.age = 40;
ninja.name = 'Ryu';
// ninja.age = '30'

// ninja.skills = ['fighting', 'sneaking'] // you cannot add more properties any more once it is delcared

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40,
};

// Typescript is a strict biatch
