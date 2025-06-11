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

(async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server Connected\nServer Running On Port ${PORT}`);
    });
  } catch (error) {
    const err = error as any;
    console.error(`Server Is Failed To Connect\nMessage:${err.message}`);
  }
})();
