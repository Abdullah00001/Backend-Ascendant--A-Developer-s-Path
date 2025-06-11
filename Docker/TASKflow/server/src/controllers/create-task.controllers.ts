import { NextFunction, Request, Response } from "express";
import createTaskService from "../services/create-task.services.js";

const createTaskController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await createTaskService(req.body);
    res.status(201).json({ message: "success", data: data });
    return;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      next;
    }
  }
};

export default createTaskController;
