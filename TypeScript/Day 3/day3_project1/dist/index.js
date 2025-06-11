"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const printHello_1 = __importDefault(require("./hello/printHello"));
(0, printHello_1.default)();
// FUNCTION WITH TYPE ANNOTION AND USAGE OF ENUM
const myFunc = (name, age, skills) => {
    return {
        name,
        age,
        skills,
        gender: "Male" /* gender.m */,
        isLogedin: true,
        sessionToken: '12134456,543223455,786432',
    };
};
const me = myFunc('Abdullah', 22, [
    'javascript',
    'node',
    'express',
    'mongodb',
    'mongoose',
    'jwt',
]);
const isUser = [me.isLogedin, me.sessionToken];
console.log(isUser);
console.log(me);
// FUNCTION WITH UNION RETURN TYPE
const getNumber = (number) => {
    if (number > 10)
        return number + 4;
    return;
};
console.log(getNumber(1));
const Abdullah = {
    name: 'Abdullah',
    age: 22,
    designation: 'Backend Engineer',
    where: 'Postbook',
};
console.log('Abdullah : ', Abdullah);
// type narrowing
const userAge = (number) => {
    if (typeof number === 'number')
        console.log(number.toFixed());
    else
        console.log(number.toUpperCase());
};
userAge('12');
/* ======================
WHAT I CLEARED TODAY

-basic types
-number,
-string,
-boolean,
-null,
-undefined,
-array,
-function,
-tuple
-object
-interface
-type anation
-enum
-intersection type
-union type
-litteral type
-type aliase
-type narrowing

*/
