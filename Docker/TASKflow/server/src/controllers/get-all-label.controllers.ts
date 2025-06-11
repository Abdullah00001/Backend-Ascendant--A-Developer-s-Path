import { NextFunction, Request, Response } from "express";
import getAllLabelsServices from "../services/get-all-label.services.js";

const getAllLabelController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await getAllLabelsServices();
    res.status(200).json({ message: "status", data: data });
    return;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      next();
    } else {
      console.log("Unknown Error Occurred In Service");
      next();
    }
  }
};

export default getAllLabelController;
