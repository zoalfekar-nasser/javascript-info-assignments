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

// function Calculator() {
//   this.operators = {
//     "+": function (a, b) {
//       return a + b;
//     },

//     "-": function (a, b) {
//       return a - b;
//     },
//   };
//   this.calculate = function (str) {
//     const arrSrt = str.split(" ");
//     let a = +arrSrt[0];
//     let b = +arrSrt[2];
//     let op = arrSrt[1];

//     if (op in this.operators && !isNaN(a) && !isNaN(b)) {
//       return this.operators[op](a, b);
//     } else {
//       return "There is no such operators";
//     }
//   };

//   this.addMethod = function (name, func) {
//     this.operators[name] = func;
//   };
// }

// const calc = new Calculator();

// calc.addMethod("*", (a, b) => a * b);

// console.log(calc.calculate("2 * 2"));

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

// function getRandomNumber(min, max) {
//   const MIN = Math.min(+min, +max);
//   const MAX = Math.max(+min, +max);

//   let randomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

//   return randomNumber;
// }

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

// function sumSalaries(salaries = {}) {
// const salariesArray = Object.values(salaries);

// let sumOfSalaries = 0;

// for (let salary of salariesArray) {

//   sumOfSalaries += salary;

// }

// return sumOfSalaries;

// return Object.values(salaries).reduce((acc, e) => acc + e, 0);
// }

// console.log(sumSalaries(salaries));

//* Count properties

// function count(obj = {}) {
//   return Object.keys(obj).length;
// }

// let user = {
//   name: 'John',
//   age: 30
// };

// console.log( count(user) ); // 2

//TODO 5-10 Destructuring assignment

//* Destructuring assignment

// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

//*The maximal salary

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries = {}) {
//   if (Object.keys(salaries).length === 0) {
//     return null;
//   }

//   let maxPaidPerson = "";
//   let maxSalary = 0;

//   for (let [person, salary] of Object.entries(salaries)) {
//     if (salary > maxSalary) {
//       maxPaidPerson = person;
//       maxSalary = salary;
//     }
//   }

//   return maxPaidPerson;
// }

// console.log(topSalary(salaries));

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

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;
//   counter.set = function (number) {
//     counter.count = number;
//   };

//   counter.decrease = function () {
//     counter.count--;
//   };

//   return counter;
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// counter.set(10);

// console.log(counter());
// console.log(counter());
// console.log(counter());

// counter.decrease();
// counter.decrease();
// counter.decrease();
// counter.decrease();

// console.log(counter());

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

// let globalVar = "I am global";

// function scopeTest() {
//   let localVar = "I am local";

//   // Case 1: A standard function expression (closure)
//   const normalFunction = () => {
//     console.log("--- Normal Function ---");
//     console.log(globalVar);
//     console.log(localVar);
//   };

//   // Case 2: Using the Function constructor
//   const dynamicFunction = new Function(`
//     console.log("--- Dynamic Function ---");
//     console.log(globalVar);
//     console.log(localVar);
//   `);

//   normalFunction();

//   try {
//     dynamicFunction();
//   } catch (error) {
//     console.log("--- Dynamic Function ---");
//     console.error("An error occurred:", error.message);
//   }
// }

// scopeTest();

// function createOperation(op) {
//   if (op != "+" && op != "-" && op != "/" && op !== "*") {
//       throw new Error(
//         "Invalid operator. Please use one of '+', '-', '*', or '/'."
//       );
//   }

//   createOperation.op = op;

//   const operation = new Function(
//     "a, b",
//     `
//     switch(createOperation.op) {
//       case "+":
//           return a + b;
//           break;
//       case "-":
//           return a - b;
//           break;
//       case "/":
//           return a / b;
//           break;
//       case "*":
//           return a * b;
//           break;
//     }
//     `
//   );

//   return operation;
// }

// let add = createOperation("");

// console.log(add());

//TODO 6-8 Scheduling: setTimeout and setInterval

//*  Output every second
// function printNumbersUpWithInterval(from, to) {
//   let currentCounter = Math.min(from, to);
//   let targetNumber = Math.max(from, to);

//   let intervalId = setInterval(() => {
//     console.log(currentCounter++);

//     if (currentCounter > targetNumber) {
//       console.log("Counter Done !");
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

// function printNumbersUpWithTimeout(from, to) {
//   let currentCounter = Math.min(from, to);
//   let targetNumber = Math.max(from, to);

//   function counter() {
//     if (currentCounter > targetNumber) {
//       console.log("Counter Done !");
//       return;
//     }

//     console.log(currentCounter++);

//     setTimeout(counter, 100);
//   }

//   counter();
// }

// function printNumbers(from, to) {

//   let currentCounter = from;
//   const step = (from < to) ? 1 : -1;

//   function counter() {
//     if (
//       (step === 1 && currentCounter > to) ||
//       (step === -1 && currentCounter < to)
//     ) {
//       return;
//     }

//     console.log(currentCounter);
//     currentCounter += step;

//     setTimeout(counter, 250);
//   }

//   counter();
// }

// printNumbers(2, 10);

// printNumbersUp(10, 1);

//* What will setTimeout show?

//* AI Assignments
// function printCounter(counter) {
//   function countDown() {
//     console.log(countDown.counter--);
//   }
//   countDown.counter = counter;

//   let counterTimer = 1000;

//   let countDownId = setInterval(countDown, counterTimer);

//   setTimeout(() => {
//     if (countDown.counter === 0) {
//       clearInterval(countDownId);
//       console.log("Liftoff!");
//     }
//   }, counterTimer * countDown.counter);
// }

// printCounter(20);

// function printCounter(counter) {
//   let currentCounter = counter;

//   let counterId = setInterval(() => {
//     console.log(currentCounter--);
//     if (currentCounter === 0) {
//       clearInterval(counterId);
//       console.log("Liftoff!");
//     }
//   }, 1000);
// }

// printCounter(10)

// function printCounterSetTimeOut(counter) {
//   let currentCounter = counter;

//   function countDown() {
//     console.log(currentCounter--);
//     if (currentCounter > 0) {
//       setTimeout(countDown, 1000);
//     } else {
//       console.log("Liftoff!");
//     }
//   }
//   setTimeout(countDown, 1000);
// }

// printCounterSetTimeOut(5);

// function type(HTMLElement = document.body, text = "") {
//   let currentIndex = 0;

//   function addChar() {
//     if (currentIndex === text.length) {
//       return;
//     }

//     HTMLElement.textContent += text[currentIndex];
//     currentIndex++;
//     setTimeout(addChar, 150);
//   }

//   addChar();
// }

// const myP = document.querySelector("#myP");
// type(myP, "Hello World!")

//TODO 6-9 Decorators and forwarding, call/apply

//* Spy decorator

// function spy(func = function(){}) {
//   if (func.calls === undefined) {
//     func.calls = [];
//   }

//   func.calls.pop(getArgs(func.arguments));

//   return function (...args) {
//     func.call(this, ...args);
//   }
// }

// function getArgs(array) {
//   const args = []
//   for (let arg of array) {
//     args.pop(arg)
//   }

//   return args;
// }

// function work(a, b) {
//   console.log(a + b); // work is an arbitrary function or method
// }

// work = spy(work);

// work(1, 2); //
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert("call:" + args.join()); // "call:1,2", "call:4,5"
// }

//* Delaying decorator
//* Debounce decorator
//* Throttle decorator

//TODO 6-10 Function binding

//* Bound function as a method

// function f() {
//   console.log(this); // ? // The answer is null
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();

//* Second bind

// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" });

// f();

// The exotic bound function object returned by f.bind(...) remembers the context (and arguments if provided) only at creation time.
// A function cannot be re-bound.

//* Function property after bind

// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "John"
// });

// alert( bound.test ); //? what will be the output? why?

// The answer: undefined.
// The result of bind is another object. It does not have the test property.

//* Fix a function that loses "this"

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//* Partial application for login

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); //

// const arrowObject = {
//   userName: "Zoalfekar Nasser",

//   arrowFunc: () => {
//     console.log(this);
//   }
// }

// arrowObject.arrowFunc();

// console.log(mmm);

// alert("12" >= 1)

// console.log(false ?? "null");

// function sum1(n1, n2) {
//   return n1 + n2;
// }

// function sum2(n1, n2) {
//   return n1 - n2;
// }

// console.log(sum1(1, 2));

// sum1 = 2;

// console.log(sum1);

//TODO 6-11 Arrow functions revisited

//? Object properties configuration

//TODO 7-1 Property flags and descriptors

//* Assignment 1: Inspecting and Understanding (Theory)

// const user = {
//   name: "Zoalfekar",
//   age: 23,
// }

// console.log(Object.getOwnPropertyDescriptor(user, "age"));

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

//* Assignment 2: Creating a Secure Property (Coding)

// const user = {};

// Object.defineProperty(user, "id", {
//   value: Date.now(),
//   writable: false,
//   enumerable: false,
//   configurable: false,
// })

// console.log(user.id);

// console.log(Object.getOwnPropertyDescriptor(user, "id"));

// try {
//   Object.defineProperty(user, "id", {
//     enumerable: true,
//   });

//   delete user.id;
// } catch (error) {
//   console.log("You Cannot do that because of 'configurable: false', and this is one way road, and you cannot go back.");
// }

//* Assignment 3: The "Perfect" Shallow Clone (Real-World Application)
//! Solved later after learning prototype

//TODO 7-2 Property getters and setters

//* Assignment 1: The Smart Product (Basics)

// const product = {
//   name: "ASUS ROG Strix G17 G713QE",
//   price: 1200,
//   discount: 0.25,

//   get finalPrice() {
//     return `$${this.price - this.price * this.discount}`;
//   }

// }

// console.log(product.finalPrice); // $900

// product.price = 1400;

// console.log(product.finalPrice); // $1050

//* Assignment 2: The Validated Bank Account (Intermediate)

// const bankAccount = {

//   _balance: 0,

// };

// Object.defineProperty(bankAccount, "balance", {
//   get() {
//     return this._balance;
//   },

//   set(value) {

//     if (value < 0) {
//       console.error("Balance cannot be negative.");
//       return;
//     }

//     this._balance = value;
//     console.log(`Setting balance to: ${value}.`);
//   }
// });

// bankAccount.balance = 200;

// console.log(bankAccount.balance);

// bankAccount.balance = -45;

//*Assignment 3: The Legacy Wrapper (Advanced/Real World)

// const rect = {
//   _width: 10,
//   _height: 20,

//   get width() {
//     return this._width;
//   },

//   set width(value) {
//     if (!isFinite(value)) {
//       console.error("Invalid datatype.");
//     }

//     if (value < 0) {
//       console.error("The width cannot be negative.");
//     }

//     this._width = +value;
//   },

//   get height() {
//     return this._height;
//   },

//   set height(value) {
//     if (!isFinite(value)) {
//       console.error("Invalid datatype.");
//     }

//     if (value < 0) {
//       console.error("The height cannot be negative.");
//     }

//     this._height = +value;
//   },

//   get area() {
//     return this._width * this._height;
//   },

//   set area(value) {
//     if (!isFinite(value)) {
//       console.error("Invalid datatype.");
//     }

//     if (value < 0) {
//       console.error("The area cannot be negative.");
//       return;
//     }
//     this._height = value / this._width;
//   },
// };

//? Prototypes, inheritance
//TODO 8-1 Prototypal inheritance

//* Working with prototype

// Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3)

//!The Answer:

// true, taken from rabbit.
// null, taken from animal.
// undefined, there’s no such property any more.

//* Searching algorithm

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
// };

// let pockets = {
//   money: 2000,
// };

// pockets.__proto__ = bed;

// bed.__proto__ = table;

// table.__proto__ = head;

// console.log(pockets.pen);
// console.log(bed.glasses);

// let begin, end;

// begin = Date.now();

// console.log(bed.glasses);

// end = Date.now();

// console.log(`The Time is With prototype : ${(end - begin) / 1000}s`);

// bed.glasses = 2;

// begin = Date.now();

// console.log(bed.glasses);

// end = Date.now();

// console.log(`The Time is Without prototype : ${(end - begin) / 1000}s`);

//* Where does it write?

// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

//! The answer: rabbit.

// That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

// Property lookup and execution are two different things.

// The method rabbit.eat is first found in the prototype, then executed with this=rabbit.

//* Why are both hamsters full?
// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// alert(lazy.stomach); // apple

//! solution

// Let’s look carefully at what’s going on in the call speedy.eat("apple").

// The method speedy.eat is found in the prototype (=hamster), then executed with this=speedy (the object before the dot).

// Then this.stomach.push() needs to find stomach property and call push on it. It looks for stomach in this (=speedy), but nothing found.

// Then it follows the prototype chain and finds stomach in hamster.

// Then it calls push on it, adding the food into the stomach of the prototype.

// So all hamsters share a single stomach!

// Both for lazy.stomach.push(...) and speedy.stomach.push(), the property stomach is found in the prototype (as it’s not in the object itself), then the new data is pushed into it.

// Please note that such thing doesn’t happen in case of a simple assignment this.stomach=:

// let hamster = {
//   stomach: [],

//   eat(food) {
//     // assign to this.stomach instead of this.stomach.push
//     this.stomach = [food];
//   }
// };

// let speedy = {
//    __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Speedy one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // Lazy one's stomach is empty
// alert( lazy.stomach ); // <nothing>
// Now all works fine, because this.stomach= does not perform a lookup of stomach. The value is written directly into this object.

// Also we can totally avoid the problem by making sure that each hamster has their own stomach:

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster,
//   stomach: []
// };

// let lazy = {
//   __proto__: hamster,
//   stomach: []
// };

// // Speedy one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // Lazy one's stomach is empty
// alert( lazy.stomach ); // <nothing>
// As a common solution, all properties that describe the state of a particular object, like stomach above, should be written into that object. That prevents such problems.

//*1 Assignment 1: Theory and Concepts (Conceptual)

// const vehicle = {
//   startEngine() {
//     console.log(`Engine on for ${this.model}`);
//   }
// }

// const tesla = {
//   model: "Model S",
// }

// const car = {};

// Object.setPrototypeOf(tesla, car);

// Object.setPrototypeOf(car, vehicle);

// tesla.startEngine();

// JS Engine first will search for startEngine() in tesla object , it will not find it, so it will move to its prototype (The beginning of the prototype chain) it will not find it also, and it will move to its prototype which is vehicle and it will find the method startEngin(), and 'this' refers to the first object (the object to the left of dot (tesla)) so the JS engine will find it and log "Engine on for Model S"

//*2 Assignment 2: Creating a Hierarchy (Coding)

// const htmlElement = {
//   render() {
//     return `Rendering a generic ${this.tagName}`
//   }

// }

// const divElement = Object.create(htmlElement);

// divElement.tagName = "div";

// const pElement = Object.create(htmlElement);

// pElement.tagName = "p";

// const mainDiv = Object.create(divElement);

// mainDiv.id = "main-content";

// console.log(mainDiv.render());
// console.log(pElement.render());

//*3 Assignment 3: Real-World State Management (Problem Solving)

// const component = {
//   state: {},

//   setState(key, value) {
//     this.state[key] = value;
//   }

// }

// const button = Object.create(component);

// const input = Object.create(component);

// button.setState("text", "Click Me!")

// console.log(input.state);

//Why did the input component get the state of the button?
// The answer is because both input and button share the same (state) object which comes from the inherited object (component), and the fix is so simple, give each one of (input, button) its own state object, so here is the fixed code:

// const component = {

//   setState(key, value) {
//     if (this.hasOwnProperty("state")) {
//       this.state = Object.assign(this.state, { [key]: value });
//     } else {
//       this.state = Object.assign({}, { [key]: value });
//     }
//   },
// };

// const button = Object.create(component);

// const input = Object.create(component);

// button.setState("text", "Click Me!");
// button.setState("hover", "Hover Me!")
// input.setState("focus", true);

// console.log(button.state); //{text: 'Click Me!', hover: 'Hover Me!'}
// console.log(input.state); //{focus: true}

//TODO 8-2 F.prototype

//* Changing "prototype"

// In the code below we create new Rabbit, and then try to modify its prototype.

// In the start, we have this code:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// alert( rabbit.eats ); // true
// We added one more string (emphasized). What will alert show now?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert( rabbit.eats ); // ?
// …And if the code is like this (replaced one line)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // ?
// And like this (replaced one line)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); // ?
// The last variant:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // ?
// solution
// Answers:

// true.

// The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones.

// false.

// Objects are assigned by reference. The object from Rabbit.prototype is not duplicated, it’s still a single object referenced both by Rabbit.prototype and by the [[Prototype]] of rabbit.

// So when we change its content through one reference, it is visible through the other one.

// true.

// All delete operations are applied directly to the object. Here delete rabbit.eats tries to remove eats property from rabbit, but it doesn’t have it. So the operation won’t have any effect.

// undefined.

// The property eats is deleted from the prototype, it doesn’t exist any more.

//* Create an object with the same constructor

// function F(name) {
//   this.name = name;
// }

// const f1 = new F("Zoalfekar");

// console.log(f1.name);

// const f2 = new f1.constructor("Ali");

// console.log(f2.name);

// F.prototype = { test: true };

// const f3 = new f2.constructor("Ahmed");

// console.log(f3.name);

// console.log(f3.__proto__);

// const f4 = new f3.constructor(2);

// console.log(f4);

//* Assignment 1: Theoretical Questions

//1 The value is: {isElectronic: true};
//2 The value of Gadget.prototype is : {isElectronic: true}, and yes they are the same object
//3 it will output false, why ? because there is no such (constructor) property in 'watch' object or its prototype, the search process will continue until accessing the constructor property in the 'Object' constructor which is the same as 'Object (something)'
//and to fix this problem we have to compensation the constructor property in the Gadget prototype like that:
// Gadget.prototype.constructor = Gadget; and now it will work
//4 Yes, because Function prototype is a one-time gift, so the 'watch' prototype will see the changes of function prototype after creation BUT it does not care if
// replace the whole prototype object (Please explain this point more, because i did not fully understand how the object does not care if we replace the whole object, and in the same time it sees the changes like deleting or adding or modifying)

//5 it will remain true, because the reference of the watch prototype will remain the same, it will deliver the JS engine to the object in the memory that has { isElectronic: true },
// oh now i understand the point that i asked you about,
// the function prototype and the object prototype reference to the same object in the memory, that's why when we modify on the function prototype, the object prototype can see this modifying, because simply they are the same object,
// but, there is a pop-up in my head now, which is "THAT ALSO MEANS IF WE MODIFY ANY OBJECT PROTOTYPE, THAT WILL MODIFY THE PROTOTYPE OF ITS CONSTRUCTOR FUNCTION", oh that is dangerous in my opinion, because we can do that:

// watch.__proto__.forTesting = "TEST";

// console.log(watch.forTesting);

// console.log(Gadget.prototype.forTesting); //TEST

// let watch2 = new Gadget("t1", "t2");

// console.log(watch2.forTesting); // TEST

// SO WHAT CAN WE DO HERE ?

// function Gadget(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Gadget.prototype = {
//   isElectronic: true,
// };

// let watch = new Gadget("Smart Watch", "Black");

// console.log(watch.isElectronic);

// watch.__proto__.forTesting = "TEST";

// console.log(watch.forTesting);

// console.log(Gadget.prototype.forTesting);

// let watch2 = new Gadget("t1", "t2");

// console.log(watch2.forTesting);

// Gadget.prototype.isElectronic = false;

// Gadget.prototype.canTurnWifi = true;

//  Gadget.prototype = {};

// console.log(watch.canTurnWifi);

//* Assignment 2: Coding a Constructor with Prototypes

// function Book(title, author) {
//   this.title = title;
//   this.author = author;

// }

// Book.prototype["getDetails"] = function () {
//   return `Title: ${this.title}, Author: ${this.author}`;
// }

// Book.genre = "Fiction";

// const book1 = new Book("The Hobbit", "J.R.R Tolkien");

// const book2 = new Book("1984", "George Orwell");

// console.log(book1.getDetails()); // Title: The Hobbit, Author: J.R.R Tolkien
// console.log(book2.getDetails()); // Title: 1984, Author: George Orwell

// console.log(book1.hasOwnProperty("getDetails")); // false

//* Assignment 3: Real-World Refactoring

// function Player(name) {
//   this.name = name;

//   this.health = 100;

//   this.inventory = [];
// }

// Player.prototype = {
//   constructor: Player,

//   logState() {
//     console.log(
//       `Player ${this.name}, Health ${
//         this.health
//       }, Inventory: ${this.inventory.join(", ")}`
//     );
//   },

//   addToInventory(item) {
//     this.inventory.push(item);
//   },
// };

// // function Player(name) {
// //   this.name = name;
// //   this.health = 100;
// //   this.inventory = [];

// //   this.logState = function() {
// //     console.log(
// //       `Player: ${this.name}, Health: ${this.health}, Inventory: ${this.inventory.join(', ')}`
// //     );
// //   };

// //   this.addToInventory = function(item) {
// //     this.inventory.push(item);
// //   }
// // }

// let player1 = new Player("Aragorn");
// player1.addToInventory("sword");

// let player2 = new Player("Gandalf");
// player2.addToInventory("staff");

// Problem: player1.logState is a different function than player2.logState. This wastes memory.
// console.log(player1.logState === player2.logState); // false
// console.log(player1.addToInventory === player2.addToInventory); // false

//TODO 8-3 Native prototypes

// const t1 = {
//   name: "Name",
//   valueOf() {
//     return "Value Of";
//   },

//   toString() {
//     return "toString";
//   },
// };

// // Object.setPrototypeOf(t1, null);

// // alert(t1);

// const arr1 = [1, 2, 3];

// console.log(Object.getPrototypeOf(arr1));

// console.log(arr1.length);

// function sumOf(n1, n2) {
//   return n1 + n2;
// }

// console.log(Object.getPrototypeOf(sumOf));
// const t1 = {
//   name: "Name",
//   valueOf() {
//     return "Value Of";
//   },

//   toString() {
//     return "toString";
//   },
// };

// // Object.setPrototypeOf(t1, null);

// // alert(t1);

// const arr1 = [1, 2, 3];

// console.log(Object.getPrototypeOf(arr1));

// console.log(arr1.length);

// function sumOf(n1, n2) {
//   return n1 + n2;
// }

// console.log(Object.getPrototypeOf(sumOf));

//* Add method "f.defer(ms)" to functions

// Function.prototype["defer"] = function (ms) {
//   setTimeout(this, ms);
// }

// function f() {
//   alert("Hello!");
// }

// f.defer(1000)

//* Add the decorating "defer()" to functions

// Function.prototype.defer = function(ms) {
//   let f = this;
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   }
// };

// // check it
// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // shows 3 after 1 sec

// // Please note: we use this in f.apply to make our decoration work for object methods.

// // So if the wrapper function is called as an object method, then this is passed to the original method f.

// Function.prototype.defer = function(ms) {
//   let f = this;
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   }
// };

// let user = {
//   name: "John",
//   sayHi() {
//     alert(this.name);
//   }
// }

// user.sayHi = user.sayHi.defer(1000);

// user.sayHi();

//*
//*
//*
//*

//TODO 8-4 Prototype methods, objects without __proto__

//* Add toString to the dictionary

// const dictionary = Object.create(null);

// Object.defineProperty(dictionary, "toString", {
//   value: function () {
//     return Object.keys(this).join(", ");
//   },
//   writable: true,
//   configurable: true,
// })

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// for (let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }

// console.log(dictionary.toString());

//* The difference between calls

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name);
// };

// let rabbit = new Rabbit("Rabbit");

// // These calls do the same thing or not?

// rabbit.sayHi()
// Rabbit.prototype.sayHi()
// Object.getPrototypeOf(rabbit).sayHi()
// rabbit.__proto__.sayHi()

// The first call has this == rabbit, the other ones have this equal to Rabbit.prototype, because it’s actually the object before the dot.

// So only the first call shows Rabbit, other ones show undefined:

//*

//? Classes OOP

//TODO 9-1 Class basic syntax

//* Rewrite to class

// class Clock {

//   constructor({ template}) {
//     this.timer = null
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours()
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes()
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template.replace("h", hours).replace("m", mins).replace("s", secs);

//     console.log(output);
//   };

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     timer = setInterval(() => { this.render() }, 1000);
//   }

// }

// let clock = new Clock({ template: "h:m:s" });

// clock.start()

//* Assignment 1: The Basic Blueprint (Theory & Syntax)

// class Product {

//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   display() {
//     console.log(`Product "${this.name}" costs ${this.price}$`);
//   }

//   get taxes() {
//     return this.price * 0.1;
//   }

// }

// const p1 = new Product("ASUS ROG Strix G17", 1200);

// p1.display()
// console.log(p1.taxes)

//* Assignment 2: Rewriting Constructors (Migration)

// class LibraryBook {

//   isAvailable = true;

//   constructor(title) {
//     this.title = title;
//   }

//   borrow() {
//     this.isAvailable = false;

//     console.log(`'${this.title}' borrowed.`);
//   }
// }

// const book1 = new LibraryBook("OOP In JS Explained");

// console.log(book1.isAvailable); // true

// book1.borrow();

// console.log(book1.isAvailable); // false

//* Assignment 3: The "Clicker" Component (Real-world Logic)

// class ClickCounter {
//   counts = 0;

//   click = () => {
//     console.log(this.counts++);
//   }

//   startAutoClick () {
//     setInterval(this.click, 1000)
//   }

// }

// const clickCounter = new ClickCounter();

// clickCounter.startAutoClick()

//

//TODO 9-2 Class inheritance

// class GenericAnimal {
//   constructor(age) {
//     this.age = age;
//   }

//   run() {
//     console.log(`Run Comes From GenericAnimal`);
//   }
// }

// class SpecificAnimal extends GenericAnimal {
//   constructor(age, id) {
//     super(age);
//     this.id = id;
//   }

//   // run() {
//   //   console.log(`Run Comes From SpecificAnimal`);
//   // }
// }

// class Rabbit extends SpecificAnimal {

//   constructor(name,id,age) {
//     super(age,id);
//     this.name = name;

//   }

//   run() {
//     super.run();
//     console.log(`Run From Rabbit`);
//   }
// }

// const rabbit = new Rabbit("ZZZ",2222,22);

// console.log(rabbit.name);
// console.log(rabbit.id);
// console.log(rabbit.age);
// rabbit.run();

//* Error creating an instance

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     this.name = name;
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); //! Error: this is not defined
// alert(rabbit.name);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); //! Ok Now
// alert(rabbit.name);

//* Extended clock

//* Assignment 1: The RPG Character (Basics)

// class Character {
//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }

//   attack() {
//     console.log(`${this.name} attacks with fists`);
//   }
// }

// class Mage extends Character {
//   mana = 100;

//   attack() {
//     if (this.mana >= 10) {
//       this.mana -= 10;

//       console.log(`${this.name} casts a fireball`);
//     } else {
//       super.attack();
//     }
//   }
// }

// //* Assignment 2: The Custom Error (Constructor logic)

// class ValidationError extends Error {
//   constructor(message, code) {
//     super(message);
//     this.name = "ValidationError";
//     this.code = code;

//   }

// }

// let err = new ValidationError("Error message", "Error code");

// // 1. We wrap the dangerous code in 'try'
// try {
//   const age = -5; // Invalid age

//   if (age < 0) {
//     // 2. "Pull the pin". We throw YOUR custom class.
//     throw new ValidationError("Age cannot be negative", 400);
//   }

//   console.log("This line is skipped because of the error!");

// } catch (err) {
//   // 3. The code JUMPS here immediately if an error happens.

//   // We can inspect the error object we just threw
//   if (err instanceof ValidationError) {
//     console.log("Validation Failed!");
//     console.log(`Message: ${err.message}`); // "Age cannot be negative"
//     console.log(`Code: ${err.code}`);       // 400
//   } else {
//     console.log("Unknown error occurred.");
//   }
// }

// console.log(err.message);
// console.log(err.stack);
// console.log(err.code);

//* Assignment 3 (The Hard One)

// class Config {

//   get prefix() {
//     return "Default"
//   }

//   constructor() {

//     console.log(this.prefix);
//   }
// }

// class UserConfig extends Config {
//   get prefix() {
//     return "User"
//   }
// }

// new UserConfig(); // Logs: "User" !!

// Simply because the order of execution, when we create an instance of
// UserConfig and because of UserConfig inherits Config the constructor of
//  Config is called first, and when its called it logs `Current Prefix: ${this.prefix}`
// now the question is: from where we get the value of prefix ?
// the order is this:
// Creating The u Object
// Calling the constructor of Config (super)
// constructor wants to log `Current Prefix: ${this.prefix}`
// JS Engine looks for prefix property in u object ("this" refers to u)
// JS Engine cannot find the prefix property in Object, Why ? the prefix in that moment does not initialized yet
// because of that JS Engine starts to looking for prefix in u's prototype, which is Config.prototype
// JS Engine finds prefix and logs Current Prefix: Default
// This is my understanding for this situation, if im wrong please tell me and explain deeply

//TODO Multi-Level Inheritance

//* Assignment 1: The Stack Trace (Mental Model)

// class God {
//   log() {
//     console.log("1");
//   }
// }

// class Adam extends God {
//   log() {
//     console.log("2 - Start");
//     super.log()
//     console.log("2 - End");
//   }
// }

// class Human extends Adam {

//   log() {
//     super.log()
//     console.log("3");
//   }
// }

// const human = new Human();

// human.log();

// 2 - Start
// 1
// 2 - End
// 3

//* Assignment 2: The "Middleman" Modifier (Data Flow)

// class BasePrice {
//   calculate(cost) {
//     return cost;
//   }
// }

// class TaxLayer extends BasePrice {
//   calculate(cost) {
//     let newCost = cost + cost * 0.2;
//     return super.calculate(newCost);
//   }
// }

// class DiscountLayer extends TaxLayer {
//   calculate(cost) {
//     return super.calculate(cost) - 10;
//   }
// }

// const p1 = new DiscountLayer();

// console.log(p1.calculate(100));

//* Assignment 3: The "Skipped Link"

// class GrandParent {
//   eat() {
//     console.log("From GrandParent");
//   }
// }

// class Parent extends GrandParent {}

// class Child extends Parent {
//   eat() {
//     super.eat();
//   }
// }

// new Child().eat();

/*
For me this the Easiest One,

Simply, super does not mean (look for the method in the Direct Parent and stop there)
but it means ( START looking for the method in the Direct Parent, and if you cannot find it continue to its prototype and so on)
so the result is : From GrandParent

*/

//*

// class Logger {

//   timestamp = 1010;

//   getPrefix() {
//     return "System:";
//   }

//   log(message) {
//     console.log(`${this.getPrefix()} ${message}`);
//   }

//   constructor(message) {
//     this.log(message)
//   }

// }

// class TimeLogger extends Logger {
//   timestamp = Date.now();

//   getPrefix() {
//     return super.getPrefix() + " at " + this.timestamp;
//   }
// }

// class ErrorLogger extends TimeLogger {
//   getPrefix() {
//     return "[ERROR]" + super.getPrefix();
//   }
// }

// new ErrorLogger("Database Fail");

//1

/*

When we run new ErrorLogger("Database Fail") what happens?

The constructor is inherited from Logger, and it runs this.log, which is only found in Logger Prototype also,

then this will runs  console.log(`${this.getPrefix()} ${message}`);

the engine tries to run getPrefix(), so it looks for it in this firs, and it finds it

then it runs return "[ERROR]" + super.getPrefix();

the super.getPrefix() runs, which is super.getPrefix() + " at " + this.timestamp

the super.getPrefix() runs, and it returns System:, and then we go down and continue running, 
(the super.getPrefix() from TimeLogger) and it returns after that at {this.timestamp}

so until now we have this "[ERROR]System: at this.timestamp", why this.timestamp is undefined,

because first until now the constructor in Logger does not finish yet, so the only fields that can be seen are

the Logger fields, and Logger has no such field, so its value is undefined,

we continue running, so we are now in the end of this.log() method

so we try to print message, so the final result is:

[ERROR]System: at undefined Database Fail


*/

// Now the Refactored Code:

// class Logger {
//   timestamp = 1010;

//   getPrefix() {
//     return "System:";
//   }

//   log(message) {
//     console.log(`${this.getPrefix()} ${message}`);
//   }

//   constructor(message) {
//     this.log(message);
//   }
// }

// class TimeLogger extends Logger {
//   getTimestamp() {
//     return Date.now();
//   }

//   getPrefix() {
//     return super.getPrefix() + " at " + this.getTimestamp();
//   }
// }

// class ErrorLogger extends TimeLogger {
//   getPrefix() {
//     return "[ERROR]" + super.getPrefix();
//   }

// }

// new ErrorLogger("Database Fail");

/* 

I told you why the first code failed, now let me tell you why this one works, 
simply because we do not deal with the class field headache anymore
we deal now with the methods and prototypes,
so when the Engine reaches   this.getTimestamp() it looks for it in the object's prototype first,
then the next prototype until it reaches it in TimeLogger, and it runs it

and i prefer:

  getTimestamp() {
    return Date.now();
  }
  
  on:

  get timestamp() {
    return Date.now()
  }
  
  why ?

  because if we assume there is timestamp filed in Logger, it will be used, for example:

  class Logger {
  timestamp = 1010;

  getPrefix() {
    return "System:";
  }

  log(message) {
    console.log(`${this.getPrefix()} ${message}`);
  }

  constructor(message) {
    this.log(message);
  }
}

class TimeLogger extends Logger {
  get timestamp() {
    return Date.now();
  }

  getPrefix() {
    return super.getPrefix() + " at " + this.timestamp;
  }
}

class ErrorLogger extends TimeLogger {
  getPrefix() {
    return "[ERROR]" + super.getPrefix();
  }


}

new ErrorLogger("Database Fail"); The result: [ERROR]System: at 1010 Database Fail


so my solution is the safest one, (Please explain more the behavior above)

*/

//* Assignment 1: The Broken Transfer (Concept: [[HomeObject]])

// class A {
//   test() {
//     console.log("A");
//   }
// }

// class B extends A {
//   test() {
//     super.test();
//   }
// }

// const objB = new B();

// const outsideObj = {

//   test: objB.test,

// }

// outsideObj.test();

/*

Yes, the method Logs "A", why ?

when we copy the objB.test() to outside.test, they became exactly the same function, in everything,

so when we run outsideObj.test(), we can say we run objB.test(), the super inside the functions, looks for
outside.test.[[HomeObject]].prototype, which is A.prototype, so A.test() runs, and logs "A"

(The [[HomeObject]] does not change, it is always the same, and we have simply the same functions there)


console.log(outsideObj.test === objB.test); true

*/

//* Assignment 2: The "Unseen" Property (Concept: Field Order)

// class BaseConfig {

//   getTheme() {
//     return "Light"
//   }

//   constructor() {
//     console.log(this.getTheme());
//   }

// }

// class DarkConfig extends BaseConfig{

//     getTheme() {
//     return "Dark"
//   }

// }

// new DarkConfig();

//*

// const parent = {
//   name: "Parent",
//   show() {
//     console.log(this.name);
//   }
// }

// const child = {
//   __proto__: parent,

//   show() {
//     this.__proto__.show.call(this);
//   }
// }

// const grandChild = {
//   __proto__: child,

//   show() {
//     this.__proto__.show.call(this);
//   },
// };

// grandChild.show();

//! HomeObject and super Assignments

//*Assignment 1: The "Frankenstein" Method (Static Anchor)

// class Human {
//   breathe() {
//     return "Inhaling Oxygen ";
//   }
// }

// class Alien {
//   breathe() {
//     return "Inhaling CO2";
//   }
// }

// class Cyborg extends Human {
//   breathe() {
//     return super.breathe() + "and processing data";
//   }
// }

// let alienObj = new Alien();

// alienObj.breathe = new Cyborg().breathe;

// console.log(alienObj.breathe());

/*
Output: Inhaling Oxygen and processing data

Explanation:
when we did: alienObj.breathe = new Cyborg().breathe;
we override the original breathe method in alienObj object
with breathe method from a Cyborg object, this method returns:
" super.breathe() + "and processing data", now here when we call alienObj.breathe()
what will be the value of (super), as you know we copied the 
breathe method from Cyborg by reference, so basically
the method inside alienObj, and inside Cyborg are the same

so for the value of (super), JS engine looks for [[HomeObject]]
from the breathe method inside Cyborg, which
is Cyborg, so now super is [[HomeObject]].prototype.prototype, which is
Human, (The [[HomeObject]].prototype is the prototype of Cyborg) 
so the prototype of the prototype of Cyborg is the prototype of Human, so because of that we had the result above.

*/






//* Assignment 2: The Runtime Surgery (Dynamic Chain)



//*
//*
//TODO 9-3 Static properties and methods

//* Class extends Object?

function CCC(n) {
  this.n = n;
}
// console.log(Object.getPrototypeOf(CCC));



// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");
// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");

// console.log(rabbit.hasOwnProperty("name"));

// console.log(Function.__proto__);

//* Assignment 1: The Configuration Class (Foundational)

// class ServiceConfig {
//   static BASE_URL = "https://api.example.com";

//   static getUrl(endpoint) {
//     return this.BASE_URL + endpoint;
//   }

// }

// console.log(ServiceConfig.getUrl("/user"));

//* Assignment 2: Instance Counter (Intermediate)
// class User {
//   static userCount = 0;
//   constructor() {
//     User.userCount++;
//   }

//   static getDetails() {
//     console.log(`Total users created: ${this.userCount}`);
//   }

// }

// const o1 = new User();
// const o2 = new User();
// const o3 = new User();

// User.getDetails() //3

//* Assignment 3: Sorting with Inheritance (Advanced)

// class Shape {
//   constructor(area) {
//     this.area = area;
//   }

//   static compare(shape1, shape2) {

//     return shape1.area - shape2.area;

//   }

// }

// class Square extends Shape {

//   constructor(sideLength) {
//     super(sideLength * sideLength);
//   }

// }

// const s1 = new Square(2);
// const s2 = new Square(3);
// const s3 = new Square(4);
// const s4 = new Square(5);

// const squares = [s3, s4, s1, s2];

// console.log(squares);

// const sortedSquares = squares.sort(Square.compare);

// console.log(sortedSquares); //sorted

//TODO 9-4 Private and protected properties and methods

//* Assignment 1: The Basic "Protected" User (Theory & Convention)

// class User {
//   _age = 1;

//   set age(value) {

//     if (value < 0) {
//       console.error("Warning, invalid negative age");
//       return;
//     }

//     this._age = value
//   }

//   get age() {
//     return this._age;
//   }

// }

// const user = new User();

// user.age = -5; // Warning, invalid negative age

//* Assignment 2: The "Private" Bank Vault (Modern Syntax)

// class BankAccount {

//   #balance = 0;

//   deposit(amount) {

//     if (amount < 0) {
//       console.error("Warning, Cannot deposit negatives");
//       return;
//     }

//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       console.error("Warning, Insufficient funds!");
//       return;
//     }
//     this.#balance -= amount;
//     console.log(`Withdrawing $${amount} succeed, Your new balance is $${this.#balance}`);

//   }

//   getBalance() {
//     return `Your account has: $${this.#balance}`
//   }

// }

// const myAccount = new BankAccount();

// // myAccount.#balance = 1555; // Error: main.js:4771 Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class

// myAccount.deposit(15000);

// console.log(myAccount.getBalance());

// // myAccount.withdraw(17000); // Warning, Insufficient funds!

// myAccount.withdraw(14000) // Withdrawing $14000 succeed, Your new balance is $1000

// console.log(myAccount.getBalance()); //Your account has: $1000

//* Assignment 3: Read-Only Power Grid (Real World Scenario)

// class PowerPlant {
//   constructor(output) {
//     this._maxOutput = output;
//   }

//   get maxOutput() {
//     return this._maxOutput;
//   }

// }

// const plant = new PowerPlant(100);

// console.log(plant.maxOutput);

// plant.maxOutput = 200; // Error: Uncaught TypeError: Cannot set property maxOutput of #<PowerPlant> which has only a getter



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

//1 i will use let, because maybe the name will be changed later
//2 Absolutely let, because the temperature will be updated every hour
//3 const, because the API URL will never change
//4 const, const is always recommended to declare objects and arrays

// The names:

//1 Not valid, the dash (-) is not allowed
//2 Not valid, the numbers in the beginning of the variable name are not allowed
//3 Valid, the underscore (_) is an allowed character
//4 Valid, the Dollar Sign ($) is an allowed character

//1 5
//2 "5null"
//3 10
//4 NaN
//5 False
//6 "No users"
//7
//8
//9

// console.log(5 + null);

//1
//2
//3
//4
//5
//6
//7
//8
//9

//1
//2
//3
//4
//5
//6
//7
//8
//9

//1
//2
//3
//4
//5
//6
//7
//8
//9

// function describeValue(value) {

//   if (Number.isNaN(value)) {
//     return "This is Not-a-Number";
//   }

//   if (value === null) {
//     return "This is a null value"
//   }

//   if (Array.isArray(value)) {
//     return "This is an array";
//   }

//   let valueType = typeof value;

//   switch (valueType) {
//     case "string":
//       return "This is a string";
//     case "number":
//       return "This is a number";
//     case "boolean":
//       return "This is a boolean";
//     case "bigint":
//       return "This is a bigint";
//     case "function":
//       return "This is a function";
//     case "symbol":
//       return "This is a symbol";
//     case "object":
//       return "This is an object";
//     case "undefined":
//       return "This is undefined";
//   }
// }

// const user = {};

// user.name = "John";

// user.surname = "Smith";

// user.name = "Pete";

// delete user.name;

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// console.log( user.ref.name ); // What's the result?

// const ladder = {
//   step: 0,

//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//     return this;
//   }
// }

// ladder.up().up().down().showStep().down().showStep();

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("Enter a number", 0);
//     this.b = +prompt("Enter a number", 0);
//   };

//   this.sum = function () {
//     return a + b;
//   }

//   this.mul = function () {
//     return a * b;
//   }
// };

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function () {
//     this.value += +prompt("Enter a number", 0);
//   }
// }

// let acc = new Accumulator(2);

// acc.read();
// acc.read();
// acc.read();

// console.log(acc.value);

// 1

// function readNumber() {
//   let num = prompt("Enter a number");

//   if (num === null || num === "") {
//     return null;
//   }

//   while (!isFinite(num)) {
//     num = prompt("Enter a number");
//   }

//   return +num;
// }

// console.log(readNumber());

// function ucFirst(str="") {
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("abc"));

// function checkSpam(str = "") {
//   return (
//     str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
//   );
// }

// function truncate(str = "", maxLength) {
//   return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20));
// console.log(truncate("Hi everyone!", 20));

// function extractCurrencyValue(str = "") {
//   return +str.slice(1);
// }

// console.log(extractCurrencyValue("$421"));

// const styles = ["Jazz", "Blues", "Hello"];

// styles.push("Rock-n-Roll");

// styles[Math.floor(styles.length / 2)] = "Classics";

// console.log(styles);

// console.log(styles.shift());

// styles.unshift("Rap", "Reggae");

// function sumInput() {
//   let num;

//   const numbers = [];

//   while (true) {
//     let value = prompt("Enter a number", 0);

//     if (!isFinite(value) || value === null || value === "") {
//       break;
//     }

//     numbers.push(+value);
//   }

//   return numbers.reduce((acc, ele) => acc + ele, 0);
// }

// console.log(sumInput());

// function camelize(str = "") {
//   return str
//     .split("-")
//     .map((ele, i) => {
//       return i !== 0 ? ele[0].toUpperCase() + ele.slice(1) : ele;
//     })
//     .join("");
// }

// console.log(camelize("background-color"));
// console.log(camelize("-background-color"));

// function filterRange(arr = [], a = 0, b = 0) {
//   const MIN = Math.min(+a, +b);
//   const MAX = Math.max(+a, +b);

//   return arr.filter((e) => e >= MIN && e <= MAX);
// }

// console.log(filterRange([5, 3, 8, 4, 2, 1], 1, 4));

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);

// function copySorted(arr = []) {
//   return [...arr].sort((a, b) => a.localeCompare(b));
// }

// let arr2 = ["HTML", "JavaScript", "CSS"];

// console.log(copySorted(arr2));

// console.log(arr2);

// function Calculator() {
//   this.calculate = (str = "") => {
//     return str.split(" ").filter(n => +n).reduce((acc, e) => acc + e);

//   }
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// const names = users.map(e => e.name);

// console.log(names);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// const usersMapped = users.map((e) => ({
//   fllName: e.name + " " + e.surname,
//   id: e.id,
// }));

// console.log(usersMapped);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [pete, john, mary];

// function sortByAge(users) {

//   users.sort((a, b) => a.age - b.age);

// }

// sortByAge(users);

// console.log(users);

// function unique(arr = []) {
//   // return Array.from(new Set(arr));

//   let uniques = [];

//   for (let item of arr) {
//     if (uniques.indexOf(item) === -1) {
//       uniques.push(item);
//     }
//   }

//   return uniques;
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

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// function groupById(users = []) {
//   return users.map((u) => ({
//     [u.id]: {
//       id: u.id,
//       name: u.name,
//       age: u.age,
//     },
//   }));
// }

// let usersById = groupById(users);

// console.log(usersById);

// function aclean(arr = [""]) {

//   const resultMap = new Map();

//   for (let item of arr) {
//     resultMap.set(item.toLowerCase().split("").sort((a, b) => a.localeCompare(b)).join(""), item);
//   }

//   return Array.from(resultMap.values());

// }

// let aaa = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(aaa));

// let m1 = { text: "Hello", from: "John" };

// let m2 = { text: "How goes?", from: "John" };

// let m3 = { text: "See you soon", from: "Alice" };

// let messages = [m1, m2, m3];

// const messagesSet = new WeakSet();

// for (let message of messages) {
//   messagesSet.add(message);
// }

// m1 = null;

// console.log(messagesSet);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function count(obj) {
//   return Object.keys(obj).length;
// }

// let user = {
//   name: "John",
//   age: 30,
// };

// console.log(count(user));

// const userProfile = {
//   name: "Jane Doe",
//   email: "jane.doe@example.com",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// function getUserInfo({ name, address: { city } = {}, status = "active" } = {}) {
//   return `User ${name} from ${city} is currently ${status}`;
// }

// console.log(getUserInfo(userProfile));

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
//   return articles.map(
//     ({
//       title,
//       author: { name: author } = {},
//       stats: { views } = {},
//       tags: [mainTag = "general"] = [],
//     } = {}) => ({ title, author, views, mainTag })
//   );
// };

// console.log(formatArticleData(apiResponse));

// let userBirthDate = {
//   year: 2002,
//   month: 4,
//   day: 30,
//   hour: 8,
//   minute: 17,
//   [Symbol.iterator]: function () {
//     // 2. We define the properties we want to iterate over and in what order.
//     const keys = ['year', 'month', 'day', 'hour', 'minute'];
//     let index = 0;
//     // We capture 'this' to refer to the userBirthDate object inside the next() method.
//     const self = this;

//     // 3. This method must return an iterator object.
//     return {
//       // 4. The iterator object must have a next() method.
//       next: function () {
//         // 5. Check if we are still within the bounds of our keys array.
//         if (index < keys.length) {
//           // If not done, return the current value and set done: false.
//           const key = keys[index]; // Get the current key, e.g., 'year'
//           index++;               // Move to the next index for the next call
//           return { value: self[key], done: false };
//         } else {
//           // If we've gone through all keys, signal that we are done.
//           return { done: true };
//         }
//       }
//     }

//   }
// }

// let myBirthDay = new Date(...userBirthDate);

// console.log(myBirthDay);
