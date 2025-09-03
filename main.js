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
//TODO 4-3 Garbage collection
//TODO 4-4 Object methods. "this"
//TODO 4-5 Constructor, operator "New"
//TODO 4-6 Optional chaining "?"
//TODO 4-7 Symbol type
//TODO 4-8 Object to primitive conversions

//? Data types
//TODO 5-1 Methods of primitives
//TODO 5-2 Numbers
//TODO 5-3 Strings
//TODO 5-4 Arrays
//TODO 5-5 Array methods
//TODO 5-6 Iterables
//TODO 5-7 Map and Set
//TODO 5-8 WeakMap ad WeakSet
//TODO 5-9 Object.keys, values, entries
//TODO 5-10 Destructuring assignments
//TODO 5-11 Data and time
//TODO 5-12 JSON methods, toJSON

//? Advanced working with functions
//TODO 6-1 Recursion and stack
//TODO 6-2 Rest parameters and spread syntax
//TODO 6-3 Variable scope, closure
//TODO 6-4 The old "var"
//TODO 6-5 Global object
//TODO 6-6 Function object, NFE
//TODO 6-7 The "new Function" syntax
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
