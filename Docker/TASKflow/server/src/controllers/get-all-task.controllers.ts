import { NextFunction, Request, Response } from "express";
import getAllTaskService from "../services/get-all-task.services.js";

const getAllTaskController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await getAllTaskService();
    res.status(200).json({ message: "success", data: data });
    return;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      next(error);
    }
  }
};

export default getAllTaskController;
