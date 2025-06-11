"use strict";
/* class User {
  private _balance: number = 0;
  constructor() {}
  get getBalance(): number {
    return this._balance;
  }
  set setBalance(amount: number) {
    this._balance += amount;
  }
}

const abdullah = new User();

console.log(abdullah.getBalance); // return 0
abdullah.setBalance = 100;
console.log(abdullah.getBalance); */
class User {
    constructor(username, email, password, balance) {
        this.username = username;
        this._email = '';
        this._password = '';
        this._balance = 0;
        (this._email = email),
            (this._balance = balance),
            (this._password = password);
    }
    get getEmail() {
        return this._email;
    }
    set setBalance(balance) {
        this._balance = balance;
    }
    get getBalance() {
        return this._balance;
    }
}
class Bank {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this._balance = 0;
        this._clients = [];
    }
    get bankBalance() {
        return this._balance;
    }
    signup(username, email, password, balance) {
        const requestedUser = this._clients.find((user) => user.getEmail === email);
        if (requestedUser) {
            throw Error('User Already Exist');
        }
        this._clients.push(new User(username, email, password, balance));
        this._balance += balance;
        console.log('Signup Successful');
        return;
    }
    deposite(email, amount) {
        const requestedUser = this._clients.find((user) => user.getEmail === email);
        if (requestedUser) {
            requestedUser.setBalance = requestedUser.getBalance + amount;
            this._balance += amount;
            console.log('Deposite Successful');
            return;
        }
        throw Error('User Not Found');
    }
    checkBalance(email) {
        const requestedUser = this._clients.find((user) => user.getEmail === email);
        if (requestedUser) {
            console.log(`Your Balance : ${requestedUser.getBalance}`);
            return;
        }
        throw Error('User Not Found');
    }
}
const islamibank = new Bank('IBL', 'Khilkhet');
islamibank.signup('abdullah', 'abdullah@gmail.com', 'abdullah', 5000);
islamibank.checkBalance('abdullah@gmail.com');
console.log(`Bank Balance: ${islamibank.bankBalance}`);
islamibank.deposite('abdullah@gmail.com', 7000);
console.log(`Bank Balance: ${islamibank.bankBalance}`);
islamibank.checkBalance('abdullah@gmail.com');
class Student {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this._isVerified = "Unverified" /* verificationStatus.unverified */;
    }
}
const abdullah = new Student('abdullah', 'abdullah', 'abdullah@gmail.com');
// ABSTRACT CLASS ABSTRACK PROPERTY
class baseClass {
    foundUser() {
        console.log('hello world');
    }
}
class Database extends baseClass {
    constructor() {
        super();
        this.userId = 'abdullah';
    }
    getUser() {
        return { User_Name: this.userId, message: 'User Found' };
    }
}
const postgressql = new Database();
const { User_Name, message } = postgressql.getUser();
console.log(User_Name, message);
// GENRICS
const UserInfo = (param) => {
    return param;
};
console.log(UserInfo('34')); //type 1
console.log(UserInfo('34')); //type 2
const CustomerData = (data) => {
    return data;
};
const customer1 = {
    name: 'Abdullah',
    email: 'abdullah@gmail.com',
    age: 22,
    isVerified: false,
};
console.log(CustomerData(customer1));
