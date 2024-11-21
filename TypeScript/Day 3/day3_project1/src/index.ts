import printHello from './hello/printHello';

printHello();

// INTERFACE DECLARATION

interface User {
  name: string;
  age: number;
  skills: string[];
  gender: gender;
  isLogedin: boolean;
  sessionToken: string | number;
}

// ENUM DECLARATION

const enum gender {
  m = 'Male',
  f = 'Female',
}

// FUNCTION WITH TYPE ANNOTION AND USAGE OF ENUM

const myFunc = (name: string, age: number, skills: string[]): User => {
  return {
    name,
    age,
    skills,
    gender: gender.m,
    isLogedin: true,
    sessionToken: '12134456,543223455,786432',
  };
};

const me: User = myFunc('Abdullah', 22, [
  'javascript',
  'node',
  'express',
  'mongodb',
  'mongoose',
  'jwt',
]);

const isUser: [boolean, string | number] = [me.isLogedin, me.sessionToken];

console.log(isUser);

console.log(me);

// FUNCTION WITH UNION RETURN TYPE

const getNumber = (number: number): number | undefined => {
  if (number > 10) return number + 4;
  return;
};

console.log(getNumber(1));

// INTERSECTION TYPE

type Person = {
  name: string;
  age: number;
};

type Job = {
  designation: string;
  where: string;
};

type Profile = Person & Job;

const Abdullah: Profile = {
  name: 'Abdullah',
  age: 22,
  designation: 'Backend Engineer',
  where: 'Postbook',
};

console.log('Abdullah : ', Abdullah);

// type narrowing

const userAge = (number: number | string): void => {
  if (typeof number === 'number') console.log(number.toFixed());
  else console.log(number.toUpperCase());
};

userAge('12');

interface Shape {
  have: string;
  angle: number;
}

interface Rectangular<Shape> {
  inherit: Shape;
}

/* ======================
DAY 3 Plan
19/11/2024
o Topic: Basic Types
o Task: Learn and practice TypeScript basic types: string, number, boolean,
array, tuple, and enum.
o Goal: Understand type annotations and type inference for variables.

Day 3 Achivement
19/11/2024
WHAT I LEARED TODAY

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
