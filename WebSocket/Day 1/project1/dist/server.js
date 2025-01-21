var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dotenv from "dotenv";
import app from "./app.js";
import { createServer } from "http";
import { Server } from "socket.io";
dotenv.config();
const PORT = process.env.PORT || 5000;
const server = createServer(app);
const io = new Server(server, {
    cors: { origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] },
});
io.on("connecttion", (client) => {
    console.log(`New User Connected`);
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server.listen(PORT, () => {
            console.log(`Server Connected\nServer Running On Port ${PORT}`);
        });
    }
    catch (error) {
        const err = error;
        console.error(`Server Is Failed To Connect\nMessage:${err.message}`);
    }
}))();
