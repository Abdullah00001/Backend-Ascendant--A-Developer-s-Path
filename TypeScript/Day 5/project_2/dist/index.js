"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controllers_1 = require("./controllers/user.controllers");
(0, user_controllers_1.getUsers)();
console.log((0, user_controllers_1.getUser)(5));
const newUser = {
    firstName: 'Abdullah',
    lastName: 'Bin',
    email: 'abdullah@gmail.com',
    password: 'abdullah',
};
console.log((0, user_controllers_1.addUser)(newUser));
console.log((0, user_controllers_1.deleteUser)(10));
const updateField = {
    firstName: 'Shahriar',
};
console.log((0, user_controllers_1.updateUserData)(18, updateField));
console.log((0, user_controllers_1.getUser)(18));
