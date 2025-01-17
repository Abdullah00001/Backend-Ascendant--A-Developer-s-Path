import express, { Application, Request, Response } from "express";
import redisClient from "./configs/redis.configs.js";
import { Document } from "mongoose";
import { Todo } from "./models/todo.model.js";

const app: Application = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const cachedtodos = await redisClient.get("todos");
  if (cachedtodos) {
    return res.json({ data: cachedtodos });
  }
  const data = await Todo.find({});
  await redisClient.set("todos",data);
  return res.json({ data: data });
});

export default app;
