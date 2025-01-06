import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server Started\nServer Running on Port ${PORT}`);
    });
  } catch (error) {
    const err = error as any;
    console.log(err.message);
  }
})();
