import dotenv from 'dotenv';
import { app } from './app.js';
import connect from './configs/db.configs.js';
import { isPortExist } from './utils/server.utils.js';

dotenv.config();

const PORT = process.env.PORT;
(async (): Promise<void> => {
  try {
    await connect();
    app.listen(isPortExist(PORT), () => {
      console.log(
        `Sever Connected\nServer Running On Port ${isPortExist(PORT)}`
      );
    });
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    console.log(
      `An unknown server error occurred. Check the server logs and debug the issue for further investigation.`
    );
  }
})();
