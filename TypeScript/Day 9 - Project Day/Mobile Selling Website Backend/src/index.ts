import dotenv from 'dotenv';
import connectDatabase from './configs/db.configs.js';
import { app } from './app.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

(async (): Promise<void> => {
  try {
    await connectDatabase();
    console.log(`Server Is Connecting...`);
    app.listen(PORT, (): void => {
      console.log(`Server Connected\nPort : ${PORT}`);
    });
  } catch (error) {
    const err = error as Error;
    console.log(`Server Connection Failed\nMessage : ${err.message}`);
  }
})();
