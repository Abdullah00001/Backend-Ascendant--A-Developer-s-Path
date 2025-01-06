import express, { Request, Response } from "express";
import morgan from "morgan";
import { morganMessageFormat, streamConfig } from "./configs/morgan.configs.js";

const app = express();

app.use(express.json());

app.use(
  morgan(morganMessageFormat, {
    stream: {
      write: (message: string) => streamConfig(message),
    },
  })
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

export { app };
