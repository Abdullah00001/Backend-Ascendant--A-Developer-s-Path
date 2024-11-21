/* =============================================
sample function for undertand the theory
why ts comes.deference between ts and js
=================================================*/

/* ==========================
Javascript
============================*/

const bye = (username, userBirthDay) => {
  console.log(`username : ${username}\nnumber : ${userBirthDay}`);
};

/* ===========================
TS BEAUTY
=============================*/
const greet = (userName: string, userBirthDay: Date) => {
  console.log(
    `Username : ${userName.toUpperCase()}\nBirthday : ${userBirthDay.toDateString()}`
  );
};

greet('rahim', new Date());

/* greet(new Date(),'Rahim') */

/* ==================================
Exploring The Beauty Of Typescript
=====================================*/

let email: string = '';
let number: number = 0;

/* email=43 its will give error and say you cant assign number in a string type variable */

email = 'abdullah@gmail.com';

/* number='hello' its will give error and say you cant assign string in a number type variable */

number = 22;

console.log(email, number);

let isLoggedin: boolean = false;

isLoggedin = true;

/* isLoggedin() its will say i cant call the boolean type variable */

console.log(isLoggedin);

interface Person {
  user: object;
  number: number;
}

const intentdent = (user: Person, number: number) => {
  console.log(`${user},${number}`);
};

intentdent({ user: {'me'}, }, 23);
