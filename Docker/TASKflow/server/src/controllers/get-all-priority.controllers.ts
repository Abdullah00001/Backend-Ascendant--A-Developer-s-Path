import { NextFunction, Request, Response } from "express";
import getAllPriorityService from "../services/get-all-prority.services.js";

const getAllPriorityController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await getAllPriorityService();
    res.status(200).json({ message: "success", data: data });
    return;
  } catch (error) {
    if (error instanceof Error) {
      next();
    } else {
      next();
    }
  }
};

export default getAllPriorityController;
