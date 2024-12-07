import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

const connect = async (): Promise<void> => {
  try {
    if (process.env.NODE_ENV === 'production') {
      const response = await mongoose.connect(
        `${process.env.PRODUCTION_DATABASE_URL}`
      );
      console.log(`Database Connected\nHost : ${response.connection.host}`);
    }
    const response = await mongoose.connect(
      `${process.env.DEVELOPMENT_DATABASE_URL}`
    );
    console.log(`Database Connected\nHost : ${response.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Database Connection Failed!\nmessage : ${error.message}`);
    }
    console.log('Database Failed To Connect Due To Unknown Error');
  }
};

app.get('/', (req: Request, res: Response): void => {
  res.send('hello world');
  console.log(`localhost:5000/ ${new Date().toISOString()} GET`);
  return;
});

(async (): Promise<void> => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(
        `Server Running On Port : ${port}\nVisit --> http://localhost:5000/`
      );
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Server Connection Failed!\nmessage : ${error.message}`);
    }
    console.log('Server Failed To Connect Due To Unknown Error');
  }
})();
