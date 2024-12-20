import dotenv from 'dotenv';
import connect from './configs/db.configs.js';
import { app } from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

(async (): Promise<void> => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Server Running On Port ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log('Server Connection Failed Due To Unknown Error');
  }
})();
