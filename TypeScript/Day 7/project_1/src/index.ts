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
  private _email: string = '';
  private _password: string = '';
  private _balance: number = 0;
  constructor(
    public username: string,
    email: string,
    password: string,
    balance: number
  ) {
    (this._email = email),
      (this._balance = balance),
      (this._password = password);
  }
  get getEmail(): string {
    return this._email;
  }
  set setBalance(balance: number) {
    this._balance = balance;
  }
  get getBalance(): number {
    return this._balance;
  }
}

class Bank {
  private _balance: number = 0;
  private _clients: User[] = [];
  constructor(public name: string, public location: string) {}

  get bankBalance() {
    return this._balance;
  }

  signup(
    username: string,
    email: string,
    password: string,
    balance: number
  ): void {
    const requestedUser = this._clients.find((user) => user.getEmail === email);
    if (requestedUser) {
      throw Error('User Already Exist');
    }
    this._clients.push(new User(username, email, password, balance));
    this._balance += balance;
    console.log('Signup Successful');
    return;
  }
  deposite(email: string, amount: number): void {
    const requestedUser = this._clients.find((user) => user.getEmail === email);
    if (requestedUser) {
      requestedUser.setBalance = requestedUser.getBalance + amount;
      this._balance += amount;
      console.log('Deposite Successful');
      return;
    }
    throw Error('User Not Found');
  }
  checkBalance(email: string): void {
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

const enum verificationStatus {
  verified = 'Verified',
  unverified = 'Unverified',
}

interface UserInterface {
  username: string;
  password: string;
  email: string;
  isVerified?: verificationStatus;
}

class Student implements UserInterface {
  private _isVerified: verificationStatus = verificationStatus.unverified;
  constructor(
    public username: string,
    public password: string,
    public email: string
  ) {}
}

const abdullah: Student = new Student(
  'abdullah',
  'abdullah',
  'abdullah@gmail.com'
);

// ABSTRACT CLASS ABSTRACK PROPERTY

abstract class baseClass {
  abstract userId: string;
  abstract getUser(): object;
  foundUser() {
    console.log('hello world');
  }
}

class Database extends baseClass {
  constructor() {
    super();
  }
  userId: string = 'abdullah';
  getUser(): { User_Name: string; message: string } {
    return { User_Name: this.userId, message: 'User Found' };
  }
}

const postgressql = new Database();

const { User_Name, message } = postgressql.getUser();

console.log(User_Name, message);

// GENRICS

const UserInfo = <T>(param: T): T => {
  return param;
};

console.log(UserInfo('34')); //type 1
console.log(UserInfo<string>('34')); //type 2

const CustomerData = <T>(data: T): T => {
  return data;
};

interface Customer {
  name: string;
  email: string;
  age: number;
  isVerified: boolean;
}

const customer1: Customer = {
  name: 'Abdullah',
  email: 'abdullah@gmail.com',
  age: 22,
  isVerified: false,
};

console.log(CustomerData<Customer>(customer1));
