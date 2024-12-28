import { NextFunction, Request, Response } from "express";
import SubCategory from "../../models/subCategory.model.js";

const createBulkSubCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await SubCategory.insertMany(req.body);
    res.status(200).json({
      status: "success",
      message: "Sub Categories Created Successful",
    });
    return;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      next();
    } else {
      console.log("Unknown Error");
      next();
    }
  }
};

export default createBulkSubCategoryController;
