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
    age: 30
};
ninja.age = 40;
ninja.name = 'Ryu';
// ninja.age = '30'
// ninja.skills = ['fighting', 'sneaking'] // you cannot add more properties any more once it is delcared
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
// Conclusion: Typescript is a strict biatch
// Explicit Types
var character; //initialize but no value yet but type is explicitly typed
var age;
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
