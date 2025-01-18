import express, { Application, Request, Response } from "express";
import redisClient from "./configs/redis.configs.js";
import { Document } from "mongoose";
import { Todo } from "./models/todo.model.js";

const app: Application = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response): Promise<void> => {
  const cachedTodos = await redisClient.get("todos");
  if (cachedTodos) {
    res.status(200).json({ data: JSON.parse(cachedTodos) });
    return;
  } else {
    const todos = await Todo.find({});
    await redisClient.set("todos", JSON.stringify(todos));
    res.status(200).json({ data: todos });
    return;
  }
});

export default app;
