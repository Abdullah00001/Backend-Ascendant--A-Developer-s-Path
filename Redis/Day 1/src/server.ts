import dotenv from "dotenv";
import connectDB from "./configs/db.configs.js";
import app from "./app.js";
import { connectRedis } from "./configs/redis.configs.js";

dotenv.config();

const PORT = process.env.PORT;

(async (): Promise<void> => {
  try {
    await connectDB();
    await connectRedis();
    app.listen(PORT, () => {
      console.log(`Server Running On Port ${PORT}`);
    });
  } catch (error) {
    const err = error as any;
    console.log(`Server Connection Failed\nError:${err.message}`);
    process.exit(1);
  }
})();
