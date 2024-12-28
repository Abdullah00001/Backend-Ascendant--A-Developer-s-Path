import { NextFunction, Request, Response } from "express";
import SubCategory from "../../models/subCategory.model.js";

const getAllSubCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await SubCategory.find({}).populate("category");
    res.status(200).json({
      status: "success",
      message: "Sub Category Retrieve Successful",
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

export default getAllSubCategoryController;
