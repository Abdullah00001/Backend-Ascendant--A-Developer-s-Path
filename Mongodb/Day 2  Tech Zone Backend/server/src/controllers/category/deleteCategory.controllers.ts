import { NextFunction, Request, Response } from "express";
import Category from "../../models/category.model.js";

const deleteCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res
      .status(200)
      .json({ status: "success", message: "Category Deleted Successful" });
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

export default deleteCategoryController;
