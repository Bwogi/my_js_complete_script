// USING THE CONSOLE

// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]); // array
console.log({a:1, b:2}); // object
console.table({a:1, b:2}); // console.table(object)

console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello');
/*
  multi
  line
  comments
*/




// VARIABLES - VAR, LET & CONST

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


// CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);

// DATA TYPES IN JAVASCRIPT

// 1. PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// 2. REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();
console.log(today);
console.log(typeof today);

// TYPE CONVERSION
let val;

// Number to string
val = String(555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);


// NUMBERS AND MATH OBJECT

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);


//STRING METHODS AND CONCATENATION

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1); //entire length minus 1

// substring()
val = firstName.substring(0, 4); // pull a substring out of a string

// slice()
val = firstName.slice(0,4); // does the same as above but is mostly used with arrays
val = firstName.slice(-3); // used to pull out things from the array (-3 characters from the back)

// split()
val = str.split(' '); // turn string into an array via spaces['Hello','there','my',name','is',val']
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack'); // search for brad and replace it with jack

// includes()
val = str.includes('foo'); // gives a true or false value based on if 'foo' is inside of the string.

console.log(val);

// TEMPLATE LITERALS
const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

function hello(){
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

// ARRAYS AND ARRAY METHODS
// Create some arrays
const numbers = [43,56,33,23,44,36,5]; // way one: of creating an array
const numbers2 = new Array(22,45,33,76,54); // way two: using the array constructor
const fruit = ['Apple', 'Banana', 'Orange', 'Pear']; // an array of strings
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers); //check if something is an array or not. Used in DOM manipulation
// Get single value
val = numbers[3];
val = numbers[0];

// ** arrays are not immutable. We can modify them **

// Insert into array
numbers[2] = 100;
// Find the index of a value say, 36
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort(); // alphabetical order
// val = numbers.sort(); // sorts by index

// // Use the "compare function" to sort by value in ascending order
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort to sort by value in descending order
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find the first number under 50
function over50(num){
  return num > 50;
}

val = numbers.find(over50); // find the first number over 50

console.log(numbers);
console.log(val);

// OBJECT LITERALS

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
	  return 2017 - this.age; // when you are inside an object, use 'this' to mean a value in this very object. Without it in the object it just wont work.
  }
}

let val;

val = person;
// Get specific value
val = person.firstName; // recommended way
val = person['lastName']; // another way
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}



// DATE OBJECT
let val;

const today = new Date();
//if you want to do some stuff with strings
val = today.toString();
// how to change it to a different date

// ** to re declare a variable, use 'let' and not 'const'   **
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth(); // zero based. January is 0(zero)
val = today.getDate();
val = today.getDay(); // 4 is the numerical representation of wednesday from Sunday
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // timestamp the number of seconds passed since January 1st 1970

// Date manipulation
birthday.setMonth(2); // 0 is Jan, 1 is Feb, 2is March
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);



// IF STATEMENTS AND COMPARISON OPERATORS

// if(something is true){
//   do something
// } else {  // or otherwise
//   do something else
// }

const id = 100;

// // EQUAL TO
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test a variable if it is not empty-if undefined- to avoid the 'undefined' response
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS - used to test more than one condition

const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

// IF STATEMENTS AND COMPARISON OPERATORS END



// SWITCHES

const color = 'yellow';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);

// SWITCHES END


// FUNCTIONS

// 1. FUNCTION DECLARATIONS AND EXPRESSIONS

function greet(firstName = 'John', lastName = 'Doe'){
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// 2. FUNCTION EXPRESIONS - placing a function in a variable

const square = function(x = 3){ // here you have a name variable 'square' and an anonymous function
  return x*x;
}; // add a semi colon because this is basically a variable

// console.log(square()); // answer is 9
// console.log(square(8)); // answer is 64

// 3. IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs - these are functions you declare and run at the same time

//we make the function an expression by putting it in parenthesis
// (function(){...})();
//we simply define an anonymous function inside parenthesis


 (function(){
   console.log('IIFE Ran..');
 })();

// very useful in certain design patterns for example module patterns
 (function(name){
   console.log('Hello '+ name);
 })('Brad');


// We can also put functions inside of objects. We then call them methods and not functions
// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

// ad a method to the todo oject from outside of the object
todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

// FUNCTION EXPRESIONS END


// GENERAL LOOPS - ITERATION

// 1. FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue; // skip number 2's iteration and go to the next iteration
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break; // it breaks out of the loop - stops the loop
//   }

//   console.log('Number '+ i);
// }

/* - GENERAL RULE OF THUMB
	Use a for loop when you know how many times its gonna run
	 Use a while loop when its unclear */


// 2. WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// 3. DO WHILE - Its always gonna run atleast once

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);
 

// 4. LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

//5.  FOREACH - takes in an anonymous function
 
 /* Always use forEach() to loop through arrays */
 
/* 
// cars.forEach(function(){...})

	 cars.forEach(function(car){
		console.log(car);
		});
*/

// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// 6. MAP - used to return a different array
// const users  = [ // this is an array of objects of users
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

/* to extract only ids from the array of objects and place them in an array */

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// 7. FOR IN LOOP - often used in objects
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
	console.log(x); // x will give us the key
}

for(let x in user){
	console.log(`${x} : ${user[x]}`); //we'll then get the key and the value - key value pairs
}

// GENERAL LOOPS - ITERATION END

// ---

/* WINDOW METHODS / OBJECTS / PROPERTIES

	 - DOM is part of the WINDOW Object in client side JS- The Global Object
	 - Window or the browser 

	 - Server side JS(NodeJs), The computer System is your environment
	 - Client side JS, the browser or WINDOW Object is your environment.
	 - LocalStorage, The Fetch API, the Navigator which includes geolocation.
	 - includes methods like alert, prompt and confirm and so much more 

*/ 

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

/* Use bootstrap alerts and not these... */

let val;

// Outter height and width - from the top of the window to the bottom 
val = window.outerHeight;
val = window.outerWidth;
// outer from the outer edges 

// Inner height and width - inside the scroll bars
val = window.innerHeight;
val = window.innerWidth;

// Scroll points - to figure out where you are when you're scrolling
/*
	to activate scroll bars, add a div
	<h1> JS Box with scrollbar</h1>
	<div style="margin-top:1000px;"></div>
*/
val = window.scrollY; // vertical scroll 
val = window.scrollX; // horizontal scroll

// Location Object
val = window.location; // the object
val = window.location.hostname; // 127.0.0.1
val = window.location.port; // 5500
val = window.location.href; // http://127.0.0.1:5500/
val = window.location.search; // ?id=1 // ?id=1&name=Andrew&member=standard

// Redirect
//window.location.href = 'http://google.com'; // go to another website - google.com
//Reload
//window.location.reload(); //keeps on relaoding endlessly till you disable this function

// History Object

// window.history.go(-2); // go back  2 sites 
// val = window.history.length; // number of sites in the history

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent; // browser being used
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);

/* WINDOW METHODS / OBJECTS / PROPERTIES END */



/* GLOBAL SCOPE */ 
var a = 1;
let b = 2;
const c = 3;

// function test() {
	/* these variables are in the function scope */
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//   // Block Scope
	//   var a = 4; // this value changes 
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

console.log('Global Scope: ', a, b, c);

/* GLOBAL SCOPE END */