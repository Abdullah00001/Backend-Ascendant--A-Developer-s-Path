"use strict";
/* =========================
--------Number TYPE----------
========================== */
const Likes = 23;
// const Friends:number="65" ERROR = [ Type 'string' is not assignable to type 'number'. ]
console.log(Likes, '\n');
/* =========================
-------STRING TYPE----------
========================== */
const UserName = 'Abdullah';
// const FirstName:string=76 ERROR = [ Type 'number' is not assignable to type 'string'. ]
console.log(UserName, '\n');
/* =========================
--------BOLLEAN TYPE---------
========================== */
const isActive = true;
// const isVerified:boolean=23 ERROR = [ Type 'number' is not assignable to type 'boolean'. ]
// const isVerified:boolean="hello" ERROR = [ Type 'string' is not assignable to type 'boolean'. ]
console.log(isActive, '\n');
/* =========================
---------FUNCTION TYPE------
========================== */
// void function that not take any parameter, its return nothing
const printHello = () => {
    console.log('Hello', '\n');
};
// printHello(23) ERROR = [ Expected 0 arguments, but got 1 ]
// const value:string=printHello() ERROR = [ Type 'void' is not assignable to type 'string'. ]
// const value:number=printHello() ERROR = [ Type 'void' is not assignable to type 'number'. ]
printHello();
// function that not take parameter just return string
const UserEmail = () => {
    return 'example@example.com';
};
// const Email:number=UserEmail() ERROR = [ Type 'string' is not assignable to type 'number'. ]
const Email = UserEmail();
console.log(Email, '\n');
// function that take 3 specific type parameter and return parameter type value
const CostSum = (cost1, cost2, cost3) => {
    return cost1 + cost2 + cost3;
};
// const total:number=CostSum() ERROR = [ Expected 3 arguments, but got 0. ]
const TotalCostSum = CostSum(270, 1000, 8050);
console.log(TotalCostSum, '\n');
/* const Abdullah:User={
    UserName:"Abdullah"
} */ //ERROR = [ Type '{ UserName: string; }' is missing the following properties from type 'User': UserAge, UserPassword, IsActive ]
const Abdullah = {
    UserName: 'Abdullah',
    UserAge: 23,
    UserPassword: '12457',
    IsActive: true,
};
Abdullah.UserPassword = '345678'; //interface objects properties are mutable
console.log(Abdullah, '\n');
// StatusType.error="Not found" ERROR = [ Cannot assign to 'error' because it is a read-only property. ]
console.log("Error" /* StatusType.error */, '\n');
console.log("Success" /* StatusType.success */, '\n');
/*
const response:ApiResponse={
code:200,

}
    ERROR = [ Type '{ code: number; }' is missing the following properties from type 'ApiResponse': type, status, message ]
*/
const response = {
    code: 200,
    type: "Success" /* StatusType.success */,
    status: 'ok',
    message: 'Server IS Alive',
};
console.log(response, '\n');
/* =========================
----------ARRAY TYPES------
========================== */
const names = ['abdullah', 'bin', 'omar', 'chowdhury'];
// names.push(78) ERROR = [ Argument of type 'number' is not assignable to parameter of type 'string'. ]
names.forEach((item) => console.log(item.toUpperCase()));
console.log('\n');
/* =========================
----------TUPLE TYPES------
=========================== */
const IsUser = ['abdullah12', 123432];
IsUser[0] = 'somudro';
console.log(IsUser);
/* =========================
----------OBJECT TYPES------
=========================== */
const Studentdata = {
    username: 'abdullah',
};
console.log(Studentdata.username);
