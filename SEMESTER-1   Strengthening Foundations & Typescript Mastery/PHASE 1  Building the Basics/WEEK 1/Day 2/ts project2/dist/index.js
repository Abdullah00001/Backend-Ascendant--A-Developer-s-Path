"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_routes_1 = __importDefault(require("./routes/hello.routes"));
const finalApp = `Its ${(0, hello_routes_1.default)()}`;
console.log(finalApp);
