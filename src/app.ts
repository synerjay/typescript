import { Invoice } from './classes/Invoice.js'; // the file extension must be js, and not a ts!! Because at the end of the day we are compiling to these to a JS file!
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js'; // import interface

// let docOne: HasFormatter; // tells TS that this variable should be an object with a formatter method
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('yoshi', 'plumbing', 200);

// you can also check an array of objects which each object has a formatter method
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// Interface Examples

interface IsPerson {
  name: string;
  age?: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  //age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
};

console.log(me);
me.age = 30;
me.speak('hello, world');

const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name);
};

greetPerson(me);
// greetPerson({ name: 'Jerome'})  -- throw an error

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });

console.log(invoices);

// const anchor = document.querySelector('a')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul); // this ListTemplate constructor accepts a ul element as its argument

form.addEventListener('submit', (e: Event) => {
  // the event type is a built-in TS type that tells TS that e is an event variable
  e.preventDefault();

  let doc: HasFormatter; // this variable should follow the HasFormatter interface
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, 'end');
});

// Generics:

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'yoshi', age: 40 });

console.log(docOne.name);

enum ResourceType {
  BOOK,
  PERSON,
  FILM,
  SHOPPINGLIST,
}

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.PERSON,
  data: { name: 'shaun' },
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: ResourceType.SHOPPINGLIST,
  data: ['bread', 'milk'],
};

console.log(docThree, docFour);
