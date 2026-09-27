"use strict";

let name = "Red";



let user = {
  username: "John",
  sayHi: () => console.log(`Hi, I am ${this.username}`) // 'this' will NOT be 'user'!
};
user.sayHi(); // Output: Hi, I am undefined