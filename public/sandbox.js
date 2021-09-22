"use strict";
// let character = 'mario';
// let age = 30;
var isBlackBelt = false;
// age = 31;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(20));
// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun')
// numbers[1] = 'shaun'
// let mixed = ['ken', 4, 'chun-li', 8, 9];
// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;
// objects
var ninja = {
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
var character; //initialize but no value yet but type is explicitly typed
// let age: number;
var isLoggedIn;
// arrays
var ninjas = [];
ninjas.push('shaun');
//union types - are types that can be either in the selection
var mixed = []; // explicitly declaring the type of array in the mixed variable
mixed.push('hello');
mixed.push(20);
mixed.push(false);
var uid;
uid = '123';
uid = 123;
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [];
var ninjaTwo;
ninjaTwo = { name: 'Mario', age: 20, beltColour: 'black' };
var age = 25;
var mixedArray = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
var ninjaObject;
ninjaObject = { name: 'yoshi', age: 25 };
console.log('test');
var greet; // function is with a capital
greet = function () {
    console.log('Hello Again');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7); // the result variable will inherit the variable type from the function it returns, in this case "number"
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greeting = function (user) {
    console.log(user.name + " says hello");
};
var greetAgain = function (user) {
    console.log(user.name + " says hello");
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
var greetTwo; // this is a function signature
// void means that the function is not returning anything
greetTwo = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc; // function signature
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetailsTwo;
logDetailsTwo = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
