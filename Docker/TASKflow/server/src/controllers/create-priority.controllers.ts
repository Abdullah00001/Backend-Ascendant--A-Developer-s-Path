import { NextFunction, Request, Response } from "express";
import createPriorityService from "../services/create-priority.services.js";

const createPriorityController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const response = await createPriorityService(req.body);
    res.status(201).json({ message: "Priority Created", data: response });
    return;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    } else {
      console.log("Unknown Error");
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }
  }
};

export default createPriorityController;
