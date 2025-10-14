"use strict";

//! The JavaScript language

//? An Introduction
//TODO 1-1 An Introduction to JavaScript
//TODO 1-2 Manuals and specifications
//TODO 1-3 Code editors
//TODO 1-4 Developer console

//? JavaScript Fundamentals
//TODO 2-1 Hello, world!
//TODO 2-2 Code structure
//TODO 2-3 The modern mode, "use strict"
//TODO 2-4 Variables
//*  Working With Variables

// let admin, name1;

// name1 = "john";

// admin = name1;

// console.log(admin);

//*  Giving the right name

// let ourPlanet = "Earth";

// let currentUserName = "ali"

//*  Uppercase const

// const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

// const age = someCode(BIRTHDAY); // make age uppercase?

//TODO 2-5 Data types

// let userName = prompt("Enter Your Name","");

// alert(userName);

//TODO 2-6 Interaction: alert, prompt, confirm
//TODO 2-7 Type Conversions
//TODO 2-8 Basic operators, maths

//* The postfix and prefix forms
// let a = 1, b = 1;

// let c = ++a; // 2 ?
// let d = b++; // 1 ?

// console.log(c);
// console.log(d);
//* Assignment result

// let a = 2;

// let x = 1 + (a *= 2); // x = 5

// console.log(x);

//* Type conversions
// "" + 1 + 0; //*   "10"
// "" - 1 + 0; //!   NaN X ==> -1
// true + false; //*   1
// 6 / "3"; //*  2
// "2" * "3"; //*   6
// 4 + 5 + "px"; //*   "9px"
// "$" + 4 + 5; //* "$45"
// "4" - 2; //*   2
// "4px" - 2; //*   NaN
// "  -9  " + 5; //!   -4 X ==> "   -9   5"
// "  -9  " - 5; //*   -14
// null + 1; //* 1
// undefined + 1; //* NaN
// " \t \n" - 2;  //* -2

//*Fix the addition

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 12 ==> 3

//TODO 2-9 Comparisons

//* Comparisons

// 5 > 4; //* true
// "apple" > "pineapple"; //* false
// "2" > "12"; //! X false ==> True Here there is a dictionary comparison, first char "2" is greater than the first char "1".
// //! When comparing values of different types, JavaScript converts the values to numbers. the comparison above was between 2 strings
// undefined == null; //* true
// undefined === null; //* false
// null == "\n0\n"; //* false
// null === +"\n0\n"; //* false

//TODO 2-10 Conditional branching: if, '?'

//* if (a string with zero)

// if ("0") {
//   console.log("Hello"); // ==> Yes it will
// }

//* The name of JavaScript

// let userAnswer = prompt("What is the official name of JavaScript?", "");

// // Using "?" The conditional operator

// userAnswer === "ECMAScript"
//   ? console.log("Right")
//   : console.log("You Don't know? 'ECMAScript!'");

// // Using the usual if statement

// if (userAnswer === "ECMAScript") {
//   console.log("Right");
// } else {
//   console.log("You Don't know? 'ECMAScript!'");
// }

//* Show the sign

// let number = prompt("Enter a number to show the sign of it", "");

// if (number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

//* Rewrite 'if' into '?'

// let a = 1;
// let b = 4;
// let result;

// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }

// let result = (a + b < 4) ? "Below" : "Over";
// console.log(result);

// *Rewrite 'if..else' into '?'

// let login = "Director";

// let message =
//   login === "Employee"
//     ? "Hello"
//     : login === "Director"
//     ? "Greetings"
//     : login === ""
//     ? "No Login"
//     : "";

// console.log(message);

//TODO 2 - 11 Logical operators

//* What's the result of OR?
// ? What is the code below going to output?
// console.log(null || 2 || undefined); // ==> 2

//* What's the result of OR'ed alerts?

//? What will the code below output?
// console.log(console.log(1) || 2 || console.log(3)); // ==> 1 and 2

//* What is the result of AND?

//? What is this code going to show?

// console.log( 1 && null && 2 );

//* What is the result of AND'ed alerts?

//? What will this code show?

// console.log( console.log(1) && console.log(2) ); // 1 and undefined

//* The result of OR AND OR

//? What will the result be?

// console.log( null || 2 && 3 || 4 ); // 3

//* Check the range between

// let age = 13;

// if (age >= 14 && age <= 90) {
//   console.log("Perfect");
// }

//* Check the range outside

// let age = 91;

//1
// if (!(age >= 14 && age <= 90)) {
//   console.log("Right");
// }

//2

// if (age < 14 || age > 90) {
//   console.log("Right");
// }

//* A question about "if"

//? Which of these alerts are going to execute?

//*          first, third

//? What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

//* Check the login

// let admin = prompt("Who's there ? ", "");

// if (admin === "Admin") {
//   let password = prompt("Write the password", "");

//   password === "TheMaster"
//     ? console.log("Welcome")
//     : password === "" || admin === null
//     ? console.log("Canceled")
//     : console.log("Wrong Password");
// } else if (admin === "" || admin === null) {
//   console.log("Canceled");
// } else {
//   console.log("I don't know you");
// }

//TODO 2-12 Nullish coalescing operator '??'
//TODO 2-13 Loops: while and for

//* Last loop value

//? What is the last value alerted by this code? Why?

//* ==> 1

// let i = 3;

// while (i) {
//   console.log( i-- );
// }

//* Which values does the while loop show?

//? What is the last value alerted by this code? Why?

//? Both loops alert the same values, or not?

// The prefix form ++i:

// let i = 0;
// while (++i < 5) console.log(i);

// The postfix form i++

// let i = 0;
// while (i++ < 5) console.log(i);

//* Which values get shown by the "for" loop?

//? Both loops alert same values or not?

// The postfix form:

// for (let i = 0; i < 5; i++) console.log(i); // 0 to 4

// The prefix form:

// for (let i = 0; i < 5; ++i) console.log(i); // 0 to 4

//* Output even numbers in the loop

// 1
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// 2
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 3
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

//* Replace "for" with "while"

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

// let i = 0;

// while (i < 3) {

//   console.log(`Number ${i}!`);

//   i++;
// }

//* Repeat until the input is correct

// let userInput;

// do {
//   userInput = prompt("Enter A Number");
// } while (+userInput <= 100 && userInput);

//* Output prime numbers

// let num = prompt("Enter n");

// nextPrime: for (let i = 2; i <= +num; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       continue nextPrime;
//     }20
//   }

//   console.log(i);
// }

//TODO 2-14 The "switch" statement

//* Rewrite the "switch" into an "if"

// let browser = "Chrome";

// if (browser === "Edge") {
//   console.log("You have got the Edge !");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   console.log("Okay we support these browsers too!");
// } else {
//   console.log("We hope that this page looks ok!");
// }

//* Rewrite "if" into "switch"

// let a = +prompt("a", "");

// switch (a) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//   case 3:
//     console.log("2 , 3");
//     break;
// }

//TODO 2-15 Functions

//* Is "else" required?

//? The following function returns true if the parameter age is greater than 18.

//? Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }
//? Will the function work differently if else is removed?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }

//* Answer: The 2 functions do the same and else is not required because if the first return executed the second one will be ignored.

//* Rewrite the function using '?' or '||'

//? The following function returns true if the parameter age is greater than 18.
//? Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
//? Rewrite it, to perform the same, but without if, in a single line.
//? Make two variants of checkAge:
//? Using a question mark operator ?
//? Using OR ||

// function checkAge1(age) {
//   return age > 18 ? true : confirm("Did your parents allow you?");
// }

// function checkAge2(age) {
//   return age > 18 || confirm("Did your parents allow you ?");
// }

//* Function min(a, b)
//? Write a function min(a,b) which returns the least of two numbers a and b.

// function getMinNumber(num1, num2) {
//   return num1 < num2 ? num1 : num2;
// }

// console.log(getMinNumber(6, 2));

//* Function pow(x,n)
//? Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// let x = prompt("Enter the number", "");
// let n = prompt("Enter the power", "");

// function pow(x, n) {
//   x = +x;
//   n = +n;
//   if (n === 0) {
//     return 1;
//   }

//   if (n < 0) {
//     return console.log("Negative numbers are not supported2");
//   }

//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// alert(pow(x, n));

//TODO 2-16 Function expression

// let funnyNumber =
//   1 +
//   (function () {
//     return 2;
//   })();

// console.log(funnyNumber);

//TODO 2-17 Arrow functions, the basics
//* Rewrite with arrow functions

//? Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// alert(pow(x, 4));

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

//TODO 2-18 JavaScript specials

//? Code quality
//TODO 3-1 Debugging in the browser
//TODO 3-2 Code Style

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt("x?", ""),
//   n = prompt("n?", "");

// if (n <= 0) {
//   alert(
//     `Power ${n} is not supported, please enter an integer number greater than zero`
//   );
// } else {
//   alert(pow(x, n));
// }

//TODO 3-3 Comments
//TODO 3-4 Ninja code
//TODO 3-5 Automated testing with Mocha
//TODO 3-6 Polyfills and transpilers

//? Objects: the basics
//TODO 4-1 Objects

// let user1 = new Object();

// let user2 = {
//   name: "Zoalfekar",
//   age: 23,
//   "my gender": "male",
// };

// user2.isAdmin = true; // Add a property

// user2.name = "Ahmad"; // Modify a property

// delete user2.age; // Delete age

// console.log(user2[`name`]);

// let key = "myKey";

// user2[key + "1" + 1] = "myValue";

// console.log(user2["myKey11"]);

// let num1 = 1;
// let num2 = 2;

// let nums = {
//   num1,
//   num2,
//   // num3,
//   "for": 4
// };

// console.log(nums["for"]);

//* Hello, object

//? Write the code, one line for each action:

//? 1 Create an empty object user.
//? 2 Add the property name with the value John.
//? 3 Add the property surname with the value Smith.
//? 4 Change the value of the name to Pete.
//? 5 Remove the property name from the object.

// let user = {};

// user[name] = "john";

// user.surname = "Smith";

// user.name = "Pete";

// delete user.name;

// console.log(user.name);

//* Check for emptiness

//? Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let schedule = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     if (key) {
//       return false;
//     }

//     // We can just do this:
//     // return false

//     // without if condition, so the loop will not even
//     // start if there is no any property
//   }

//   return true;
// }
// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule));

//* Sum object properties

//? We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function sumOfSalaries(salariesObject) {
//   let sumOfSalaries = 0;

//   for (let employeeName in salariesObject) {
//     sumOfSalaries += salariesObject[employeeName];
//   }

//   return sumOfSalaries;
// }

// console.log(sumOfSalaries(salaries));

//* Multiply numeric property values by 2

//? Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);

// console.log(menu.width);
// console.log(menu.height);
// console.log(menu.title);

//TODO 4-2 Objects references and copying

// let user1 = {
//   name: "zozo",
//   age: 23,
// }

// let additionalDetails = {
//   role: "FrontEnd Dev",
//   exp: "3 years",
// }

// let test = Object.assign(user1, additionalDetails);

// console.log(test.name);
// console.log(user1.exp);

//TODO 4-3 Garbage collection

//TODO 4-4 Object methods. "this"

//* Using "this" in object literal

//? Here the function makeUser returns an object.

//? What is the result of accessing its ref? Why?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name ); // What's the result?

//* Answer: an error.

// Try it:

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
//? That’s because rules that set this do not look at object definition. Only the moment of call matters.

//? Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.

//? The value of this is one for the whole function, code blocks and object literals do not affect it.

//? So ref: this actually takes current this of the function.

//? We can rewrite the function and return the same this with undefined value:

// function makeUser() {
//   return this; // this time there's no object literal
// }

// alert(makeUser().name); // Error: Cannot read property 'name' of undefined

//? As you can see the result of alert( makeUser().name ) is the same as the result of alert( user.ref.name ) from the previous example.
//? Here’s the opposite case:

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();

// alert(user.ref().name); // John

//* Create a calculator

// const calculator = {
//   read: function () {
//     this.a = +prompt("Enter a number", "");
//     this.b = +prompt("Enter a number", "");
//   },

//   sum: function () {
//     return this.a + this.b;
//   },

//   mul: function () {
//     return this.a * this.b;
//   },
// };

// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

//* Chaining

//? There’s a ladder object that allows you to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };

//? Now, if we need to make several calls in sequence, we can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

//? Modify the code of up, down, and showStep to make the calls chainable, like this:

//? ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
//? Such an approach is widely used across JavaScript libraries.

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

//TODO 4-5 Constructor, operator "New"

// This article covers the key differences between Constructor functions and Factory functions that i did below.
// https://aistudio.google.com/prompts/1zJiDGIj6Tlum_FPyPoJIvbFm9bCA43DB

// function User(name, age) {
//   return {
//     name,
//     age,
//   };

// }

// let user1 = User("Zozo", 23);

// console.log(user1.age);

//* Two functions – one object

// let obj = {};

// function A() {
//   return obj;
// }
// function B() {
//   return obj;
// }

// alert(new A() == new B()); // true

//* Create new Calculator

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("Enter a", "");
//     this.b = +prompt("Enter b", "");
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };

//   this.print = function (order) {
//     if (this.a && this.b) {
//       if (order === "sum" || order === "+") {
//         console.log(`Sum = ${this.sum()}`);
//       } else if (order === "mul" || order === "*") {
//         console.log(`Mul = ${this.mul()}`);
//       } else {
//         console.log("Error: Wrong Operator!");
//       }
//     } else {
//       console.log("Error: Call 'read()' function first !");
//     }
//   };
// }

// let calc1 = new Calculator();

// calc1.read();

// calc1.print("+");
// calc1.print("*");

//* Create new Accumulator

// function Accumulator(initialValue = 0) {
//   this.value = initialValue;

//   this.read = function () {
//     this.value += +prompt("Enter number", "");
//   };
// }

// let accumulator = new Accumulator(2);

// accumulator.read();
// accumulator.read();
// accumulator.read();

// console.log(accumulator.value);

//TODO 4-6 Optional chaining "?"
//TODO 4-7 Symbol type
//TODO 4-8 Object to primitive conversions

//*1

//1 Hint: string, called method: toString(), result: Welcome to Level 3

//2 Hint: number, called method: valueOf(), result: false

//3 Hint default, called method: valueOf(), result: 550
//*2

// const timer = {
//   startTime: Date.now(),

//   duration: 10_000,

//   [Symbol.toPrimitive](hint) {
//     if (hint === "string") {
//       return `Timer started at ${new Date()},duration: ${this.duration}ms`;
//     }

//     if (hint === "number" || hint === "default") {
//       return this.startTime + this.duration - Date.now();
//     }
//   },
// };

// console.log(timer < 10000);

// console.log("Time left: " + timer);

//*3

//? Data types
//TODO 5-1 Methods of primitives

//* Can I add a string property?

// let str = "Hello";

// str.test = 5;

// console.log(str.test);

/* Depending on whether you have use strict or not, the result may be:

undefined (no strict mode)
An error (strict mode).
Why? Let’s replay what’s happening at line (*):

When a property of str is accessed, a “wrapper object” is created.
In strict mode, writing into it is an error.
Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, so in the last line str has no trace of the property.
This example clearly shows that primitives are not objects.

They can’t store additional data. */

//TODO 5-2 Numbers

//* Sum numbers from the visitor

// let a = +prompt("Enter a number", "");
// let b = +prompt("Enter a number", "");

// let sum = a + b;

// console.log(sum);

//* Why 6.35.toFixed(1) == 6.3?

//* Repeat until the input is a number

//? Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
//? The resulting value must be returned as a number.
//? The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

// function readNumber() {
//   let number = prompt("Enter a numeric value!");
//   while (isNaN(number)) {
//     number = prompt("Enter a numeric value!");
//   }

//   return number === null || number === "" ? null : +number;
// }

// console.log(readNumber());

//* An occasional infinite loop

//? This loop is infinite. It never ends. Why?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

/* That’s because i would never equal 10.

Run it to see the real values of i:

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}
None of them is exactly 10.

Such things happen because of the precision losses when adding fractions like 0.2.

Conclusion: evade equality checks when working with decimal fractions. */

//* A random number from min to max

// function random() {
//   return Math.random()
// }

// console.log(random().toFixed(2) * 10);

//*
//TODO 5-3 Strings

//* Uppercase the first character

//? Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

// function ucFirst(str) {
//   if (!str) {
//     return str;
//   }
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("a"));

//* Check for spam

// function checkSpam(str = "") {
//   return (
//     str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
//   );
// }

// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("Innocent rabbit"));
// console.log(checkSpam("free xxxx"));

//* Truncate the text

// function truncate(str = "", maxLength) {
//   if (str.length > maxLength) {
//     return str.slice(0, maxLength - 1) + "...";
//   } else {
//     return str;
//   }
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20));

//* Extract the money

//? We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

//? Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

// function extractCurrencyValue(str = "") {
//   return str.startsWith("$") ? Number(parseInt(str.slice(1))) : "Wrong value";
// }

// console.log(extractCurrencyValue("$125"));

//TODO 5-4 Arrays

//* Is array copied?
// Yes it is

// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // what's in fruits?
// console.log( fruits.length ); // ? ==> 4

//* Array operations.

// let styles = ["Jazz", "Blues",];

// styles.push("Rock-n-Roll");

// function updateMiddleItem(array = [], newValue) {
//   let middleItemIndex = Math.floor((array.length - 1) / 2);
//   let middleItemOriginalValue = array[middleItemIndex]; // Get the original middle value

//   array[middleItemIndex] = newValue;

//   return middleItemOriginalValue;
// }

// updateMiddleItem(styles, "Classics");

// console.log(styles.shift());

// styles.unshift("Rap", "Reggae");

// console.log(styles);

//* Calling in an array context

// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// });

// arr[2](); // ?

// The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.

// So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array:

//* Sum input numbers

// function sumInput() {
//   let userInputNumbers = [];
//   let i = 0;
//   let userInputSum = 0;

//   while (true) {
//     let userInput = prompt("Please Enter a number", "");
//     if (!isFinite(userInput) || userInput === "" || userInput === null) {
//       break;
//     }
//     userInputNumbers[i] = +userInput;
//     i++;
//   }

//   for (let number of userInputNumbers) {
//     userInputSum += number;
//   }

//   return userInputSum;
// }

// console.log(sumInput());

//* A maximal subarray

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) {
//     // for each item of arr
//     partialSum += item; // add it to partialSum
//     maxSum = Math.max(maxSum, partialSum); // remember the maximum
//     if (partialSum < 0) partialSum = 0; // zero if negative
//   }

//   return maxSum;
// }
// console.log(getMaxSubSum([1, 2, 3]));
// console.log(getMaxSubSum([-1, -2, -3]));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// console.log(getMaxSubSum());
// console.log(getMaxSubSum());

//TODO 5-5 Array methods
//* Translate border-left-width to borderLeftWidth

// function camelize(str = "") {
//   let result = str
//     .split("-")
//     .map((item, i) => (i !== 0 ? item[0].toUpperCase() + item.slice(1) : item))
//     .join("");

//   return result;
// }

// console.log(camelize("background-image-result"));
// console.log(camelize("-background-image-result"));

//* Filter range

// function filterRange(arr = [], a, b) {
//   const MIN = Math.min(+a, +b);
//   const MAX = Math.max(+a, +b);

//   return arr.filter((item) => item >= MIN && item <= MAX);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (matching values)

// console.log(arr); // 5,3,8,1 (not modified)

//* Filter range "in place"

// function filterRangeInPlace(arr = [], a, b) {
//   const MIN = Math.min(+a, +b);
//   const MAX = Math.max(+a, +b);

//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] >= MIN && arr[i] <= MAX)) {
//       arr.splice(i, 1);
//     }
//   }
// }

// let arr2 = [5, 3, 8, 1];

// filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

// console.log(arr2); // [3, 1]

//* Sort in decreasing order

// let arr3 = [5, 2, 1, -10, 8];

// arr3.sort(function (a, b) {
//   return b - a;
// })

// console.log(arr3);

//* Copy and sort array

// let arr4 = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//   return [].concat(arr).sort((a, b) => a.localeCompare(b));
// }

// console.log(copySorted(arr4));
// console.log(arr4);

//* Create an extendable calculator
//* Map to names

//? You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((user) => user.name);

// console.log(names);

//* Map to objects

//? You have an array of user objects, each one has name, surname and id.

//? Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map(function (user) {
//   return {
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
//   };
// });

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith
// console.log(usersMapped);

//* Sort users by age

//? Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(arr) {
//   arr.sort((user1, user2) => user1.age - user2.age);
// }

// sortByAge(arr);

// console.log(arr);

//* Shuffle an array

//? Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

//? Multiple runs of shuffle may lead to different orders of elements.For instance:

function getRandomNumber(min, max) {
  const MIN = Math.min(+min, +max);
  const MAX = Math.max(+min, +max);

  let randomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

  return randomNumber;
}

// function fisherYatesShuffle(array = []) {
//   const arr = array.slice();

//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = getRandomNumber(0, i);

//         // swap elements arr[i] and arr[j]
//         // we use "destructuring assignment" syntax to achieve that
//         // you'll find more details about that syntax in later chapters
//         // same can be written as:
//         // let t = arr[i]; arr[i] = arr[j]; arr[j] = t
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }

//   return arr;
// }

// for (let i = 0; i < 100; i++) {
//   console.log(fisherYatesShuffle([1,2,3]));
// }

//* Get average age

//? Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

//? The formula for the average is (age1 + age2 + ... + ageN) / N.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// function getAverageAge(arr = []) {
//   return (
//     arr.reduce(function (sum, item) {
//       return sum + item.age;
//     }, 0) / arr.length
//   );
// }

// console.log(getAverageAge(arr));

//* Filter unique array members

//? Let arr be an array.

//? Create a function unique(arr) that should return an array with unique items of arr.

// function unique(arr = []) {
//   const filteredArray = [];

//   for (let item of arr) {
//     if (!filteredArray.includes(item)) {
//       filteredArray.push(item);
//     }
//   }

//   return filteredArray;
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(strings));

//* Create keyed object from array

//? Let’s say we received an array of users in the form {id:..., name:..., age:... }.

//? Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// function groupById(arr = []) {
//   const obj = {};
//   for (let item of arr) {
//     obj[item?.id] = item;
//   }

//   return obj;
// }

// // Another Solutions:

// function groupByIdWithReduce(arr = []) {
//   // arr.reduce(callback, initialValue)
//   return arr.reduce((obj, user) => {
//     // For each user in the array, add them to the object
//     // using user.id as the key.
//     obj[user.id] = user;

//     // It's crucial to always return the object (the accumulator)
//     // so it can be used in the next iteration.
//     return obj;
//   }, {}); // The second argument, {}, is the initial value for our object.
// }

// const groupByIdOneLiner = (arr = []) =>
//   arr.reduce(
//     (obj, user) => ({
//       ...obj,
//       [user.id]: user,
//     }),
//     {}
//   );

//TODO 5-6 Iterables

// const reverseWord = {
//   str: "JavaScript",

//   [Symbol.iterator]() {
//     const myString = this.str;
//     let currentIndex = myString.length - 1;
//     return {
//       next() {
//         return currentIndex >= 0
//           ? { value: myString[currentIndex--], done: false }
//           : { value: undefined, done: true };
//       },
//     };
//   },
// };

// for (const char of reverseWord) {
//   console.log(char);
// }

// const evenNumbers = {
//   data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16],

//   [Symbol.iterator]() {
//     let currentIndex = 0;
//     let myData = this.data;

//     return {
//       next() {
//         while (currentIndex < myData.length) {
//           if (myData[currentIndex] % 2 === 0) {
//             return { value: myData[currentIndex++], done: false };
//           }
//           currentIndex++;
//         }
//         if (currentIndex >= myData.length) {
//           return { value: undefined, done: true };
//         }
//       },
//     };
//   },
// };

// const results = [];
// for (const num of evenNumbers) {
//   results.push(num);
// }
// console.log(results); // Should output: [2, 4, 6, 8, 10]

// const numberRange = {
//   from: 1,
//   to: 10,
//   limit: 5,

//   [Symbol.iterator]() {
//     let currentNumber = this.from;
//     let to = this.to;
//     let limit = this.limit;
//     let count = 0;
//     return {
//       next() {
//         while (currentNumber <= to && count < limit) {
//           count++;
//           return { value: currentNumber++, done: false };
//         }

//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// // console.log("Hello");

// console.log(
//   `The range from ${numberRange.from} to ${numberRange.to} with a limit of ${numberRange.limit} is:`
// );

// const limitedResult = [...numberRange];
// console.log(limitedResult); // Should output: [1, 2, 3, 4, 5]

//TODO 5-7 Map and Set

//*
// function unique(arr = []) {
//   return Array.from(new Set(arr));
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(values));

//*Filter anagrams

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr = []) {
//   const results = [arr[0]];
//   mainLoop: for (let i1 = 1; i1 < arr.length; i1++) {
//     let item1 = arr[i1]
//       .toLowerCase()
//       .split("")
//       .sort((a, b) => a.localeCompare(b))
//       .join("");

//     for (let i2 of results) {
//       let item2 = i2
//         .toLowerCase()
//         .split("")
//         .sort((a, b) => a.localeCompare(b))
//         .join("");

//       if (item1 === item2) {
//         continue mainLoop;
//       }
//     }
//     results.push(arr[i1]);
//   }

//   return results;
// }

// console.log(aclean(arr));

// function aclean(arr = []) {

//   const resultsMap = new Map();

//   for (let item of arr) {
//     resultsMap.set(item.toLowerCase().split("").sort((a, b) => a.localeCompare(b)).join(""), item);
//   }

//   return Array.from(resultsMap.values());
// }

// let user = { name: "Alex" };
// let metadata = new WeakMap();

// metadata.set(user, { lastLogin: "2023-10-27" });

// user = null;

// console.log(metadata.);

//TODO 5-8 WeakMap ad WeakSet

//* Store "unread" flags

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let readMessages = new WeakSet();

// // two messages have been read
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages has 2 elements

// // ...let's read the first message again!
// readMessages.add(messages[0]);
// // readMessages still has 2 unique elements

// // answer: was the message[0] read?
// alert("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();
// // now readMessages has 1 element (technically memory may be cleaned later)

//*
//*

//TODO 5-9 Object.keys, values, entries

//* Sum the properties

// function sumSalaries(obj) {
//   let sum = 0;

//   for (let salary of Object.values(obj)) {
//     sum += salary;
//   }

//   return sum;
// }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// console.log(sumSalaries(salaries));

//* Count properties

// function count(obj = {}) {
//   return Object.entries(obj).length;
// }

// let user = {
//   name: 'John',
//   age: 30
// };

// console.log( count(user) ); // 2

//TODO 5-10 Destructuring assignment

//*1
// function getUserInfo({ name, address: { city } = {}, status = "Active" } = {}) {
//   return `User ${name} from ${city} is currently ${status}.`;
// }

// const userProfile = {
//   name: "Jane Doe",
//   email: "jane.doe@example.com",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// console.log(getUserInfo(userProfile));

//*2

// const apiResponse = [
//   {
//     id: "art1",
//     title: "Mastering JavaScript Destructuring",
//     author: { id: "auth1", name: "Alex Johnson" },
//     stats: { views: 15034, likes: 2300 },
//     tags: ["javascript", "es6", "webdev"],
//   },
//   {
//     id: "art2",
//     title: "A Deep Dive into CSS Grid",
//     author: { id: "auth2", name: "Maria Garcia" },
//     stats: { views: 8900, likes: 1800 },
//     tags: ["css", "frontend"],
//   },
//   {
//     id: "art3",
//     title: "The Importance of Accessibility",
//     author: { id: "auth3", name: "Sam Chen" },
//     stats: { views: 4250, likes: 950 },
//     tags: [], // Empty tags array
//   },
// ];

// function formatArticleData(articles = []) {
//   const results = articles.map(function ({
//     title,
//     author: { name: author },
//     stats: { views },
//     tags: [mainTag = "General"] = [],
//   } = {}) {
//     return {
//       title,
//       author,
//       views,
//       mainTag,
//     };
//   });

//   return results;
// }

// console.log(formatArticleData(apiResponse));

// for (let article of formatArticleData(apiResponse)) {
//   console.log(article);
// }

//! Additional: Spread Syntax Assignments By AI

//*1

// const initialCart = [
//   { id: 1, name: "Apple", quantity: 2 },

//   { id: 2, name: "Banana", quantity: 3 },
// ];

// const newItem = { id: 3, name: "Watermelon", quantity: 2 };

// function addItem(
//   cart = [],
//   { id = "unknown", name = "unknown", quantity = 0 } = {}
// ) {
//   return [...cart, { id, name, quantity }];
// }

// function updateQuantity(cart = [], itemId, newQuantity) {
//   return cart.map((item) =>
//     itemId === item.id
//       ? {
//           ...item,
//           quantity: newQuantity,
//         }
//       : { ...item }
//   );
// }

// function removeItem(cart = [], itemId) {
//   return cart.filter((item) => itemId !== item.id);
// }

// const newCart = addItem(initialCart, newItem);

// const newWaterMelon = updateQuantity(newCart, 3, 5);

// console.log(newCart);

// console.log(newWaterMelon);
// const removeWaterMelon = removeItem(newCart, 3);

// console.log(removeWaterMelon);

//*2

//TODO 5-11 Data and time

//*Create a date

// const date1 = new Date(2012, 1, 20, 3, 12);

// const date2 = new Date("2012-02-20T03:12");

// alert(date1)
// alert(date2)

//*Show a weekday

// function getWeekDay(date = new Date()) {
//   switch (date.getDay()) {
//     case 0:
//       return "SU";
//     case 1:
//       return "MO";
//     case 2:
//       return "TU";
//     case 3:
//       return "WE";
//     case 4:
//       return "TH";
//     case 5:
//       return "FR";
//     case 6:
//       return "SA";
//   }
// }

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"

//*European weekday

// function getLocalDay(date = new Date()) {
//   return (date.getDay() === 0) ? 7 : date.getDay();
// }

// let date = new Date(2012, 0, 8); // 3 Jan 2012
// alert(getLocalDay(date));

//*Which day of month was many days ago?

// function getDateAgo(date = new Date(), days) {
//   const dateAgo = new Date(date.getTime()); // Cloning the provided date object

//   dateAgo.setDate(date.getDate() - days);

//   return dateAgo;
// }

// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 365));

// console.log(date);

//*Last day of month?

// function getLastDayOfMonth(year, month) {
//   const date = new Date(year, month);
//   date.setMonth(date.getMonth() + 1);
//   date.setDate(date.getDate() - 1);
//   return date.getDate() - 1;
// }

// console.log(getLastDayOfMonth(2012, 3));

//! js.info solution:

// Let’s create a date using the next month, but pass zero as the day:

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

//*How many seconds have passed today?

// function getSecondsToday (){
//   const date = new Date();

//   return (date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds();
// }

// function getSecondsToday() {
//   let now = new Date();

//   // create an object using the current day/month/year
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today; // ms difference
//   return Math.round(diff / 1000); // make seconds
// }

// alert(getSecondsToday());

// console.log(getSecondsToday());

//*How many seconds till tomorrow?

// function getSecondsToTomorrow() {
//   const now = new Date();

//   const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//   return Math.trunc((tomorrow - now) / 1000);
// }

// console.log(getSecondsToTomorrow());

//*Format the relative date

// function formatDate(date = new Date()) {

// }

//TODO 5-12 JSON methods, toJSON

//*Turn the object into JSON and back
// let user = {
//   name: "John Smith",
//   age: 35,
// };

// const strJSON = JSON.stringify(user, null, 2);

// console.log(strJSON);

// const objJSON = JSON.parse(strJSON, (key, value) => (key === "age") ? value + 5 : value);

// console.log(objJSON);

//*Exclude backreferences

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   occupiedBy: [{ name: "John" }, { name: "Alice" }],
//   place: room,
// };

// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     /* your code */

//     if ( key != "" && value == meetup) {
//       return undefined;
//     }

//     return value;
//   })
// );

//*1

// const user = {
//   id: 1,
//   username: "zozon5",
//   email: "zz@gmail.com",
//   password: "43545qwr",
//   internal_token: 345,
// };

// function createSafeLog(obj = {}) {
//   return JSON.stringify(
//     obj,
//     (key, value) =>
//       key === "password" || key === "internal_token" ? undefined : value,
//     4
//   );
// }

// console.log(createSafeLog(user));

//*2
//*3

//? Advanced working with functions
//TODO 6-1 Recursion and stack

//* Sum all numbers till the given one

//1
// function sumToLoop(n) {
//   let sum = 0;

//   for (let i = n; i > 0; i--) {
//     sum += i;
//   }

//   return sum;
// }
// console.log(sumToLoop(100));

//2
// function sumToRecursion(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n + sumToRecursion(n - 1);
// }
// console.log(sumToRecursion(1000));

//3
// function sumToProgressionFormula(n) {
//   return n * ((1 + n) / 2);
// }
// console.log(sumToProgressionFormula(10000));

//* Calculate factorial

// function factorial(n) {
//   if (n === 1) {
//     return 1
//   }

//   return n * factorial(n - 1);
// }
// console.log(factorial(5));
//* Fibonacci numbers
//* Output a single-linked list

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printList(list = {}) {
//   console.log(list.value);

//   if (list.next) printList(list.next);
// }

// printList(list);
//* Output a single-linked list in the reverse order

// function printListReverse(list = {}) {
//   if (list.next ) {
//     printListReverse(list.next);
//   }
//   console.log(list.value);

// }
// printListReverse(list);

// function recursionPow(x, n) {
//   if (n === 0) {
//     return 1;
//   }

//   if (n === 1) {
//     return x;
//   }

//   return x * recursionPow(x, n - 1);
// }

// console.log(recursionPow(2, 10));

// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// console.log(sumSalaries(company));

// function sumSalaries(department = {}) {
//   if (Array.isArray(department)) {
//     return department.reduce((acc, item) => acc + item.salary, 0);
//   } else {
//     let sum = 0;
//     for (let value of Object.values(department)) {
//       sum += sumSalaries(value);
//     }
//     return sum;
//   }
// }

// const fileSystem = {
//   name: "root",
//   type: "folder",
//   items: {
//     // countFiles is called on this object
//     documents: {
//       //...
//       name: "documents",
//       type: "folder",
//       items: {
//         // countFiles is called on this object
//         work: ["report.docx", "project-plan.xlsx"], // returns 2
//         personal: ["photo1.jpg", "holiday-notes.txt", "recipe.pdf"], // returns 3
//       },
//     },
//     downloads: ["installer.exe", "archive.zip"], // countFiles called on this array -> returns 2
//     "app.js": { name: "app.js", type: "file" }, // countFiles called on this object -> returns 1
//   },
// };

// function countItems(dir) {
//   let itemsSum = 0;

//   if (dir.type == "file") {
//     return 1;
//   }

//   if (Array.isArray(dir)) {
//     return dir.length;
//   }

//   if (!Array.isArray(dir) && typeof dir === "object") {
//     for (let value of Object.values(dir)) {
//     }
//   }

//   return itemsSum;
// }

// console.log(countItems(fileSystem));

//1

// function deepFind(obj, key) {
//   // Loop through each key at the CURRENT level IN ORDER.
//   for (let k in obj) {
//     // Decision 1: Is THIS key the one I'm looking for?
//     if (k === key) {
//       // Yes! Found it. My search is 100% complete. Return the value.
//       return obj[k];
//     }

//     // Decision 2: Is the VALUE of this key a nested object I should search inside?
//     if (typeof obj[k] === "object" && obj[k] !== null) {
//       // Go deep! But be patient. Store the result.
//       const result = deepFind(obj[k], key);

//       // Decision 3: Did the deep search find anything?
//       if (result !== undefined) {
//         // Yes! The sub-manager found it. Our search is 100% complete. Return their result.
//         return result;
//       }
//       // If result IS undefined, we do NOTHING. We are patient.
//       // The loop will simply continue to the next key.
//     }
//   }

//   // If we get here, the loop finished without any success.
//   return undefined;
// }

// return undefined;

// function deepFindRevisited(obj, key, lvl = 1) {
//   let foundKey;

//   if (obj[foundKey]) {
//     return obj[foundKey];
//   }

//   for (let k in obj) {
//     console.log(`The key is ${k}, The level is ${lvl}`);
//     if (k === key) {
//       foundKey = key;
//       console.log(`The returned value is ${obj[foundKey]}`);
//       return obj[k];
//     }

//     if ( typeof obj[k] === "object") {
//       return deepFindRevisited(obj[k], key, lvl + 1);
//     }
//   }

// }

// const user = {
//   id: 1,
//   name: "Zozo",
//   country: "Syria",
//   address: {
//     city: "Latakia",
//     region: "M7",
//   },
//   region: "M1",
// };

// console.log(deepFind(user, "region"));

// const userProfile = {
//   id: 1,
//   userName: "John Doe",
//   details: {
//     email: "john.doe@example.com",
//     address: {
//       city: "New York",
//       postalCode: "10001",
//     },
//     mail: 1,
//   },

//   zoz: "Zoalfekar",
// };

// console.log(deepFind(userProfile, "mail", 1));

//TODO 6-2 Rest parameters and spread syntax

//1
// function createImmutableList(list = [], ...items) {
//   return [...list, ...items];
// }

// const originalList = ["apples", "bananas"];
// const newList = createImmutableList(originalList, "cherries", "dates");

// console.log(originalList);
// console.log(newList);

//2

// function updateCart({ items, totalPrice }, { id, name, price, quantity } = {}) {
//   const newCart = { items: [...items], totalPrice: totalPrice };
//   const itemIndex = newCart["items"].findIndex(
//     (cartItem) => cartItem.id === id
//   );

//   if (itemIndex !== -1) {
//     newCart["totalPrice"] += price;
//     newCart["items"][itemIndex].quantity++;
//   } else {
//     newCart["items"].push({ id, name, quantity });
//     newCart["totalPrice"] += price;
//   }

//   return newCart;
// }

// const initialCart = {
//   items: [
//     { id: 1, name: "Laptop", price: 1200, quantity: 3 },
//     { id: 2, name: "Mouse", price: 25, quantity: 2 },
//   ],
//   totalPrice: 3650,
// };

// console.log(
//   updateCart(initialCart, { id: 5, name: "Keyboard", price: 120, quantity: 1 })
// );

// console.log(initialCart);

// const initialBlogPost = {
//   id: "post123",
//   title: "Mastering Immutable Updates",
//   author: "Alex",
//   likes: 15,
//   comments: [
//     {
//       id: "c1",
//       author: "Ben",
//       text: "Great article!",
//       likes: 5,
//       replies: [
//         { id: "r1", author: "Alex", text: "Thanks, Ben!", likes: 2 },
//         { id: "r2", author: "Clara", text: "Agreed!", likes: 3 },
//       ],
//     },
//     {
//       id: "c2",
//       author: "David",
//       text: "This is really helpful.",
//       likes: 8,
//       replies: [],
//     },
//   ],
// };

// function updateBlogPost(
//   {
//     id,
//     title,
//     author,
//     likes,
//     comments = [
//       { id, author, text, likes, replies: [{ id, author, text, likes }] },
//     ],
//   },
//   { type, payload } = {}
// ) {
//   const newBlogPost = { id, title, author, comments: [...comments] };
//   newBlogPost["comments"] = newBlogPost["comments"].map(function (comment) {

//   })
//   if (type === "ADD_COMMENT") {
//     const newComment = {
//       id: `c${Date.now}`,
//       likes: 0,
//       author: payload[author],
//       text: payload[text],
//     }

//     newBlogPost["comments"].push(newComment);
//   }

//   return newBlogPost;
// }

// const action1 = {
//   type: "ADD_COMMENT",
//   payload: { author: "Eva", text: "Mind blowing stuff!" },
// };

// const newPost = updateBlogPost(initialBlogPost, action1);

// console.log(newPost);

// let counter = 0;

// function counterPlusPlus() {
//   return counter++;
// }

// console.log(counterPlusPlus());
// console.log(counterPlusPlus());
// console.log(counterPlusPlus());
// console.log(counterPlusPlus());
// console.log(counterPlusPlus());

// function outerCounter() {
//   let myCounter = 0;

//   return function () {
//     return myCounter++;
//   }
// }

// let func = outerCounter();

// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());

//TODO 6-3 Variable scope, closure

//* Does a function pickup latest changes?

//? The function sayHi uses an external variable name. When the function runs, which value is it going to use?

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // what will it show: "John" or "Pete"?

// The answer is: Pete.

// A function gets outer variables as they are now, it uses the most recent values.

// Old variable values are not saved anywhere. When a function wants a variable, it takes the current value from its own Lexical Environment or the outer one.

//* Which variables are available?

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     alert(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // what will it show?

// The answer is Pete

//* Are counters independent?

//? Here we make two counters: counter and counter2 using the same makeCounter function.

// ?Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// alert(counter2()); //? 0
// alert(counter2()); //? 1

//!  Functions counter and counter2 are created by different invocations of makeCounter.
//! So they have independent outer Lexical Environments, each one has its own count.

//* Counter object

//? Here a counter object is made with the help of the constructor function.

//? Will it work? What will it show?

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert( counter.up() ); // ? 1
// alert( counter.up() ); // ? 2
// alert( counter.down() ); // ? 1

// Surely it will work just fine.
// Both nested functions are created within the same outer Lexical Environment, so they share access to the same count variable:

//* Function in if

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// sayHi();

//! The result is an error.
//! The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.

//* Sum with closures

//? Write function sum that works like this: sum(a)(b) = a+b.
//? Yes, exactly this way, using double parentheses (not a mistype).

// function sum(x) {
//   return function (y) {
//     return x + y;
//   }
// }
// console.log(sum(5)(-2));

//* Is variable visible?

// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();

//! In this example we can observe the peculiar difference between a “non-existing” and “uninitialized” variable.
//! As you may have read in the article Variable scope, closure, a variable starts in the “uninitialized” state from the moment when the execution enters a code block (or a function). And it stays uninitalized until the corresponding let statement.
//! In other words, a variable technically exists, but can’t be used before let.
//! The code above demonstrates it.

//* Filter through function

// function inBetween(x, y) {
//   return function (ele) {
//     return ele >= x && ele <= y;
//   }
// }

// function inArray(arr = []) {
//   return function (ele) {
//     return arr.includes(ele);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// console.log(arr.filter(inArray([1, 2, 10])));

//* Sort by field

// function byField(fieldName) {
//   return function (a, b) {
//     return a[fieldName] >= b[fieldName] ? 1 : -1;
//   };
// }

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// users.sort(byField("name"));

// console.log(users);

//* Army of functions

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // create a shooter function,
//       alert( i ); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//     i++;
//   }

//   // ...and return the array of shooters
//   return shooters;
// }

// let army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.

// {
//   let s = 1;
//   {
//     console.log(s);
//   }
// }

//TODO 6-4 The old "var"

//1

// console.log(message); ==> Goodbye
// console.log(i); ==> 3
// Why message is Goodbye ?
// Because var allows redeclarations and the code of testVar() function makes the last version of message to be "GoodBye",
// but if we had let's say:
// for (var i = 0; i < 3; i++) {
// var message = "Goodbye";
// }
// var message = "Hello";
// message now will be Hello,
// Why i is 3 ?
// first because i is not linked with the for loop scope, it's linked with the function scope, so it will be hoisted on the top of the function scope and the last version of it will be 3, so the answer is 3
// and if we assume we declared i with let keyword, we would have a ReferenceError that says i is not defined. why i is not defined ? Simply because i is linked with the for loop scope and it's not accessible outside it,

//2

// const buttonContainer = document.getElementById("buttons");

// for (let i = 1; i <= 3; i++) {
//   const btn = document.createElement("button");
//   btn.innerText = "Button " + i;
//   btn.onclick = function () {
//     console.log("You clicked button number:", i);
//   };
//   buttonContainer.appendChild(btn);

//   // Using let instead of var makes the value of i linked with every single iteration, not like var, which makes all the iterations share the same value of i which will be 4 in this case
//   // and there are things behind the scenes Contribute with this behavior such as Loop Event but i have not understand it yet so i will not talk about it
// }

//3

//TODO 6-5 Global object
//TODO 6-6 Function object, NFE

//* Set and decrease for counter

function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;
  counter.set = function (number) {
    counter.count = number;
  };

  counter.decrease = function () {
    counter.count--;
  };

  return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

counter.set(10);

console.log(counter());
console.log(counter());
console.log(counter());

counter.decrease()
counter.decrease()
counter.decrease()
counter.decrease()

console.log(counter());


//* Sum with an arbitrary amount of brackets



// function slowOperation(arg) {

//   if (slowOperation.cache[arg] === undefined) {
//     console.log("Computing...");
//     slowOperation.cache[arg] = arg * 2;
//   }
//   return slowOperation.cache[arg];
// }
// slowOperation.cache = {};

// console.log(slowOperation(5));
// console.log(slowOperation(5));
// console.log(slowOperation(10));
// console.log(slowOperation(20));

// console.log(slowOperation.cache);

//TODO 6-7 The "new Function" syntax


let globalVar = "I am global";

function scopeTest() {
  let localVar = "I am local";

  // Case 1: A standard function expression (closure)
  const normalFunction = () => {
    console.log("--- Normal Function ---");
    console.log(globalVar);
    console.log(localVar);
  };

  // Case 2: Using the Function constructor
  const dynamicFunction = new Function(`
    console.log("--- Dynamic Function ---");
    console.log(globalVar);
    console.log(localVar);
  `);

  normalFunction();

  try {
    dynamicFunction();
  } catch (error) {
    console.log("--- Dynamic Function ---");
    console.error("An error occurred:", error.message);
  }
}

scopeTest();

//TODO 6-8 Scheduling: setTimeout and setInterval
//TODO 6-9 Decorators and forwarding, call/apply
//TODO 6-10 Function binding
//TODO 6-11 Arrow functions revisited

//? Object properties configuration
//TODO 7-1 Property flags and descriptors
//TODO 7-2 Property getters and setters

//? Prototypes, inheritance
//TODO 8-1 Prototypal inheritance
//TODO 8-2 F.prototype
//TODO 8-3 Native prototypes
//TODO 8-4 Prototype methods, objects without __proto__

//? Classes
//TODO 9-1 Class basic syntax
//TODO 9-2 Class inheritance
//TODO 9-3 Static properties and methods
//TODO 9-4 Private and protected properties and methods
//TODO 9-5 Extending built-in classes
//TODO 9-6 Class checking: "instanceof"
//TODO 9-7 Mixins

//? Error handling
//TODO 10-1 Error handling, "try...catch"
//TODO 10-2 Custom errors, extending Error

//? Promises, async / await
//TODO 11-1 Introduction: callbacks
//TODO 11-2 Promise
//TODO 11-3 Promises chaining
//TODO 11-4 Error handling with promises
//TODO 11-5 Promise API
//TODO 11-6 Promisification
//TODO 11-7 Microtasks
//TODO 11-8 Async/await

//? Generators, advanced iteration
//TODO 12-1 Generators
//TODO 12-2 Async iteration and generators

//? Modules
//TODO 13-1 Modules, introduction
//TODO 13-2 Export and Import
//TODO 13-3 Dynamic imports

//? Miscellaneous
//TODO 14-1 Proxy and Reflect
//TODO 14-2 Eval: run a code string
//TODO 14-3 Currying
//TODO 14-4 Reference Type
//TODO 14-5 BigInt
//TODO 14-6 Unicode, String internals
//TODO 14-7 WeakRef and FinalizationRegistry

//! Browser: Document, Events, Interfaces

//? Document
//TODO 1-1 Browser environment, specs
//TODO 1-2 DOM tree
//TODO 1-3 Walking the DOM
//TODO 1-4 Searching: getElement*, querySelector*
//TODO 1-5 Node properties: type, tag and contents
//TODO 1-6 Attributes and properties
//TODO 1-7 Modifying the document
//TODO 1-8 Styles and classes
//TODO 1-9 Element size and scrolling
//TODO 1-10 Window sizes and scrolling
//TODO 1-11 Coordinates

//? Introduction to Events
//TODO 2-1 Introduction to browser events
//TODO 2-2 Bubbling and capturing
//TODO 2-3 Event delegation
//TODO 2-4 Browser default actions
//TODO 2-5 Dispatching custom events

//? UI Events
//TODO 3-1 Mouse events
//TODO 3-2 Moving the mouse: mouseover/out, mouseenter/leave
//TODO 3-3 Drag'n'Drop with mouse events
//TODO 3-4 Pointer events
//TODO 3-5 Keyboard: keydown and keyup
//TODO 3-6 Scrolling

//? Forms, controls
//TODO 4-1 Form properties and methods
//TODO 4-2 Focusing: focus/blur
//TODO 4-3 Events: change, input, cut, copy, paste
//TODO 4-4 Forms: event and method submit

//? Document and resource loading
//TODO 5-1 Page: DOMContentLoaded, load, beforeunload, unload
//TODO 5-2 Scripts: async, defer
//TODO 5-3 Resource loading: onload and onerror

//? Miscellaneous
//TODO 6-1 Mutation observer
//TODO 6-2 Selection and Range
//TODO 6-3 Event loop: microtasks and macrotasks

//! Additional articles

//? Frames and windows
//TODO 1-1 Popups and window methods
//TODO 1-2 Cross-window communication
//TODO 1-3 The clickjacking attack

//? Binary data, files
//TODO 2-1 ArrayBuffer, binary arrays
//TODO 2-2 TextDecoder and TextEncoder
//TODO 2-3 Blob
//TODO 2-4 File and FileReader

//? Network requests
//TODO 3-1 Fetch
//TODO 3-2 FormData
//TODO 3-3 Fetch: Download progress
//TODO 3-4 Fetch: Abort
//TODO 3-5 Fetch: Cross-Origin Requests
//TODO 3-6 Fetch API
//TODO 3-7 URL objects
//TODO 3-8 XMLHttpRequest
//TODO 3-9 Resumable file upload
//TODO 3-10 Long polling
//TODO 3-11 WebSocket
//TODO 3-12 Server Sent Events

//? Storing data in the browser
//TODO 4-1 Cookies, document.cookie
//TODO 4-2 LocalStorage, sessionStorage
//TODO 4-3 IndexedDB

//? Animation
//TODO 5-1 Bezier curve
//TODO 5-2 CSS-animations
//TODO 5-3 JavaScript animations

//? Web components
//TODO 6-1 From the orbital height
//TODO 6-2 Custom elements
//TODO 6-3 Shadow DOM
//TODO 6-4 Template element
//TODO 6-5 Shadow DOM slots, composition
//TODO 6-6 Shadow DOM styling
//TODO 6-7 Shadow DOM and events

//? Regular expressions
//TODO 7-1 Patterns and flags
//TODO 7-2 Character classes
//TODO 7-3 Unicode: flag "u" and class \p{...}
//TODO 7-4 Anchors: string start ^ and end $
//TODO 7-5 Multiline mode of anchors ^ $, flag "m"
//TODO 7-6 Word boundary: \b
//TODO 7-7 Escaping, special characters
//TODO 7-8 Sets and ranges [...]
//TODO 7-9 Quantifiers +, *, ? and {n}
//TODO 7-10 Greedy and lazy quantifiers
//TODO 7-11 Capturing groups
//TODO 7-12 Backreferences in pattern: \N and \k<name>
//TODO 7-13 Alternation (OR) |
//TODO 7-14 Lookahead and lookbehind
//TODO 7-15 Catastrophic backtracking
//TODO 7-16 Sticky flag "y", searching at position
//TODO 7-17 Methods of RegExp and String
