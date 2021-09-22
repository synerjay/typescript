// let character = 'mario';
// let age = 30;
let isBlackBelt = false;

// age = 31;

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

// let mixed = ['ken', 4, 'chun-li', 8, 9];

// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;

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

// Conclusion: Typescript is a strict biatch

// Explicit Types

let character: string; //initialize but no value yet but type is explicitly typed
// let age: number;
let isLoggedIn: boolean;

// arrays

let ninjas: string[] = [];

ninjas.push('shaun');

//union types - are types that can be either in the selection
let mixed: (string | number | boolean)[] = []; // explicitly declaring the type of array in the mixed variable
mixed.push('hello');
mixed.push(20);
mixed.push(false);

let uid: string | number;
uid = '123';
uid = 123;

let ninjaOne: object;

ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [];

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = { name: 'Mario', age: 20, beltColour: 'black' };

let age: any = 25;

let mixedArray: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);

let ninjaObject: { name: any; age: any };

ninjaObject = { name: 'yoshi', age: 25 };

console.log('test');
