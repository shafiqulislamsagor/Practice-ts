"use strict";
// console.log('Starting')
const userDetails = (id, user) => {
    console.log(`User id is ${id} , name is ${user.name} , age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'sir' : 'Mr'} ${user.name}`);
};
userDetails('123', { name: 'sagor', age: 34 });
sayHello({ name: 'sagor', age: 34 });
