import { NextFunction, Request, Response } from "express";
import createLabelService from "../services/create-label.services.js";

const createLabelController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await createLabelService(req.body);
    res.status(201).json({ status: "success", data: data });
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

export default createLabelController;
