"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_controllers_1 = __importDefault(require("../controllers/hello.controllers"));
const printHello = () => {
    console.log(hello_controllers_1.default);
    return hello_controllers_1.default;
};
exports.default = printHello;
