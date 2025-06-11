"use strict";
const age = 22;
console.log(age, '\n');
const UserName = 'Abdullah Bin Omar Chowdhury';
console.log(UserName, '\n');
const IsActive = false;
console.log(IsActive, '\n');
const UsersList = ['Abdullah', 'Bin', 'Wasif', 'Nibir'];
console.log('=============================\n');
console.log('---------CONSOLE ARRAY--------\n');
for (const item of UsersList) {
    console.log(item);
}
console.log('\n');
UsersList.forEach((item) => console.log(item));
console.log('===============================\n');
console.log('=============================\n');
console.log('-------CONSOLE FUNCTION------\n');
const helloJs = () => {
    console.log('Hello I Am Js\n');
};
helloJs();
const helloTs = (language) => {
    console.log(`Hello I Am ${language}\n`);
};
helloTs('TypeScript');
const helloCpp = (language) => {
    return `Hello I Am ${language}\n`;
};
console.log(helloCpp('CPP'));
const helloC = () => {
    return 'Hello I Am C';
};
console.log(helloC(), '\n');
console.log('=============================\n');
console.log("Pening", '\n');
const Users = [
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
const getUsers = (Users) => {
    Users.forEach((user) => console.log(user));
};
getUsers(Users);
