import express, { Request, Response } from "express";
import logger from "./configs/logger.js";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  logger.info("ROUTE / GET SUCCESS 200");
  res.status(200).send("hello");
});

export { app };
