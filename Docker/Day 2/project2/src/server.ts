import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello World`);
});

app.get('/about', (req: Request, res: Response) => {
  res.send(`About Page`);
});

app.get('/contact', (req: Request, res: Response) => {
  res.send(`Its Contact Page`);
});

app.listen(PORT, () => {
  console.log(`server Running On Port ${PORT}`);
});
