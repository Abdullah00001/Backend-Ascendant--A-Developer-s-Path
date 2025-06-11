import dotenv from 'dotenv';
import connectDatabase from './configs/db.configs.js';
import { app } from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

(async (): Promise<void> => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Server Running On Port ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error)
      console.log(`Database Connection Failed\nError: ${error.message}`);
    else console.log(`Database Connection Failed\nDue To Unknown Error`);
  }
})();
