import { NextFunction, Request, Response } from "express";
import SubCategory from "../../models/subCategory.model.js";

const createSubCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newSubCategory = new SubCategory(req.body);
    await newSubCategory.save();
    res.status(200).json({
      status: "success",
      message: "Sub Category Create Successful",
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

export default createSubCategoryController;
