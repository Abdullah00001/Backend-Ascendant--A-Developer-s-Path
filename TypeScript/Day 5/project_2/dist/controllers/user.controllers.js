"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.deleteUser = exports.addUser = exports.getUser = exports.getUsers = void 0;
const user_db_1 = require("../db/user.db");
const user_utils_1 = require("../utils/user.utils");
const getUsers = () => {
    console.log(user_db_1.Users);
};
exports.getUsers = getUsers;
const addUser = (data) => {
    if (!data) {
        const response = { status: 400, message: 'Invalid Input' };
        return response;
    }
    const isUserExist = user_db_1.Users.find((user) => user.email === data.email);
    if (isUserExist) {
        const response = {
            status: 400,
            message: 'User Already Exist',
        };
        return response;
    }
    data.id = 9999776;
    user_db_1.Users.push(data);
    const response = {
        status: 200,
        message: 'User Created Successful',
    };
    return response;
};
exports.addUser = addUser;
const getUser = (id) => {
    const data = user_db_1.Users.find((item) => item.id === id);
    if (!data) {
        const response = {
            status: 401,
            message: `User With This ${id} Not Found`,
        };
        return response;
    }
    const response = {
        status: 200,
        message: 'User Retrive Successful',
        data,
    };
    return response;
};
exports.getUser = getUser;
const deleteUser = (id) => {
    const index = user_db_1.Users.findIndex((user) => user.id === id);
    if (index === -1) {
        const response = {
            status: 401,
            message: `User With This ${id} Not Found`,
        };
        return response;
    }
    user_db_1.Users.splice(index, 1);
    const response = {
        status: 200,
        message: 'User Deleted Successful',
    };
    return response;
};
exports.deleteUser = deleteUser;
const updateUserData = (id, data) => {
    let requestedUser = user_db_1.Users.find((user) => user.id === id);
    if (!requestedUser) {
        return (0, user_utils_1.httpresponse)(404, 'User Not Found');
    }
    if (data.email) {
        requestedUser.email = data.email;
        return (0, user_utils_1.httpresponse)(200, 'Email Updated Successfully');
    }
    else if (data.firstName) {
        requestedUser.firstName = data.firstName;
        return (0, user_utils_1.httpresponse)(200, 'First Name Updated Successfully');
    }
    else if (data.lastName) {
        requestedUser.lastName = data.lastName;
        return (0, user_utils_1.httpresponse)(200, 'Last Name Updated Successfully');
    }
    requestedUser.password = data.password;
    return (0, user_utils_1.httpresponse)(200, 'Password Updated Successfully');
};
exports.updateUserData = updateUserData;
