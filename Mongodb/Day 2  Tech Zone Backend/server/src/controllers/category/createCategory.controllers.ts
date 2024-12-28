import { NextFunction, Request, Response } from "express";
import Category from "../../models/category.model.js";

const createCategoryControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newCategory = new Category(req.body);
    const data = await newCategory.save();
    res
      .status(201)
      .json({ status: "success", message: "New Category Created", data: data });
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

export default createCategoryControllers;
