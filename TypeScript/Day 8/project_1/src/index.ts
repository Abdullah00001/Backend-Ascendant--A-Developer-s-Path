import dotenv from 'dotenv';
import { app } from './app.js';
import connectDatabase from './configs/db.configs.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

(async (): Promise<void> => {
  try {
    await connectDatabase();
    console.log(`Please Wait...`);
    console.log(`Server Is Booting Up`);
    app.listen(PORT, () => {
      console.log(`Server Booted SucessFul\nServer Running On Port : ${PORT}`);
    });
  } catch (error) {
    const err = error as Error;
    console.log(`Server Booting Failed\nError : ${err.message}`);
  }
})();
