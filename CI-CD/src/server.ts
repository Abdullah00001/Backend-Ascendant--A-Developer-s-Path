import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server Running On Port ${PORT}`);
    });
  } catch (error) {
    const err = error as any;
    console.error(err.message);
    process.exit(1);
  }
})();
