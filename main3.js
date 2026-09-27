"use strict";

//? Error handling
//TODO 10-1 Error handling, "try...catch"

//TODO 10-2 Custom errors, extending Error

//? Promises, async / await
//TODO 11-1 Intuction: callbacks
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

// let users =[
//   { name: "John", age: 15 },
//   { name: "Sarah", age: 22 },
//   { name: "Mike", age: 17 },
//   { name: "Chloe", age: 28 }
// ];

// let adults = users.filter(user => user.age >= 18).map(user => user.name);

// console.log(adults);

// let createProduct = (name, price) => {
//   let tax = price * 0.2;
//   return {
//     name,
//     basePrice: price,
//     tax,
//     totalPrice: price + tax,
//   };
// };

// let p1 = createProduct("Laptop", 1000);

// console.log(p1);

// let salaries = {
//   // John: 100000,
//   // Ann: 160000,
//   // Pete: 130000
// };

// function salarySum(salaries) {

//   let salarySum = 0;

//   for (let salary in salaries) {
//     salarySum += salaries[salary];
//   }

//   return salarySum;
// }

// console.log(salarySum(salaries));

// function multiplyNumeric(obj) {
//   for (let propKey in obj) {
//     if (typeof obj[propKey] !== "number") {
//       continue;
//     }

//     obj[propKey] *= 2;
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// console.log(menu);

// const player1 = {
//   username: "Ali",
//   score: 2,
// };

// const player2 = {
//   ...player1,
// };

// const player3 = Object.assign({}, player1);

// player2.username = "ShadowNinja";
// player2.score += 100;

// player3.username = "The GOAT";
// player3.score += 200;

// console.log(player1);
// console.log(player2);
// console.log(player3);

// const company = {
//   name: "TechCorp",
//   details: {
//     employees: 50, location: "New York",
//   },
// };

// const branchOffice = {
//   ...company,
// };

// branchOffice.name = "TechCorp Europe";
// branchOffice.details.location = "London";

// console.log(company);
// console.log(branchOffice);

// const appState = {
//   theme: "dark",
//   activeUsers: ["Alice", "Bob"],
//   lastUpdate: new Date(),
//   metadata: new Set([1, 2]),
// };

// const nextState = structuredClone(appState);

// nextState.activeUsers.push("Charlie");
// nextState.metadata.add(3);

// console.log(appState.activeUsers);
// console.log(appState.metadata);
// console.log("*".repeat(50));
// console.log(nextState.activeUsers);
// console.log(nextState.metadata);

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//     return this;
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   multiply() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator.read(5, 10).multiply()); // 50

// const shoppingCart = {
//   total: 0,

//   addItem(price) {
//     this.total += price;
//     return this;
//   },

//   applyDiscount(percent) {
//     if (percent <= 100 && percent > 0) {
//       this.total = this.total - this.total * (percent / 100);
//     }
//     return this;
//   },

//   checkout() {
//     console.log(`Total Price: ${this.total}$`);
//   },
// };

// shoppingCart
//   .addItem(50)
//   .addItem(100)
//   .applyDiscount(10) // 10% off of 150 is a $15 discount
//   .checkout(); // Output: "Final Total: $135"

// const order = {
//   id: 101,
//   customer: {
//     details: null,
//   },
// };

// const zipCode = order.customer?.details?.address?.zip ?? "No Zip Code";

// console.log(zipCode);

// const apiResponse = [
//   { name: "Alice", hobbies: ["Reading", "Cycling"], greet: () => console.log("Hi from Alice!") },
//   { name: "Bob", hobbies: null }, // Missing hobbies
//   { name: "Charlie" }, // Missing hobbies AND missing greet method
//   { name: "Diana", hobbies:["Gaming"] } // Has hobbies, but no second hobby
// ];

// apiResponse.forEach((user) => {
//   user.greet?.();
//   console.log(user.hobbies?.[1]);
// });

// function processState(payload) {
//   payload?.action?.("INIT");
//   delete payload?.metadata?.tempKey;

//   if (payload?.metadata) {
//     payload.metadata.lastUpdated = Date.now();
//   }

// }

// let validPayload = {
//   action: (msg) => console.log("Action fired:", msg),
//   metadata: { tempKey: "123", lastUpdated: null }
// };

// let emptyPayload = null;

// processState(validPayload);
// processState(emptyPayload);

// let user = {
//   name: "Alex",
//   walletBalance: 1500,

//   // Implementing the modern conversion method
//   [Symbol.toPrimitive](hint) {
//     console.log(`System requested conversion with hint: ${hint}`);

//     if (hint === "string") {
//       return `User: ${this.name}`; // Return a string representation
//     } else {
//       // Handles both "number" and "default" hints
//       return this.walletBalance; // Return the numeric value
//     }
//   },
// };

// // --- Let's test it out! ---

// // 1. String context
// // alert(user); // Console: "System requested conversion with hint: string" -> Alerts: "User: Alex"

// // 2. Number context
// let newBalance = user - 500; // Console: "...hint: number" -> newBalance is 1000

// // 3. Default context
// let total = user + "100"; // Console: "...hint: default" -> total is 1600

// console.log(total);

// console.log(Object.getPrototypeOf(user));

// const laptop = {
//   brand: "ASUS",
//   price: 1200,

//   toString() {
//     return this.brand;
//   },

//   valueOf() {
//     return this.price;
//   }
// };

// console.log(String(laptop));
// console.log(laptop * 2);

// const wallet = {
//   balance: 1500,
//   owner: "Zoalfekar",

//   [Symbol.toPrimitive](hint) {
//     switch (hint) {
//       case "string":
//         return `Wallet of ${this.owner}`;
//       default:
//         return this.balance;
//     }
//   },
// };

// console.log(`User data: ${wallet}`); //User data: Wallet of Zoalfekar

// console.log(wallet - 50) ; //1450
// console.log(wallet + 100); //1600

// const Duration = {
//   minutes: 220,

//   [Symbol.toPrimitive](hint) {
//     switch (hint) {
//       case "string": {
//         let module = this.minutes % 60;
//         return `${Math.floor(this.minutes / 60)}h${module > 0 ? " " + module + "m" : ""}`;
//       }
//       case "number":
//         return this.minutes;
//       default:
//         return `${this.minutes}`;
//     }
//   },
// };

// console.log(`${Duration}`); //3h 40m

// Duration.minutes = 120;

// console.log(`${Duration}`); // 2h

// let secretCode = "Alpha";
// try {
//   secretCode.key = 123;
//   console.log(secretCode.key);
// } catch (error) {
//   console.error(
//     `${error.name}: Because There we can't add a property to a primitive, why ? because primitive are just simple raw data, and if the wrappers objects had to be used they are being used and then they are destroyed after finishing the method execution`,
//   );
// }

// function runMethodOnPrimitive(primitiveValue, methodName) {
//   if (typeof primitiveValue === "object") {
//     throw new Error("Wrong value, the value must be primitive not object");
//   }

//   let  wrapperObject = new Object(primitiveValue);

//   console.log(wrapperObject);

//   let result = wrapperObject[methodName]();

//   wrapperObject = null;

//   return result;

// }

// console.log(runMethodOnPrimitive("hello", "toUpperCase"));

// function calculateTotal(prices = []) {
//   return `$${prices.reduce((acc, ele) => acc + Number(parseFloat(ele) || parseFloat(ele.slice(1))), 0).toFixed(2)}`;
// }

// const cart = ["$12.50", "4.99px", " 0.1 ", "0.2"];
// console.log(calculateTotal(cart));
// // Expected Output: "$17.79"

// function generateRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777216).toString(16)}`;
// }

// console.log(generateRandomHexColor());

// function safeDivide(a, b) {
//   if (!(isFinite(a) && isFinite(b))) {
//     throw new Error("Error: Invalid Number Provided.");
//   }

//   if (Object.is(b, 0) || Object.is(b, -0)) {
//     throw new Error("Error: Cannot divide by zero.");
//   }

//   return a / b;
// }

// console.log(safeDivide(10, 2));      // 5
// console.log(safeDivide(10, 0));      // Error: Cannot divide by zero.
// console.log(safeDivide(10, -0));     // Error: Cannot divide by zero.
// console.log(safeDivide("10px", 2));  // Error: Invalid number provided.
// console.log(safeDivide(10, NaN));    // Error: Invalid number provided.

// function welcomeMessage({ firstName, lastName = "", age = "UnKnown!" }) {
//   let formattedFirstName =
//     firstName.trim()[0].toUpperCase() + firstName.trim().toLowerCase().slice(1);
//   console.log(formattedFirstName);
//   let formattedLastName = lastName.trim().toLowerCase();

//   let fullName = formattedFirstName + " " + formattedLastName;

//   console.log(`Number of the full name characters: [${fullName.length}]`);
//   return `Welcome ${fullName}! You are ${age} years old.`;
// }

// console.log(
//   welcomeMessage({ firstName: "ZOafekar   ", lastName: "   NASSER", age: 23 }),
// );

// =================================================================

// let chatMessage = "OMG! Claim your FrEe MoNeY right now!!!";

// function checkMessage(chatMessage) {
//   if (
//     chatMessage.toLowerCase().includes("free money") ||
//     chatMessage.toLowerCase().includes("viagra")
//   ) {
//     console.log(`Spam Detected: [${chatMessage.slice(0, 15)}...]`);
//     return;
//   }

//   console.log("Message Approved.");
//   return;
// }

// checkMessage(chatMessage);

//====================================================

// const cities = ["amsterdam", "zÜRICH", "Tehran", "Damascus"];

// function toTitleCase(str = "") {
//   return str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();
// }

// const formattedCities = cities
//   .map(toTitleCase)
//   .sort((a, b) => a.localeCompare(b));

// for (let i = 0; i < formattedCities.length; i++) {
//   console.log(`City ${i + 1}: ${formattedCities[i]}`);
// }

//====================================================

// const cart = [];

// cart.push("Milk", "Bread");

// cart.unshift("Eggs");

// let removedItem = cart.pop();

// console.log(removedItem);

// console.log(cart.at(-1));

// console.log(cart);

//====================================================

// let board = [
//   ["X", "O", "X"],
//   ["O", "X", "O"],
//   ["X", "X", "O"],
// ];

// let xNumber = 0;

// for (let row of board) {
//   for (let cell of row) {
//     if (cell.toLowerCase() === "x") {
//       xNumber++;
//     }
//   }
// }

// board.length = 0;

// console.log(`Xs number: ${xNumber}`);

// console.log(board);

//====================================================

// function areArraysEqual(array1 = [], array2 = []) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
// console.log(areArraysEqual([1, 2, 3], [1, 2, 9])); // false
// console.log(areArraysEqual([1, 2], [1, 2, 3])); // false (different lengths)
// console.log(areArraysEqual([], [])); // true

//! Arrays Higher Order Functions Implementation

// //? Find

// function findClone(array, callback, startIndex = 0) {
//   if (!Array.isArray(array)) {
//     throw new TypeError("Failed: The first argument must be an Array.");
//   }

//   if (typeof callback !== "function") {
//     throw new TypeError(
//       "Failed: The second argument must be a callback function. ",
//     );
//   }

//   if (!Number.isFinite(startIndex)) {
//     throw new TypeError("Failed: The third argument must be a positive number");
//   }

//   if (startIndex < 0) {
//     startIndex = Math.max(0, array.length + startIndex);
//   }

//   for (let i = startIndex; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       return array[i];
//     }
//   }
// }

// function findIndexClone(array, callback, startIndex = 0) {
//   if (!Array.isArray(array)) {
//     throw new TypeError("Failed: The first argument must be an Array.");
//   }

//   if (typeof callback !== "function") {
//     throw new TypeError(
//       "Failed: The second argument must be a callback function. ",
//     );
//   }

//   if (!Number.isFinite(startIndex) || startIndex < 0) {
//     throw new TypeError("Failed: The third argument must be a positive number");
//   }

//   for (let i = startIndex; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       return i;
//     }
//   }

//   return -1;
// }

// //? Map
// function mapClone(array, callback, startIndex = 0) {
//   if (!Array.isArray(array)) {
//     throw new TypeError("Failed: The first argument must be an Array.");
//   }

//   if (typeof callback !== "function") {
//     throw new TypeError(
//       "Failed: The second argument must be a callback function. ",
//     );
//   }

//   if (!Number.isFinite(startIndex)) {
//     throw new TypeError("Failed: The third argument must be a number");
//   }

//   if (startIndex < 0) {
//     startIndex = Math.max(0, array.length + startIndex);
//   }

//   const resultsArray = [];

//   for (let i = startIndex; i < array.length; i++) {
//     if (i in array) resultsArray.push(callback(array[i], i, array));
//     else resultsArray.length++;
//   }

//   return resultsArray;
// }

// //? Filter

// function filterClone(array, callback, startIndex = 0) {
//   if (!Array.isArray(array)) {
//     throw new TypeError("Failed: The first argument must be an Array.");
//   }

//   if (typeof callback !== "function") {
//     throw new TypeError(
//       "Failed: The second argument must be a callback function. ",
//     );
//   }

//   if (!Number.isFinite(startIndex)) {
//     throw new TypeError("Failed: The third argument must be a number");
//   }

//   if (startIndex < 0) {
//     startIndex = Math.max(0, array.length + startIndex);
//   }

//   const filteredArray = [];

//   for (let i = startIndex; i < array.length; i++) {
//     if (i in array && callback(array[i], i, array)) {
//       filteredArray.push(array[i]);
//     }
//   }

//   return filteredArray;
// }

//? Reduce
// function reduceClone(array, callback, initialValue = array[0]) {
//   if (!Array.isArray(array)) {
//     throw new TypeError("Failed: The first argument must be an Array.");
//   }

//   if (typeof callback !== "function") {
//     throw new TypeError(
//       "Failed: The second argument must be a callback function. ",
//     );
//   }

//   let startIndex = 1;
//   let accumulator = initialValue;

//   if (arguments.length === 3) {
//     startIndex = 0;
//   }

//   for (let i = startIndex; i < array.length; i++) {
//     if (i in array) {
//       accumulator = callback(accumulator, array[i], i, array);
//     }
//   }

//   return accumulator;
// }

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// // let user = findClone((item, i, arr) => item.id == 2, users, 2);

// // let userIndex = findIndexClone(users, (user) => user.name === "Mary");
// // console.log(userIndex); // "Pete"

// let prefixedUsernames = mapClone(
//   users,
//   (user) => `User Name is: --${user.name}`,
// );

// for (let username of prefixedUsernames) {
//   console.log(username);
// }

// // console.log(undefined === undefined);

// const nums = [10, 20, 30, 40, 50];

// console.log(findClone(nums, (x) => x > 20, -2));

// console.log(filterClone(nums, (num) => num > 10));
// console.log(reduceClone(nums, (acc, current) => acc + current, 50));

//? Beginner Task: The Inventory Manager

// let inventory = ["Apples", "Bananas", "Carrots", "Dates", "Eggs"];

// inventory.pop();

// // OR:
// // inventory.length--;

// inventory.unshift("Avocados", "Artichokes");

// inventory.splice(4, 1, "Cucumbers");

// console.log(inventory);

//?  Intermediate Task: The Data Pipeline

// const users = [
//   { id: 1, name: "Zack", age: 25, isActive: true },
//   { id: 2, name: "Alice", age: 17, isActive: true },
//   { id: 3, name: "Bob", age: 30, isActive: false },
//   { id: 4, name: "Charlie", age: 22, isActive: true },
// ];

// let usernames = users
//   .filter((user) => user.isActive && user.age >= 18)
//   .map((user) => user.name)
//   .toSorted((username1, username2) => username1.localeCompare(username2));

// console.log(usernames);

//?  Advanced Task: The Cart Analyzer

// const cart = [
//   { item: "Laptop", category: "Electronics", price: 1000, qty: 1 },
//   { item: "T-Shirt", category: "Clothing", price: 20, qty: 2 },
//   { item: "Headphones", category: "Electronics", price: 150, qty: 1 },
//   { item: "Jeans", category: "Clothing", price: 50, qty: 1 },
//   { item: "Apple", category: "Groceries", price: 2, qty: 5 },
// ];

// let amountPerCategory = cart.reduce((acc, current) => {
//   acc[current.category] =
//     (acc[current.category] || 0) + current.price * current.qty;

//   return acc;
// }, {});

// console.log(amountPerCategory);

// Because i never used reduce in returning non-primitive values before, it so nice, but please give advices if there are any

// 1. We define a plain object representing a range of numbers
// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     return {
//       current: this.from,
//       last: this.to,
//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         }
//         return { done: true,};
//       },
//     };
//   },
// };

// // 2. We attempt to loop through the range using for..of
// for (let num of range) {
//   console.log(num);
// }
// // ⚠️ TypeError: range is not iterable



// const launchSequence = {
//   start: 5,
//   end: 0,

//   [Symbol.iterator]() {
//     return {
//       current: this.start,
//       to: this.end,
//       next() {
//         if (this.current >= this.to) {
//           return { done: false, value: this.current-- };
//         }
//         return { done: true };
//       },
//     };
//   }
// };

// for (let count of launchSequence) {
//   console.log(count);
// }


// let cartData = {
//   0: { id: 101, name: "apple" },
//   1: { id: 102, name: "bread" },
//   2: { id: 103, name: "milk" },
//   length: 3
// };

// // ... your code here ...
// let uppercaseNames = Array.from(cartData).map((product) => product.name.toUpperCase());

// console.log(uppercaseNames); 
// // Console output: ["APPLE", "BREAD", "MILK"]

