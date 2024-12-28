import { NextFunction, Request, Response } from "express";
import Category from "../../models/category.model.js";

const updateCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      status: "success",
      message: "Category Update Successful",
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

export default updateCategoryController;
