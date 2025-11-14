import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUserData,
} from './controllers/user.controllers';
import { User } from './models/user.models';

getUsers();

console.log(getUser(5));

const newUser: User = {
  firstName: 'Abdullah',
  lastName: 'Bin',
  email: 'abdullah@gmail.com',
  password: 'abdullah',
};

console.log(addUser(newUser));

console.log(deleteUser(10));
const updateField: User = {
  firstName: 'Shahriar',
};
console.log(updateUserData(18, updateField));

console.log(getUser(18));
