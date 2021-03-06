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

let greet: Function; // function is with a capital

greet = () => {
  console.log('Hello Again');
};

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, '20');

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7); // the result variable will inherit the variable type from the function it returns, in this case "number"

// result = "lol" // you cannot set result to a string since the function it was initialized to returns a number

// Type Aliases -- reduces type duplication and making the code more complicated
// like having constants

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greeting = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// type Calc = (a: number, b: number, c: string) => number;

// let calcFunction: Calc = (a, b, c) => {
//   console.log(c);
//   return a + b;
// };

// calcFunction(1, 1, 'number');

// Function Signatures in TypeScript

// let greet: Function;

// example 1
let greetTwo: (a: string, b: string) => void; // this is a function signature
// void means that the function is not returning anything

greetTwo = (name, greeting) => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number; // function signature

calc = (numOne, numTwo, action) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

// example 3
let logDetailsTwo: (obj: { name: string; age: number }) => void;

logDetailsTwo = (ninja) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

logDetailsTwo({ name: 'Ryan', age: 2 });
