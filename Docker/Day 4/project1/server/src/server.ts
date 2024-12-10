import dotenv from 'dotenv';
import connect from './configs/db.config.js';
import { app } from './app.js';
import isPortExist from './utils/server.utils.js';

dotenv.config();

const PORT = process.env.PORT;

(async (): Promise<void> => {
  try {
    await connect();
    app.listen(isPortExist(PORT), () => {
      console.log(`Server Connection Successful`);
    });
  } catch (error) {
    if (error instanceof Error)
      console.log(`Server connection Failed\nError : ${error.message}`);
    console.log(`Unknown Error`);
  }
})();
