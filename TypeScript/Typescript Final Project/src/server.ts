import dotenv from 'dotenv';
import { app } from './app.js';
import connectDatabase from './configs/db.config.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

(async (): Promise<void> => {
  try {
    await connectDatabase();
    console.log(`Server Is Booting...`);
    app.listen(PORT, () => {
      console.log(
        `Welcome! Your system is up and running.\nSERVER PORT : ${PORT}\n-----------------------------------------`
      );
    });
  } catch (error) {
    const err = error as Error;
    console.log(`Server Booting Failed\nError : ${err.message}`);
  }
})();
