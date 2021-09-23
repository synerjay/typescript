import { Invoice } from './classes/Invoice.js'; // the file extension must be js, and not a ts!! Because at the end of the day we are compiling to these to a JS file!
import { Payment } from './classes/Payment.js';
const me = {
    name: 'shaun',
    //age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
console.log(me);
me.age = 30;
me.speak('hello, world');
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
// greetPerson({ name: 'Jerome'})  -- throw an error
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });
console.log(invoices);
// const anchor = document.querySelector('a')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    // the event type is a built-in TS type that tells TS that e is an event variable
    e.preventDefault();
    let doc; // this variable should follow the HasFormatter interface
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
