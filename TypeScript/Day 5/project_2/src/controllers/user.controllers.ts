import { Users } from '../db/user.db';
import { User } from '../models/user.models';
import { httpresponse, ResponseMessage } from '../utils/user.utils';

const getUsers = (): void => {
  console.log(Users);
};

const addUser = (data: User): ResponseMessage => {
  if (!data) {
    const response: ResponseMessage = { status: 400, message: 'Invalid Input' };
    return response;
  }
  const isUserExist = Users.find((user) => user.email === data.email);
  if (isUserExist) {
    const response: ResponseMessage = {
      status: 400,
      message: 'User Already Exist',
    };
    return response;
  }
  data.id = Math.floor(Math.random() * 1e6) * 9999 * 21;
  Users.push(data);
  const response: ResponseMessage = {
    status: 200,
    message: 'User Created Successful',
  };
  return response;
};

const getUser = (id: number): ResponseMessage => {
  const data = Users.find((item) => item.id === id);

  if (!data) {
    const response: ResponseMessage = {
      status: 401,
      message: `User With This ${id} Not Found`,
    };
    return response;
  }
  const response: ResponseMessage = {
    status: 200,
    message: 'User Retrive Successful',
    data,
  };
  return response;
};

const deleteUser = (id: number): ResponseMessage => {
  const index = Users.findIndex((user) => user.id === id);
  if (index === -1) {
    const response: ResponseMessage = {
      status: 401,
      message: `User With This ${id} Not Found`,
    };
    return response;
  }
  Users.splice(index, 1);
  const response: ResponseMessage = {
    status: 200,
    message: 'User Deleted Successful',
  };
  return response;
};

const updateUserData = (id: number, data: User): ResponseMessage => {
  let requestedUser = Users.find((user) => user.id === id);
  if (!requestedUser) {
    return httpresponse(404, 'User Not Found');
  }
  if (data.email) {
    requestedUser.email = data.email;
    return httpresponse(200, 'Email Updated Successfully');
  } else if (data.firstName) {
    requestedUser.firstName = data.firstName;
    return httpresponse(200, 'First Name Updated Successfully');
  } else if (data.lastName) {
    requestedUser.lastName = data.lastName;
    return httpresponse(200, 'Last Name Updated Successfully');
  }
  requestedUser.password = data.password;
  return httpresponse(200, 'Password Updated Successfully');
};

export { getUsers, getUser, addUser, deleteUser, updateUserData };
