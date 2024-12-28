import { NextFunction, Request, Response } from "express";
import Category from "../../models/category.model.js";

const getAllCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await Category.find({});
    res
      .status(200)
      .json({
        status: "success",
        message: "Category Retrieve Successful",
        data: data,
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

export default getAllCategoryController;
