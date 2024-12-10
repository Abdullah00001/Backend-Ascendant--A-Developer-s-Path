import dotenv from 'dotenv';
import connect from './config/db.config.js';
import { app } from './app.js';

dotenv.config();

const PORT = process.env.PORT;

(async (): Promise<void> => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Server Connected`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Server Connection Failed`);
      process.exit(1);
    }
    console.log(`Server Connection Failed Due To Unknown Error`);
    process.exit(1);
  }
})();
