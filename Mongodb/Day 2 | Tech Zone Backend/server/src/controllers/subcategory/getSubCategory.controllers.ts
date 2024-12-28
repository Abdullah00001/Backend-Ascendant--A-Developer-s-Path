import { NextFunction, Request, Response } from "express";
import SubCategory from "../../models/subCategory.model.js";

const getSubCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await SubCategory.findById(id).populate('category');
    res.status(200).json({
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

export default getSubCategoryController;
