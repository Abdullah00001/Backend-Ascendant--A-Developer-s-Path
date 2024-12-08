import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import welcomePage from './template.js';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(welcomePage);
  console.log(`localhost:5000 GET / 200 OK ${new Date().toLocaleTimeString()}`);
});

app.listen(PORT, () => {
  console.log(`Server Is Running On Port : ${PORT}\n`);
});
