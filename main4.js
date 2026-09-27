"use strict";

//? Error handling
//TODO 10-1 Error handling, "try...catch"

//TODO 10-2 Custom errors, extending Error

//? Promises, async / await
//TODO 11-1 Intuction: callbacks
//TODO 11-2 Promise

//* Re-resolve a promise?

//? What’s the output of the code below?
// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);

//? Solution:
// The output is: 1.
// The second call to resolve is ignored, because only the first call of reject/resolve is taken into account. Further calls are ignored.

//* Delay with a promise

// function delay(ms) {
//   return new Promise((resolve) => setTimeout( resolve, ms));
// }

// delay(3000).then(() => console.log("runs after 3 seconds"));

//* Animated circle with promise
//* The Polite Alarm Clock

// let alarmPromise = new Promise((resolve) =>
//   setTimeout(() => {
//     resolve("Wake up! It's a beautiful day! ☀️");
//   }, 2000),
// ).then((result) => console.log(result));

// //* The Coin Flip
// let myPromise = new Promise(function (resolve, reject) {
//   let number = Math.floor(Math.random() * 2);

//   if (number) {
//     return resolve("Heads! You win! 🏆");
//   }

//   reject(new Error("Tails! You lose! 😢"));
// })
//   .then((result) => console.log(`Horay! ${result}`))
//   .catch((error) => console.log(`${error.message}`))
//   .finally(() =>
//     console.log("Coin toss complete. The referee steps off the field."),
//   );

//* The Reusable Delay Function
// function delay(ms) {
//   return new Promise((resolve) => setTimeout( resolve, ms));
// }

// delay(3000).then(() => console.log("runs after 3 seconds"));

//

//TODO 11-3 Promises chaining

// Step 1: Ask the internet for the 'octocat' user data
// fetch("https://api.github.com/users/octocat")
//   // Step 2: The internet replies with a locked "box" (the response)
//   .then(function (response) {
//     // We "unpack" the box into readable text (JSON).
//     // This takes time, so it returns a NEW Promise!
//     return response.json();
//   })

//   // Step 3: We finally have our unpacked data!
//   .then(function (user) {
//     console.log("Hello, " + user.name); // Prints: "Hello, The Octocat"

//     // Let's create an image and put it on the webpage
//     let img = document.createElement("img");
//     img.src = user.avatar_url; // the picture link from GitHub
//     document.body.append(img);

//     // Step 4: Wait 3 seconds, then remove the image.
//     // We RETURN A PROMISE so the chain pauses and waits here!
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         img.remove(); // Delete the image from screen
//         resolve(user); // Tell the chain we are done, and pass the user info along
//       }, 3000); // 3000 milliseconds = 3 seconds
//     });
//   })

//   // Step 5: This runs ONLY after the 3-second timer finishes
//   .then(function (user) {
//     console.log("The picture of " + user.name + " is gone!");
//   });

//* The Math Factory

/*

For the first assignment, i decided to play along a bit, (And im sorry for that my senior 0_0)
since .then always returns a brand new promise no matter if we explicity returns a simple value,
i decided to simulate the JS engine process behind the scenes, so instead of writing:

new Promise ((resolve) => resolve(5)).then(result => result * 10)

i wrote this:

*/

// new Promise((resolve) => resolve(5))
//   .then((result) => new Promise((resolve) => resolve(result * 10)))
//   .then((result) => new Promise((resolve) => resolve(result - 8)))
//   .then(
//     (result) =>
//       new Promise((resolve) => {
//         console.log(result);
//         resolve(result);
//       }),
// );

//* The Slow Cooker

// let cookMeal = (function () {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       const meals = ["🍳 Eggs", "🧀 Cheese"];
//       resolve(meals);
//     }, 2000),
//   );
// })()
//   .then(
//     (meals) =>
//       new Promise((resolve) =>
//         setTimeout(() => {
//           console.log(`Received => ${meals.toString()}`);
//           meals.push("🥓 Bacon");
//           resolve(meals);
//         }, 2000),
//       ),
//   )
//   .then((meals) => {
//     console.log(`Received => ${meals.toString()}`);
//     console.log("Breakfast is served: ");
//     for (let i = 0; i < meals.length; i++) {
//       console.log(`${i + 1}- ${meals[i]}`);
//     }
//   });

//* The Secret Agent ID Card

// fetch("https://swapi.dev/api/people/1/").then((response) => response.json()).then(user => {
//   console.log(user.name);
//   console.log(user.birth_year);
//   return new Promise.resolve(user.name);
// }).then((username) => {
//   console.log(`Agent ${username} signing off!`);
// });

//TODO 11-4 Error handling with promises

//* Error in setTimeout

//? What do you think? Will the .catch trigger? Explain your answer.
// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);

//? Answer:

// As said in the chapter, there’s an “implicit try..catch” around the function code. So all synchronous errors are handled.
// But here the error is generated not while the executor is running, but later. So the promise can’t handle it.

//* The Falling Acrobat
// Promise.reject(new Error("Oh no! I lost my balance!")).catch((error) =>
//   console.log(`Caught Safely: ${error.message}`),
// );

//* The Hot Potato Server
// Promise.reject(new Error("Database Exploded"))
//   .catch((error) => {
//     if (error.message === "Network Dropped") {
//       return "Backup User Data";
//     }
//     throw error;
//   })
//   .then((result) => console.log(`Success: ${result}`))
//   .catch((error) => console.log(`Hospital received major error: ${error.message}`));

//* The Exploding Oven & The Circus Manager

// window.addEventListener("unhandledrejection", (event) =>
//   console.log(`GLOBAL ALARM: ${event.reason}`),
// );

// new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("The oven is too hot!")), 2000);
// }).catch((error) => console.log(`Error: ${error.message}`));

// // Result: Error: The oven is too hot!

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     throw new Error("The oven is too hot!");
//   }, 2000);
// }).catch((error) => console.log(`Error: ${error.message}`));

// Result: Uncaught Error: The oven is too hot!     at main4.js:201:11

// I do not feel good about this code, when i tried to remove catch i expect the global alarm to trigger, but it doesn't i have the same previous result.

//TODO 11-5 Promise API

// // Fetching data for 3 different users from a public database
// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// // Map every URL to a "fetch" task (downloading the data)
// let fetchPromises = urls.map((url) => fetch(url));

// // Wait for all 3 downloads to finish
// Promise.all(fetchPromises).then((responses) => {
//   responses.forEach((response) =>
//     console.log(response),
//   );
// });

//TODO 11-6 Promisification
//TODO 11-7 Microtasks
//TODO 11-8 Async/await

//* Rewrite using async/await

// loadJson("https://javascript.info/no-such-user.json");

//* Rewrite "rethrow" with async/await

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   try {
//     let response = await fetch(url);
//     if (response.status === 200) {
//       let json = await response.json();
//       return json;
//     }
//      throw new HttpError(response);
//   } catch (error) {
//     alert(error);
//   }
// }

// async function demoGithubUser() {
//   try {
//     let name = prompt("Enter a name?", "zoalfekar-nasser");
//     let user = await loadJson(`https://api.github.com/users/${name}`);
//     console.log(user);
//     console.log(`Full Name: ${user.name}`);
//     return user;
//   } catch (error) {
//     if (error instanceof HttpError && error.response.status === 404) {
//       alert("No such user");
//     } else {
//       throw error;
//     }
//   }
// }

// demoGithubUser();

//* Call async from non-async
//* Dangerous Promise.all

//* The Beginner's Timer

// async function delayedGreeting() {
//   let greetingPromise = new Promise((resolve) =>
//     setTimeout(() => resolve("Hello, JavaScript Master!"), 1500),
//   );

//   let result = await greetingPromise;

//   console.log(result);
// }

// delayedGreeting();

//* The Online Directory

// async function fetchUserData() {
//   try {
//     let jsonData = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let user = await jsonData.json();
//     console.log(`User Name: ${user?.name}`);
//     console.log(`User Email: ${user?.email}`);
//     console.log(`User Phone: ${user?.phone}`);

//   } catch (error) {
//     console.error(error.message);
//   }
// }
// fetchUserData();

//* The Parallel Race

// async function loadTripleDashboard() {
//   try {
//     let user1 = fetch("https://jsonplaceholder.typicode.com/users/1");
//     let user2 = fetch("https://jsonplaceholder.typicode.com/users/2");
//     let user3 = fetch("https://jsonplaceholder.typicode.com/users/3");

//     let usersJson = await Promise.all([user1, user2, user3]);
//     let users = await Promise.all(usersJson.map((userJson) => userJson.json()));

//     let usernames = users.map((user) => user.name);

//     for (let username of usernames) {
//       console.log(username);
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// loadTripleDashboard();

//? Generators, advanced iteration
//TODO 12-1 Generators
//TODO 12-2 Async iteration and generators

// fetch("https://api.github.com/users/javascript").then((response) => response.json()).then;

// 1. We declare an "async" function. This tells JavaScript:
// "Hey, this function contains tasks that take time."
// async function getRestaurantMenu() {

//   console.log("1. Ordering food...");

//   // 2. We use 'await' in front of fetch.
//   // 'await' tells JavaScript to PAUSE this specific function
//   // until the Promise resolves into the actual Response object.
//   const response = await fetch('https://api.example.com/menu');

//   // 3. This line won't run until the server replies.
//   // The 'response' variable now holds the unwrapped Promise!
//   console.log("2. Food arrived!", response);
// }

// getRestaurantMenu();
// console.log("3. Doing other things while waiting for food...");

// async function checkGitHubUser() {
//   const url = "https://api.github.com/users/zoalfekar-nasser";

//   // 1. Send request, wait ONLY for the server's initial headers (Phase 1)
//   const response = await fetch(url);

//   // 2. Check the HTTP Status Code
//   console.log("Status Code:", response.status);

//   console.log(response);

//   // 3. Check the handy boolean 'ok' property
//   if (response.ok) {
//     console.log("✅ The server found the user! Ready to download data.");
//   } else {
//     console.log("⚠️ Something went wrong!");
//   }
// }

// checkGitHubUser();

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

//* Fetch users from GitHub

// async function getUsers(names) {
//   const users = [];
//   try {
//     for (let name of names) {
//       let userJson = await fetch(`https://api.github.com/users/${name}`);
//       if (!userJson.ok) {
//         console.log(`User: ${name} not found`);
//         users.push(null);
//         continue;
//       }
//       let user = await userJson.json();

//       users.push(user);
//     }
//     return users;
//   } catch (error) {
//     console.log("NetworkError");
//   }
// }

// I tried to solve this assignment in javascript.info site, that what it says:

/*
Fetch users from GitHub
Create an async function getUsers(names), that gets an array of GitHub logins, fetches the users from GitHub and returns an array of GitHub users.

The GitHub url with user information for the given USERNAME is: https://api.github.com/users/USERNAME.

There’s a test example in the sandbox.

Important details:

There should be one fetch request per user.
Requests shouldn’t wait for each other. So that the data arrives as soon as possible.
If any request fails, or if there’s no such user, the function should return null in the resulting array.

My solution that i know it's a disaster:

async function getUsers(names) {
  const users = [];
  try {
    for (let name of names) {
      let userJson = await fetch(`https://api.github.com/users/${name}`);
      if (!userJson.ok) {
        console.log(`User: ${name} not found`);
        users.push(null);
        continue;
      }
      let user = await userJson.json();

      users.push(user);
    }
    return users;
  } catch (error) {
    console.log("NetworkError");
  }
} 


let githubUsers = getUsers(["zoalfekar-nasser", "zoalfekar-nasser"]);

console.log(githubUsers);

i know async functions always return a promise, but how can i let it actually return the array of users?

please review my code carefully, and tell where i misunderstood things
*/

// let githubUsers = getUsers(["zoalfekar-nasser", "zoalfekar-nasser"]);

// console.log(githubUsers);

// async function getUsers(names = []) {
//   const fetchPromises = names.map(async (name) => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${name}`,
//       );

//       if (!response.ok) {
//         return null;
//       }

//       return await response.json();
//     } catch (error) {
//       return null;
//     }
//   });

//   return await Promise.all(fetchPromises);
// }

//* Fetching Your First Toy (GET)

// async function getDogPic() {
//   try {
//     let dogPicFetch = await fetch("https://dog.ceo/api/breeds/image/random");
//     if (!dogPicFetch.ok) {
//       throw new Error("Dog image not here for some reason!");
//     }
//     return await dogPicFetch.json();

//     // console.log(dogPic);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// async function viewDogPic(dogPicPromise) {
//   if (!(dogPicPromise instanceof Promise)) {
//     throw new Error("Not a promise");
//   }

//   let dogPic = await dogPicPromise;

//   const dogPicElement = document.createElement("img");

//   dogPicElement.src = dogPic.message;

//   document.body.append(dogPicElement);
// }

// viewDogPic(getDogPic());


// let obj = {
//   1: "One",
// }

// function f() {
//   console.log(this);
// }

// f.bind(obj)();


// let group = {
  
//   title: "Frontend Masters",
//   students: ["Alice", "Bob", "Charlie"],

//   showList() {
//     this.students.forEach((function(student) {

//       console.log(this);
//     }).call(this));
//   }
// };

// group.showList();

//* Sending a Letter (POST)
//*  The Blob Builder & The 404 Trap

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
