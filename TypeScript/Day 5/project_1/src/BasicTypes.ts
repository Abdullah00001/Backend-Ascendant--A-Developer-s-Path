/* ===================================
-------------BASIC TYPES--------------
===================================== */
// IN THIS FILE I PRACTICED BASIC TYPES OF TYPESCRIPT
// NUMBER,STRING,BOOLEAN,ARRAY,FUNCTION,ENUM

// NUMBER

const age: number = 22;

console.log(age, '\n');

// STRINGS

const UserName: string = 'Abdullah Bin Omar Chowdhury';

console.log(UserName, '\n');

// BOOLEAN

const IsActive: boolean = false;

console.log(IsActive, '\n');

// ARRAY

const UsersList: string[] = ['Abdullah', 'Bin', 'Wasif', 'Nibir'];
console.log('=============================\n');
console.log('---------CONSOLE ARRAY--------\n');
/* 
// =======for in iterate on keys
for (const item in UsersList) {
  console.log(UsersList[item]);
} 
  */
//  for of iterate on value
for (const item of UsersList) {
  console.log(item);
}
console.log('\n');
UsersList.forEach((item) => console.log(item));
console.log('===============================\n');

// FUNCTION

console.log('=============================\n');
console.log('-------CONSOLE FUNCTION------\n');

// No Parameter With Void Function

const helloJs = (): void => {
  console.log('Hello I Am Js\n');
};

helloJs();

// Parameter With Void Function

const helloTs = (language: string): void => {
  console.log(`Hello I Am ${language}\n`);
};

helloTs('TypeScript');

// Paramter With Return Function

const helloCpp = (language: string): string => {
  return `Hello I Am ${language}\n`;
};
console.log(helloCpp('CPP'));

// No Parameter But Return

const helloC = (): string => {
  return 'Hello I Am C';
};

console.log(helloC(), '\n');

console.log('=============================\n');

// ENUMS

const enum OrderStatus {
  'pending' = 'Pening',
  'accept' = 'Accept',
  'delivierd' = 'Delivierd',
}

console.log(OrderStatus.pending, '\n');

// INTERFACE

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
  number: number;
  password: string;
}

const Users: User[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    isVerified: true,
    number: 1234567890,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    password: 'securepass456',
    isVerified: false,
    number: 9876543210,
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    password: 'mypassword789',
    isVerified: true,
    number: 5556677889,
  },
  {
    firstName: 'Bob',
    lastName: 'Brown',
    email: 'bob.brown@example.com',
    password: 'bobsecurepass101',
    isVerified: false,
    number: 4445556667,
  },
  {
    firstName: 'Charlie',
    lastName: 'Davis',
    email: 'charlie.davis@example.com',
    password: 'charliepass202',
    isVerified: true,
    number: 3334445556,
  },
];

const getUsers = (Users: User[]): void => {
  Users.forEach((user) => console.log(user));
};

getUsers(Users);
