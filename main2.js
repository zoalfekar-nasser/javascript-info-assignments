"use strict";

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
//   constructor(name = "ali", health = 0) {
//     this.name = name[0].toUpperCase() + name.slice(1);
//     this.health = health;
//   }

//   attack() {
//     console.log(`{${this.name}} attacks with fists`);
//   }
// }

// class Mage extends Character {
//   mana = 100;

//   attack() {
//     if (this.mana < 10) {
//       super.attack();
//     } else {
//       this.mana -= 10;
//       console.log(`{${this.name}} casts a fireball`);
//     }
//   }
// }

// const mageFighter = new Mage("SuperMan", 100);

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
//     console.log(`GOD : 1`);
//   }
// }

// class Adam extends God {
//   log() {
//     console.log(`2 - Start`);
//     super.log();
//     console.log(`2 - End`);
//   }
// }

// class Human extends Adam {
//   log() {
//     super.log();

//     console.log(`3 - Human`);
//   }
// }

// const h1 = new Human();
// h1.log();

// 2 - Start
// GOD : 1
// 2 - End
// 3 - Human

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

// class ParentA {
//   say() {
//     return "I am A";
//   }
// }

// class ParentB {
//   say() {
//     return "I am B";
//   }
// }

// class Child extends ParentA {
//   say() {
//     return super.say() + " (Child)";
//   }
// }

// let c = new Child();

// console.log(c.say()); // I am A (Child)

// Object.setPrototypeOf(Child.prototype, ParentB.prototype);

// console.log(c.say()); // I am B (Child)

/*

Explanation:

Nice question but in the same time is so easy,
let's first agree that, the [[HomeObject]] is always the same,
here: " return super.say() + " (Child)" ", [[HomeObject]] is 
Child.prototype, super is Child.prototype.prototype
so [[HomeObject]] will be always Child.prototype for say() method inside Child,
BUT, whe we do this:
Object.setPrototypeOf(Child.prototype, ParentB.prototype);

we changed the prototype of Child.prototype, in other words, we changed

[[HomeObject]].prototype, and we made it ParentB.prototype,
so: we had this result: I am B (Child)






*/

//* Assignment 3: The "Scope Traitor" (Arrow Functions + Super)

// class God {
//   msg() {
//     return "DIVINE";
//   }
// }

// class Prophet extends God {
//   prophesy() {
//     return () => super.msg() + " spoken by " + this.name;
//   }
// }

// let pagan = { name: "The Pagan", };

// let p = new Prophet();

// let stolenProphecy = p.prophesy();

// console.log(stolenProphecy.call(pagan));

/*
Output: DIVINE spoken by undefined

Explanation:

1- Yes, it does find God, Why?
in stolenProphecy we have p.prophesy, which is a method from
Prophet Class, its [[HomeObject]] is Prophet.prototype,
so super here is: Prophet.prototype.prototype which is God

2- Now why is this.name equals undefined in this context?

there is no implicit this in arrow functions,
arrow functions get its this from the lexical environment it created in, so in our example
so here lexical environment is not (pagan) object,

Note: i don't have enouph info about call, apply and bind and what are their effect in this context,
i know when we call a function and use call method with it, we can specify the (this) for the function
so now "this" for stolenProphecy is pagan, but this has no effect because here we have Arrow Function
and its this is from Lexical Environment,
maybe i have some misunderstanding here, but as i told you, i need more knowledge in this.




*/

//*
//TODO 9-3 Static properties and methods

//* Class extends Object?

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

// class ServerConfig {
//   static BASE_URL = "https://api.example.com";
//   static getUrl(endPoint) {
//     return `${this.BASE_URL}${endPoint}`;
//   }

// }
// console.log(ServerConfig.getUrl("/user"));

//* Assignment 2: Instance Counter (Intermediate)
// class User {
//   static userCount = 0;
//   static userId = 1;
//   constructor(name) {
//     this.name = name;

//     // this.id = User.userId;
//     //? The Best Practice:
//     this.id = this.constructor.userId;

//     // User.userId++;
//     // User.userCount++;
//     //? The Best Practice:
//     this.constructor.userId++;
//     this.constructor.userCount++;
//   }

//   static getDetails() {
//     console.log(`Total users created: ${this.userCount}`);
//   }
// }

// const u1 = new User("Alice");
// const u2 = new User("Bob");
// const u3 = new User("Charlie");

// User.getDetails(); // Expected: "Total users created: 3"

//* Assignment 3: Sorting with Inheritance (Advanced)

// class Shape {
//   constructor(area) {
//     this.area = area;
//   }

//   static compare(shapeA, shapeB) {
//     return shapeA.area - shapeB.area;
//   }
// }

// class Square extends Shape {

//   constructor(side) {
//     super(side * side);
//   }

// }

// const squares = [new Square(10), new Square(5), new Square(8)];

// console.log(squares.sort(Square.compare));

//* Assignment 1: The Active Record ORM (Architectural Challenge)

// class BaseModel {
//   static #storage = new Map();

//   static #getStorageContext(modelClass) {
//     if (!BaseModel.#storage.has(modelClass)) {
//       BaseModel.#storage.set(modelClass, []);
//     }
//     return BaseModel.#storage.get(modelClass);
//   }

//   static save(obj = {}) {
//     const db = BaseModel.#getStorageContext(this);

//     db.push(obj);
//   }

//   static findAll() {
//     const db = BaseModel.#getStorageContext(this);

//     return db;
//   }

//   static find(id) {
//     const db = BaseModel.#getStorageContext(this);

//     return db.find((e) => e.id === id);
//   }
// }

// class User extends BaseModel {

// }

// class Product extends BaseModel {

// }

// User.save({ id: 1, name: "Zoalfekar" });

// console.log(User.find(1));

// console.log(User.findAll());

//* Assignment 2: The Polymorphic Factory Chain (Advanced Inheritance)

// class AppConfig {
//   constructor(settings) {
//     this.settings = settings;
//   }

//   static defaults = {
//     theme: "light",
//     version: 1,
//   };

//   static load(customSettings = {}) {

//     return new this({ ...this.defaults, ...customSettings });
//   }
// }

// class AdvancedConfig extends AppConfig {
//   static defaults = {
//     ...super.defaults,
//     cache: true,
//   };
// }
// const u1 = AppConfig.load({ theme: "DARK" });
// console.log(u1.settings); // {theme: 'DARK', version: 1}

// console.log(AppConfig.defaults); // {theme: 'light', version: 1}

// const u2 = AdvancedConfig.load({theme: "Dark", version: 2});
// console.log(u2.settings); // {theme: 'Dark', version: 2, cache: true}

// console.log(AdvancedConfig.defaults); // {theme: 'light', version: 1, cache: true}

// console.log(AppConfig.defaults); // {theme: 'light', version: 1}
// console.log(AdvancedConfig.defaults); //{theme: 'light', version: 1, cache: true}

//* Assignment 3: The "Static Mixin" Operator (Library Level)

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

//*

//*  Assignment 2: Coding a Secure Vault

// class Vault {
//   #privateCode;

//   constructor(secretCode) {
//     this.#privateCode = secretCode;
//   }

//   checkCode(guess) {
//     return this.#privateCode === guess;
//   }
// }

// const myVault = new Vault("1234");
// console.log(myVault.checkCode("1111")); // -> false
// console.log(myVault.checkCode("1234")); // -> true
// console.log(myVault.#secretCode);    // -> This should fail with a SyntaxError

//* Assignment 3: Real-World Refactoring

// class User {
//   constructor(name, birthDate) {
//     this.name = name; // Publicly accessible name, this is okay.
//     this.birthDate = new Date(birthDate); // Should not be changed!
//     this.loginCount = 0; // Internal counter, should not be set manually.
//     this.lastLogin = null; // Internal property.
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthDate.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   login() {
//     this.loginCount++;
//     this.lastLogin = new Date();
//     console.log("User logged in.");
//   }
// }

// class User {
//   #birthDate;
//   #loginCount = 0;
//   #lastLogin = null;

//   constructor(name, birthDate = new Date()) {
//     this.name = name;
//     this.#birthDate = new Date(birthDate.getTime());
//   }

//   get age() {
//     return Math.floor(
//       (Date.now() - this.#birthDate.getTime()) / 1000 / 3600 / 24 / 365
//     );
//   }

//   //? AI Approach for calculating age
//   //   get age() {
//   //   const diff_ms = Date.now() - this.#birthDate.getTime();
//   //   const age_dt = new Date(diff_ms);
//   //   return Math.abs(age_dt.getUTCFullYear() - 1970);
//   // }

//   login() {
//     this.#loginCount++;
//     this.#lastLogin = new Date();

//     console.log("User Logged In");
//   }

//   get loginCount() {
//     return this.#loginCount;
//   }

//   get lastLoginDate() {
//     return this.#lastLogin;
//   }
// }

// const originalBirthDate = new Date(2002, 3, 30);
// const user = new User("Zoalfekar", originalBirthDate);

// console.log(`Initial Age: ${user.age}`);
// user.login();
// console.log(`Login count: ${user.loginCount}`);
// console.log(`Last login was at: ${user.lastLoginDate.toLocaleTimeString()}`);

// // Now, let's try to break it by mutating the original object
// console.log("--- Attempting to change birthday from outside ---");
// originalBirthDate.setFullYear(2020);
// console.log(`Age is still: ${user.age}`); // Success! The age didn't change.```

// console.log(u1.lastLoginDate);

//TODO 9-5 Extending built-in classes

//* Assignment 1: Theoretical Analysis

//* Assignment 2: Coding Practice (Extended Set)

// class FormattedSet extends Set {
//   printAll() {

//     for (let item of this) {
//       console.log(`Item: ${item}`);
//     }
//   }

//   join(separator) {
//     return Array.from(this).join(separator);
//   }

//   static get [Symbol.species]() {
//     return Set;
//   }
// }

// const s1 = new FormattedSet (["Hello", "World"]);

// s1.printAll();

// console.log(s1.join(" "));

//* Assignment 3: Real-World Scenario (Validation Array)

// class ErrorList extends Array {
//   static isCriticalError(err) {
//     return typeof err == "string" && err.startsWith("FATAL:");
//   }

//   hasCriticalError() {
//     return this.some(this.constructor.isCriticalError);
//   }
// }

// const errorList1 = new ErrorList();

// errorList1.push("Warning: name too short");
// errorList1.push("FATAL: server offline");
// errorList1.push("FATAL: DB is down");

// const criticalErrors = errorList1.filter(ErrorList.isCriticalError);

// console.log(errorList1.hasCriticalError()); // true

// console.log(criticalErrors); // ErrorList(2) ['FATAL: server offline', 'FATAL: DB is down']

// console.log(criticalErrors instanceof ErrorList); //true

//TODO 9-6 Class checking: "instanceof"

//* Strange instanceof

// function A() {}
// function B() {}

// let pro = {
//   name: "zz",
//   age: 23,
// };

// A.prototype = B.prototype;

// let a = new A();

// console.log(a instanceof B); // true

//? Yeah, looks strange indeed.

//? But instanceof does not care about the function, but rather about its prototype, that it matches against the prototype chain.

//? And here a.__proto__ == B.prototype, so instanceof returns true.

//? So, by the logic of instanceof, the prototype actually defines the type, not the constructor function.

//TODO 9-7 Mixins

//* Assignment 1: The Logger Mixin (Basic)

// const LogMixin = {
//   log(message) {
//     console.log(`[${this.constructor.name}], ${message}`);
//   },
// };

// class Car {}

// Object.assign(Car.prototype, LogMixin);

// const myCar = new Car();

// myCar.log("Engine Started");

//* Assignment 2: The State Manager (Intermediate)

// const StateMixin = {
//   setState(newState) {
//     Object.assign(this.state, newState);
//     console.log("State Updated to: ", this.state);
//   },
// };

// class Component {
//   state = {
//     visible: false,
//   };
// }

// Object.assign(Component.prototype, StateMixin);

// const myComponent = new Component();

// myComponent.setState({ visible: true });

// console.log(myComponent.state);

//* Assignment 3: The Complete Notification System (Advanced)

// let eventMixin = {
//   // 1. SUBSCRIBE to an event
//   on(eventName, handler) {
//     // Initialize _eventHandlers object if it doesn't exist
//     if (!this._eventHandlers) this._eventHandlers = {};

//     // Initialize array for this specific event if it doesn't exist
//     if (!this._eventHandlers[eventName]) {
//       this._eventHandlers[eventName] = [];
//     }

//     // Push the function into the array
//     this._eventHandlers[eventName].push(handler);
//   },

//   // 2. UNSUBSCRIBE from an event
//   off(eventName, handler) {
//     let handlers = this._eventHandlers?.[eventName];
//     if (!handlers) return;

//     // Find the handler in the array and remove it
//     for (let i = 0; i < handlers.length; i++) {
//       if (handlers[i] === handler) {
//         handlers.splice(i--, 1); // i-- fixes index after removal
//       }
//     }
//   },

//   // 3. PUBLISH (TRIGGER) the event
//   trigger(eventName, ...args) {
//     if (!this._eventHandlers?.[eventName]) {
//       return; // No one is listening
//     }

//     // Call every function in the list with correct context and arguments
//     this._eventHandlers[eventName].forEach((handler) =>
//       handler.apply(this, args)
//     );
//   },
// };

// class Button {
//   click() {
//     this.trigger("click", "Button Was Clicked");
//   }
// }

// function pageHandler(msg) {
//   console.log("Page received: ", msg);
// }

// const myButton = new Button();

// myButton.on("click", pageHandler);

// myButton.click();

// Object.assign(Button.prototype, eventMixin);

//TODO Ultimate OOP Assignments

//* Assignment 1: The Core Architecture (Classes, Privates, Statics)

// class Book {
//   #isbn = null;
//   #checkedOut = false;

//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   static compare(bookA, bookB) {
//     return bookA.title.localeCompare(bookB.title);
//   }

//   set isbn(str) {
//     if (this.#isbn !== null) {
//       console.error("ISBN, already set.");
//       throw new Error("ISBN, already set.");
//     }
//     this.#isbn = str;
//   }

//   checkout() {
//     if (this.#checkedOut) {
//       throw new Error("Already Checked out.");
//     }

//     this.#checkedOut = true;
//     if (this.log) {
//       this.log("Checked out.");
//     } else {
//       console.log("Checked out.");
//     }
//   }

//   returnBook() {
//     if (!this.#checkedOut) {
//       throw new Error("Already Returned.");
//     }

//     this.#checkedOut = false;
//   }

//   get checkoutValue() {
//     return this.#checkedOut;
//   }
// }

// class EBook extends Book {
//   constructor(title, author, fileSize) {
//     super(title, author);
//     this.fileSize = fileSize;
//   }

//   checkout() {
//     if (this.log) {
//       this.log("Downloading File ...");
//     } else {
//       console.log("Downloading File ...");
//     }
//   }
// }

// function printCatalog(items) {
//   for (let item of items) {
//     if (item instanceof EBook) {
//       console.log(`E-Book: [${item.title}]`);
//     } else if (item instanceof Book) {
//       console.log(`Book: [${item.title}]`);
//     }
//   }
// }

// const LogMixin = {
//   log(message) {
//     let messageDate = new Date();
//     console.log(
//       `[${messageDate.getHours()}-${messageDate.getMinutes()}-${messageDate.getSeconds()}] ${message}`
//     );
//   },
// };

// Object.assign(Book.prototype, LogMixin);

// class LibraryCollection extends Array {
//   findByName(string) {
//     return this.find((book) => book.title.includes(string));
//   }

//   getAvailable() {
//     return LibraryCollection.from(this.filter((book) => !book.checkoutValue));

//   }

//   static get [Symbol.species]() {
//     return Array;
//   }
// }

// const b1 = new Book("The Clash Royale Guide", "Zoalfekar Nasser");

// const b2 = new Book("Software Engineering 2", "Dr. Raed Jabri");

// const eb1 = new EBook("Red Dragons", "Ali Nasser", 25);

// const libCollection = new LibraryCollection(b1, b2, eb1);

// console.log(libCollection.findByName("Red"));

// b1.checkout();

// eb1.checkout();

// const filteredBooks = libCollection.filter((book) =>
//   book.title.includes("The")
// );

// console.log(filteredBooks);

// console.log(filteredBooks instanceof LibraryCollection); // False
// console.log(filteredBooks instanceof Array); // True

// const av = libCollection.getAvailable();

// console.log( av instanceof Array); // True
// console.log( av instanceof LibraryCollection); // True

//* Assignment 2: The Ultimate Assignment: "The Smart Grid"

// class SmartDevice {
//   #isConnected = false;
//   #firmwareVersion = 1.0;

//   constructor(name, serialNum) {
//     this.name = name;
//     this.serialNum = serialNum;
//   }

//   set connectionStatus(status) {
//     if (typeof status !== "boolean") {
//       throw new SyntaxError("Invalid Argument Type");
//     }
//     this.#isConnected = status;
//     console.log("Device Connected");
//   }

//   get connectionStatus() {
//     return this.#isConnected;
//   }

//   updateFirmWare() {
//     if (!this.#isConnected) {
//       throw Error("No Connection, Cannot Update");
//     }

//     this.#firmwareVersion++;
//     console.log("Updating ...");
//     console.log(`New FirmWare Version: ${this.#firmwareVersion}`);
//   }
// }

// class SmartLight extends SmartDevice {
//   static #checkBrightness(brightness) {
//     if (brightness < 0 || brightness > 100 || typeof brightness !== "number") {
//       throw Error("Invalid Brightness");
//     }
//   }

//   static #checkColor(color) {
//     if (typeof color !== "string" || !color.startsWith("#")) {
//       throw SyntaxError("Invalid Color");
//     }
//   }

//   constructor(name, serialNum, brightness, color) {
//     super(name, serialNum);

//     SmartLight.#checkBrightness(brightness);
//     SmartLight.#checkColor(color);

//     this.brightness = brightness;
//     this.color = color;
//   }

//   set brightness(brightness) {
//     SmartLight.#checkBrightness(brightness);
//     this.brightness = brightness;
//   }

//   set color(color) {
//     SmartLight.#checkColor(color);
//     this.color = color;
//   }

//   adjust(config) {
//     this.color = config.color ? config.color : this.color;
//     this.brightness = config.brightness ? config.brightness : this.brightness;
//   }
// }
// class SmartThermostat extends SmartDevice {
//   static #checkTargetTemp(targetTemp) {
//     if (targetTemp < 0 || targetTemp > 100 || typeof targetTemp !== "number") {
//       throw Error("Invalid Temperature");
//     }
//   }

//   static #checkMode(mode) {
//     if (mode !== "cool" || mode !== "heat") {
//       throw Error("No Such Mode.");
//     }
//   }

//   constructor(name, serialNum, targetTemp, mode) {
//     super(name, serialNum);

//     SmartThermostat.#checkMode(mode);
//     SmartThermostat.#checkTargetTemp(targetTemp);

//     this.targetTemp = targetTemp;
//     this.mode = mode;
//   }

//   set mode(mode) {
//     SmartThermostat.#checkMode(mode);
//     this.mode = mode;
//   }

//   set targetTemp(targetTemp) {
//     SmartThermostat.#checkTargetTemp(targetTemp);
//     this.targetTemp = targetTemp;
//   }

//   adjust(config) {
//     this.mode = config.mode ? config.mode : this.mode;
//   }
// }

// const BatteryPoweredMixin = {
//   batteryLevel: 100,
//   checkBattery() {
//     console.log(`Battery Level: ${this.batteryLevel}%`);
//   },

//   useDevice(action = "this Action") {
//     if (this.batteryLevel <= 0) {
//       throw Error(`Battery is Empty, cannot perform ${action} `);
//     }

//     this.batteryLevel -= 10;
//   },
// };

// Object.assign(SmartThermostat.prototype, BatteryPoweredMixin);

// class HomeHub extends Array {
//   addDevice(device) {
//     if (!(device instanceof SmartDevice)) {
//       throw Error("Not real device !");
//     }
//   }

//   masterSwitch(state) {
//     this.map((e) => {
//       e.connectionStatus(state);
//       return e;
//     });
//   }

//   energyAudit() {
//     for (let device of this) {
//       if (device.batteryLevel) {
//         console.log(
//           `Battery Device Found: [${device.name}] at [${device.batteryLevel}]%`
//         );
//       }

//       if (device instanceof SmartLight) {
//         console.log(`Hardwired Light Found: [${device.name}]`);
//       }
//     }
//   }
// }

// const myLight = new SmartLight("BlueLed", 1001, 100, "#0000ff");

// const myThermostat = new SmartThermostat("Heater", 100001, 75, "cool");

// const myHome = new HomeHub(myLight, myThermostat);

// myLight.updateFirmWare();

//? Error handling
//TODO 10-1 Error handling, "try...catch"

//* Finally or just the code?
// The difference becomes obvious when we look at the code inside a function.

// The behavior is different if there’s a “jump out” of try...catch.

// For instance, when there’s a return inside try...catch. The finally clause works in case of any exit from try...catch, even via the return statement: right after try...catch is done, but before the calling code gets the control.

// function f() {
//   try {
//     alert('start');
//     return "result";
//   } catch (err) {
//     /// ...
//   } finally {
//     alert('cleanup!');
//   }
// }

// f(); // cleanup!
// …Or when there’s a throw, like here:

// function f() {
//   try {
//     alert('start');
//     throw new Error("an error");
//   } catch (err) {
//     // ...
//     if("can't handle the error") {
//       throw err;
//     }

//   } finally {
//     alert('cleanup!')
//   }
// }

// f(); // cleanup!
// It’s finally that guarantees the cleanup here. If we just put the code at the end of f, it wouldn’t run in these situations.

//* Assignment 1

// function parseUserData(jsonString) {
//   try {
//     let userData = JSON.parse(jsonString);
//     if (!userData.id) {
//       throw new Error("No ID Found");
//     }

//     return userData;
//   } catch (error) {
//     return { error: true, message: error.message };
//   }
// }

// let jsonStr = JSON.stringify({ name: "Zoalfekar", age: 23 });

// let data = parseUserData(jsonStr);

// console.log(data);

//* Assignment 2

// class Account {
//   constructor(author, id, balance) {
//     this.author = author;
//     this.id = id;
//     this.balance = balance;
//   }

//   withdraw(amount) {
//     try {
//       if (this.balance - amount < 0) {
//         throw new Error("InsufficientFunds");
//       }

//       this.balance -= amount;
//       // baaba;
//       console.log(`Withdrawing is Done, your new balance is ${this.balance}$`);

//     } catch (error) {
//       if (error.message === "InsufficientFunds") {
//         console.error("Not Enough Money");
//       }

//       else {
//         throw error;
//       }
//     }
//   }

// }

// const acc = new Account("Ali", 123, 10000);

// acc.withdraw(500);

//* Assignment 3

// function processData(data) {
//   let isLoading = true;
//   try {
//     if (typeof data !== "string") {
//       throw new SyntaxError("Datatype error");
//     }

//     console.log("Processing ...");
//   } catch (error) {
//     console.log("Error Caught!");
//   } finally {
//     isLoading = false;
//     console.log(isLoading);
//   }
// }

//TODO 10-2 Custom errors, extending Error

//* Inherit from SyntaxError

// class FormatError extends SyntaxError {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// let err = new FormatError("formatting error");

// console.log( err.message ); // formatting error
// console.log( err.name ); // FormatError
// console.log( err.stack ); // stack

//* Assignment 1

// class MathError extends Error{
// constructor(message) {
//   super(message);
//   this.name = this.constructor.name;

// }

// }

// function divide(a, b) {
//   if (b == 0) {
//     throw new MathError("Cannot Divide by Zero");
//   }

//   return a / b;
// }

// try {
//   let result = divide(1, 0);
// } catch (error) {
//   if (error instanceof MathError) {
//     alert(error.message);
//   }
// }

//* Assignment 2

// class AppError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class NotFoundError extends AppError {}

// function findUser(id) {
//   if (id < 0) {
//     throw new AppError("Invalid ID");
//   } else if (id === 42) {
//     return { name: "Admin" };
//   } else {
//     throw new NotFoundError("User Not Found");
//   }
// }

// try {
//   findUser(-15);
// } catch (error) {
//   if (error instanceof NotFoundError) {
//     console.log("Not Found User");

//   } else if (error instanceof AppError) {
//     console.log("AppError");
//   } else {
//     throw error;
//   }
// }

// try {
//   findUser(9);
// } catch (error) {
//   if (error instanceof NotFoundError) {
//     console.log("Not Found User");

//   } else if (error instanceof AppError) {
//     console.log("AppError");
//   } else {
//     throw error;
//   }
// }

//* Assignment 3

// class DataError extends Error {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause;
//     this.name = this.constructor.name;
//   }
// }

// function parseData(jsonString) {
//   try {
//     let resultObj = JSON.parse(jsonString);
//     return resultObj;
//   } catch (error) {
//     throw new DataError("Invalid JSON Structure", error);
//   }
// }

// try {
//   let myObj = parseData("Akfjdk");
// } catch (error) {
//   console.log(`High Level Error: ${error.message}, High Level Error: ${error.cause.message}`);
// }

//? Promises, async / await
//TODO 11-1 Intuction: callbacks

//* Assignment 1: The "Simple Timer" (Beginner)

// function sayHello() {
//   console.log("Hello!");
// }
// setTimeout(sayHello, 3000);

//* Assignment 2: The Math Processor (Logic)

// function processNumber(num, operator) {
//   console.log(operator(num));
// }

// function double(num) {
//   return num * 2;
// }

// function square(num) {
//   return num * num;
// }

// processNumber(5, double);
// processNumber(5, square);

//* Assignment 3: Simulated Server Download (Real-world simulation)

// function downloadVideo(videoName, callback) {
//   if (videoName.includes("virus")) {
//     callback(new Error("Dangerous File!"));
//   } else {
//     callback(null, videoName);
//   }
// }

// function myCallback(error, name) {
//   if (error) {
//     console.error(error.message);
//   } else {
//     console.log(`Download Complete: ${name}`);
//   }
// }

// downloadVideo("Free_Money_virus.exe", myCallback);
// downloadVideo("Maka.mp4", myCallback);

// downloadVideo("Free_Money_virus.exe",)

//TODO 11-2 Promise

// function loadProducts(fun) {
//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("load", () => {
//     products = JSON.parse(xhr.response).map((productDetails) => {
//       if (productDetails.type === "clothing") {
//         return new Clothing(productDetails);
//       }
//       return new Product(productDetails);
//     });
//   });

//   xhr.open("GET", "https://path.example");
//   xhr.send();
// }

// loadProducts();

// let productsHTML = "";

// products.forEach((product) => {
//   //* Code . . . .
// });



// function loadProducts(fun) {
//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("load", () => {
//     products = JSON.parse(xhr.response).map((productDetails) => {
//       if (productDetails.type === "clothing") {
//         return new Clothing(productDetails);
//       }
//       return new Product(productDetails);
//     });
//   });

//   xhr.open("GET", "https://path.example");
//   xhr.send();

//   fun();
// }

// loadProducts(renderProducts);

// let productsHTML = "";

// products.forEach((product) => {
//   //* Code . . . .
// });

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

/*
Lets change the strategy, you will explain every single piece of the code, and how will i explain it to the professor using this steps:
1-Introduction to the project
2-Explaining schema.sql
3-Explaining seedData.sql
4-Explaining procedures.sql
5-Explaining functions.sql
6-Explaining triggers.sql
7-Explaining security.sql

I want you to give me a one big response for every step:
for example: 
---
for the first step we have our introduction

...
...
...
Now, give me the order to execute our step 2
---

You understand what i mean right?

in this way we will have a deeper understanding for the whole project
and me and you will provide the best DB project in the class

*/

// class Config {
//   get prefix() {
//     return "Default";
//   }

//   constructor() {
//     console.log(this.prefix);
//   }
// }

// class UserConfig extends Config {
//   get prefix() {
//     return "User";
//   }
// }

// const u1 = new UserConfig();

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

// class DiscountLayer extends TaxLayer{
//   calculate(cost) {
//     let TaxedCost = super.calculate(cost);

//     return TaxedCost - 10;
//   }
// }

// const p1 = new DiscountLayer();

// console.log(p1);

// console.log(p1.calculate(100));

// class GrandParent {
//   eat() {
//     console.log("Grand Parent Eats ");
//   }
// }

// class Parent extends GrandParent {

// }

// class Child extends Parent {
//   eat() {
//     super.eat();
//   }
// }

// const ch1 = new Child();

// ch1.eat();

// class Logger {

//   constructor(message) {
//     // this.message = message;
//     this.log(message);
//   }

//   getPrefix() {
//     return "System:";
//   }

//   log(message) {
//     console.log(`${this.getPrefix()} ${message}`);
//   }
// }

// class TimeLogger extends Logger {
//   timestamp = 12345;

//   getPrefix() {
//     return super.getPrefix() + " at " + this.timestamp;
//   }
// }

// class ErrorLogger extends TimeLogger {
//   getPrefix() {
//     return `ERROR: ${super.getPrefix()}`;
//   }
// }

// const e1 = new ErrorLogger("Database Fail");

// class Animal {
//   static planet = "Earth";

//   static compareSpeed(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, speed) {
//     super();
//     this.name = name;
//     this.speed = speed;
//   }
// }

// const r1 = new Rabbit("Name,", 200);

// // console.log(Animal);
// console.log(Rabbit);
// console.log(Object.getPrototypeOf(r1));

// // // Static properties are inherited!
// // console.log(Rabbit.planet); // "Earth"

// // // Static methods are inherited!
// // const rabbit1 = new Rabbit("Fast", 10);
// // const rabbit2 = new Rabbit("Slow", 2);

// // // We call 'compareSpeed' on Rabbit, but it executes the logic defined in Animal
// // const result = Rabbit.compareSpeed(rabbit1, rabbit2);
// // console.log(result); // 8

// class Test {
//   #waterAmount = 200;

//   get waterAmount() {
//     return this.#waterAmount;
//   }
// }

// const t1 = new Test();

// console.log(t1.waterAmount);

// t1.waterAmount = 50;

