import dotenv from "dotenv";
import connectDB from "./configs/db.configs.js";
import { app } from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

(async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server Connected\nServer Running On Port ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    else console.log(`Server Connection Failed Due To Unknown Error`);
  }
})();
