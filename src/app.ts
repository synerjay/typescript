import { Invoice } from './classes/Invoice.js'; // the file extension must be js, and not a ts!! Because at the end of the day we are compiling to these to a JS file!

// interfaces

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

form.addEventListener('submit', (e: Event) => {
  // the event type is a built-in TS type that tells TS that e is an event variable
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
