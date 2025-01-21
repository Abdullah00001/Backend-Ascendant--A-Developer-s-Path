import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>Hello World</h1> <h6>Hello World</h6>`);
});

export default app;
