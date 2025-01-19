import express, { Application, Request, Response } from "express";
import redisClient from "./configs/redis.configs.js";
import { Todo } from "./models/todo.model.js";
import { Document } from "mongoose";

const app: Application = express();

app.use(express.json());
app.set("trust proxy", true);

app.get("/", async (req: Request, res: Response): Promise<void> => {
  const cachedTodos = await redisClient.get("todos");
  const ip = req.ip;
  console.log(ip);
  if (cachedTodos) {
    res.status(200).json({ data: JSON.parse(cachedTodos) });
    return;
  } else {
    const todos: Document[] = await Todo.find({});
    await redisClient.set("todos", JSON.stringify(todos), { EX: 60 });
    res.status(200).json({ data: todos });
    return;
  }
});

export default app;
