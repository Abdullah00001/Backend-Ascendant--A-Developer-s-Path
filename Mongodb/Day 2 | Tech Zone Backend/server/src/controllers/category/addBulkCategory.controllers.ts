import { NextFunction, Request, Response } from "express";
import Category from "../../models/category.model.js";

const addBulkCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await Category.insertMany(req.body);
    res.status(200).json({
      status: "success",
      message: "Categories Added Successful",
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

export default addBulkCategoryController;
