import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./configs/db.configs.js";

dotenv.config();

(async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(`Server Connection Failed Due To Unknown Error`);
    }
  }
})();
