import dotenv from "dotenv";
import { app } from "./app.js";
import connectDatabase from "./configs/db.configs.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Server Started\nServer Running on Port ${PORT}`);
    });
  } catch (error) {
    const err = error as any;
    console.log(err.message);
  }
})();
