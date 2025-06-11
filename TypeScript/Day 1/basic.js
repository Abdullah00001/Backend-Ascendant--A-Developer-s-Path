/* =============================================
sample function for undertand the theory
why ts comes.deference between ts and js
=================================================*/
/* ==========================
Javascript
============================*/
var bye = function (username, userBirthDay) {
    console.log("username : ".concat(username, "\nnumber : ").concat(userBirthDay));
};
/* ===========================
TS BEAUTY
=============================*/
var greet = function (userName, userBirthDay) {
    console.log("Username : ".concat(userName.toUpperCase(), "\nBirthday : ").concat(userBirthDay.toDateString()));
};
greet('rahim', new Date());
/* greet(new Date(),'Rahim') */
/* ==================================
Exploring The Beauty Of Typescript
=====================================*/
var email = '';
var number = 0;
/* email=43 its will give error and say you cant assign number in a string type variable */
email = 'abdullah@gmail.com';
/* number='hello' its will give error and say you cant assign string in a number type variable */
number = 22;
console.log(email, number);
var isLoggedin = false;
isLoggedin = true;
/* isLoggedin() its will say i cant call the boolean type variable */
console.log(isLoggedin);
var intentdent = function (user, number) {
    console.log("".concat(user, ",").concat(number));
};
intentdent({ name: 'me' }, 23);
