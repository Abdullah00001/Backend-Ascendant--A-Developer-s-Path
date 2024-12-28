import { NextFunction, Request, Response } from "express";
import SubCategory from "../../models/subCategory.model.js";

const deleteSubCategoryControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    await SubCategory.findByIdAndDelete(id);
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

export default deleteSubCategoryControllers;
