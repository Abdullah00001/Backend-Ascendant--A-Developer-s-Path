"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpresponse = void 0;
const httpresponse = (status, message, data) => {
    if (data) {
        const response = {
            status,
            message,
            data,
        };
        return response;
    }
    const response = {
        status,
        message,
    };
    return response;
};
exports.httpresponse = httpresponse;
